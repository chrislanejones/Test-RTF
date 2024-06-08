import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import zustand from "zustand";
import { useSlider } from "./hooks/useSlider";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three/src/math/MathUtils.js";
import { MirroredRepeatWrapping } from "three";
import { useSpring } from "framer-motion";

const PUSH_FORCE = 1.4;

const ImageSliderMaterial = shaderMaterial(
  {
    uProgression: 1.0,
    uTexture: undefined,
    uPrevTexture: undefined,
    udispTexture: undefined,
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
    uniform sampler2D udispTexture;
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

    float sdRoundedBox( in vec2 p, in vec2 b, in vec4 r )
  {
    r.xy = (p.x>0.0)?r.xy : r.zw;
    r.x  = (p.y>0.0)?r.x  : r.y;
    vec2 q = abs(p)-b+r.x;
    return min(max(q.x,q.y),0.0) + length(max(q,0.0)) - r.x;
  }
  
    void main() {
      vec2 uv = vUv;
      // float noiseFactor = noise(gl_FragCoord.xy * 0.05);
      float noiseFactor = 0.0;
      float dispTexture = texture2D(udispTexture, uv).r;
      noiseFactor = dispTexture;

      vec2 distortedPosition = vec2(uv.x - float(uDirection) * (1.0 - uProgression) * noiseFactor, uv.y);

      float curTextureR = texture2D(uTexture, distortedPosition + vec2(vPushed * 0.062)).r;
      float curTextureG = texture2D(uTexture, distortedPosition + vec2(vPushed * 0.042)).g;
      float curTextureB = texture2D(uTexture, distortedPosition + vec2(vPushed * -0.032)).b;
      float curTextureA = texture2D(uTexture, distortedPosition).a;
      vec4 curTexture = vec4(curTextureR, curTextureG, curTextureB, curTextureA);

      vec2 distortedPositionPrev = vec2(uv.x + float(uDirection) * uProgression * noiseFactor, uv.y);
      vec4 prevTexture = texture2D(uPrevTexture, distortedPositionPrev);
      vec4 finalTexture = mix(prevTexture, curTexture, uProgression);

      vec2 centeredUv = (vUv - 0.5) * 2.0;
      float frame = sdRoundedBox(centeredUv, vec2(1.0), vec4(0.1, 0.0, 0.0, 0.1));
      frame = smoothstep(0.0, 0.002, -frame);
      finalTexture.a *= frame;

    gl_FragColor = finalTexture;
    #include <tonemapping_fragment>
    #include <encodings_fragment>

  }`
);

extend({
  ImageSliderMaterial,
});

export const ImageSlider = ({ width = 3, height = 4, fillPercent = 0.75 }) => {
  const dispTexture = useTexture("displacement/TCom_Ice_Cracked_header.jpg");
  const { items, curSlide, direction } = useSlider();
  const image = items[curSlide].image;
  const texture = useTexture(image);
  const [lastImage, setLastImage] = useState(image);
  const prevTexture = useTexture(lastImage);
  const hovered = useRef(false);
  const [transition, setTransition] = useState(false);
  const progression = useSpring(0, {
    stiffness: 1500,
    damping: 250,
    mass: 2,
  });

  texture.wrapS =
    texture.wrapT =
    prevTexture.wrapS =
    prevTexture.wrapT =
      MirroredRepeatWrapping;

  const material = useRef();

  useEffect(() => {
    const newImage = image;
    material.current.uProgression = 0;
    progression.setCurrent(0);
    progression.set(1.0);
    setTransition(true);
    const timeout = setTimeout(() => {
      setTransition(false);
    }, 1600);

    return () => {
      setLastImage(newImage);
      clearTimeout(timeout);
    };
  }, [image]);

  useFrame(({ mouse }) => {
    material.current.uProgression = progression.get();
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
        udispTexture={dispTexture}
        uProgression={0.5}
        uDirection={direction === "next" ? 1 : -1}
        uPushForce={0}
        transparent
        // wireframe
      />
    </mesh>
  );
};

useSlider.getState().items.forEach((item) => {
  useTexture.preload(item.image);
});

useTexture.preload("displacement/TCom_Ice_Cracked_header.jpg");
