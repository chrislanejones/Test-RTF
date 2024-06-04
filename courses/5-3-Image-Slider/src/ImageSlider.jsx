import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import zustand from "zustand";
import { useSlider } from "./hooks/useSlider";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three/src/math/MathUtils.js";

const ImageSliderMaterial = shaderMaterial(
  {
    uProgression: 1.0,
    uTexture: undefined,
    uPrevTexture: undefined,
    uDirection: 1,
  },
  /*glsl*/ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  /*glsl*/ ` 
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform sampler2D uPrevTexture;
    uniform float uProgression;
    uniform int uDirection;
  
    void main() {
      vec2 uv = vUv;
      vec4 curTexture = texture2D(uTexture, vUv);
      vec4 prevTexture = texture2D(uPrevTexture, vUv);
      
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
  const material = useRef();

  useEffect(() => {
    const newImage = image;
    material.current.uProgression = 0;

    return () => {
      setLastImage(newImage);
    };
  }, [image]);

  useFrame(() => {
    material.current.uProgression = MathUtils.lerp(
      material.current.uProgression,
      1,
      0.05
    );
  });

  const viewport = useThree((state) => state.viewport);
  let ratio = viewport.height / (height / fillPercent);
  if (viewport.width < viewport.height) {
    ratio = viewport.width / (width / fillPercent);
  }
  return (
    <mesh>
      <planeGeometry args={[width * ratio, height * ratio]} />
      <imageSliderMaterial
        ref={material}
        uTexture={texture}
        uPrevTexture={prevTexture}
        uProgression={0.5}
        uDirection={direction === "next" ? 1 : -1}
      />
    </mesh>
  );
};

useSlider.getState().items.forEach((item) => {
  useTexture.preload(item.image);
});
