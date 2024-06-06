import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import zustand from "zustand";
import { useSlider } from "./hooks/useSlider";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three/src/math/MathUtils.js";
import { MirroredRepeatWrapping } from "three";

const PUSH_FORCE = 1.4;

const ImageSliderMaterial = shaderMaterial(
  {
    uProgression: 1.0,
    uTexture: undefined,
    uPrevTexture: undefined,
    uDirection: 1,
    uPushForce: PUSH_FORCE,
    uMousePosition: [0, 0],
  },
  /*glsl*/ `
  varying vec2 vUv;
  varying float vPushed;
  uniform float uPushForce;
  uniform vec2 uMousePosition;
  void main() {
    vUv = uv;
    vec2 centeredUv = (vUv - 0.5) * 2.0;
    float pushed = length(centeredUv - uMousePosition);
    pushed = 1.0 - smoothstep(0.0, 1.5, pushed);
    pushed = -uPushForce * pushed;
    vPushed = pushed;
    vec3 dispPosition = position;
    dispPosition.z = pushed;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(dispPosition, 1.0);
  }`,
  /*glsl*/ ` 
    varying vec2 vUv;
    varying float vPushed;
    uniform sampler2D uTexture;
    uniform sampler2D uPrevTexture;
    uniform float uProgression;
    uniform int uDirection;

    // Noise Added
    float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    }

    float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);

    float res = mix(
    mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
    mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
    return res*res;
    }
  
    void main() {
      vec2 uv = vUv;
      float noiseFactor = noise(gl_FragCoord.xy * 0.05);
      vec2 distortedPosition = vec2(uv.x - float(uDirection) * (1.0 - uProgression) * noiseFactor, uv.y);

      float curTextureR = texture2D(uTexture, distortedPosition + vec2(vPushed * 0.062)).r;
      float curTextureG = texture2D(uTexture, distortedPosition + vec2(vPushed * 0.042)).g;
      float curTextureB = texture2D(uTexture, distortedPosition + vec2(vPushed * -0.032)).b;
      float curTextureA = texture2D(uTexture, distortedPosition).a;
      vec4 curTexture = vec4(curTextureR, curTextureG, curTextureB, curTextureA);

      vec2 distortedPositionPrev = vec2(uv.x + float(uDirection) * uProgression * noiseFactor, uv.y);
      vec4 prevTexture = texture2D(uPrevTexture, distortedPositionPrev);
      vec4 finalTexture = mix(prevTexture, curTexture, uProgression);

    gl_FragColor = finalTexture;
    #include <tonemapping_fragment>
    #include <encodings_fragment>

  }`
);

extend({
  ImageSliderMaterial,
});

export const ImageSlider = ({ width = 3, height = 4, fillPercent = 0.75 }) => {
  const { items, curSlide, direction } = useSlider();
  const image = items[curSlide].image;
  const texture = useTexture(image);
  const [lastImage, setLastImage] = useState(image);
  const prevTexture = useTexture(lastImage);

  const [transition, setTransition] = useState(false);

  texture.wrapS =
    texture.wrapT =
    prevTexture.wrapS =
    prevTexture.wrapT =
      MirroredRepeatWrapping;

  const material = useRef();

  useEffect(() => {
    const newImage = image;
    material.current.uProgression = 0;

    material.current.uMousePosition = [direction === "prev" ? -1 : 1, 0];
    setTransition(true);
    const timeout = setTimeout(() => {
      setTransition(false);
    }, 1600);
    return () => {
      setLastImage(newImage);
      clearTimeout(timeout);
    };
  }, [image]);

  const hovered = useRef(false);

  useFrame(({ mouse }) => {
    material.current.uMousePosition = [
      MathUtils.lerp(
        material.current.uMousePosition[0],
        transition
          ? (direction === "prev" ? 1.0 : -1.0) * material.current.uProgression
          : mouse.x,
        0.05
      ),
      MathUtils.lerp(
        material.current.uMousePosition[1],
        transition ? -1.0 * material.current.uProgression : mouse.y,
        0.05
      ),
    ];

    // material.current.uProgression = MathUtils.lerp(
    //   material.current.uProgression,
    //   1,
    //   0.05
    // );

    material.current.uPushForce = MathUtils.lerp(
      material.current.uPushForce,
      transition
        ? -PUSH_FORCE * 1.52 * Math.sin(material.current.uProgression * 3.14)
        : hovered.current
        ? PUSH_FORCE
        : 0,
      0.05
    );
  });

  const viewport = useThree((state) => state.viewport);
  let ratio = viewport.height / (height / fillPercent);
  if (viewport.width < viewport.height) {
    ratio = viewport.width / (width / fillPercent);
  }
  return (
    <mesh
      onPointerEnter={() => (hovered.current = true)}
      onPointerLeave={() => (hovered.current = false)}
    >
      <planeGeometry args={[width * ratio, height * ratio, 32, 32]} />
      <imageSliderMaterial
        ref={material}
        uTexture={texture}
        uPrevTexture={prevTexture}
        uProgression={0.5}
        uDirection={direction === "next" ? 1 : -1}
        // wireframe
      />
    </mesh>
  );
};

useSlider.getState().items.forEach((item) => {
  useTexture.preload(item.image);
});
