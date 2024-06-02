import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import zustand from "zustand";
import { useSlider } from "./hooks/useSlider";
import { useEffect, useState } from "react";

const ImageSliderMaterial = shaderMaterial(
  {
    uTexture: undefined,
    uPrevTexture: undefined,
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

  void main() {
    vec2 uv = vUv;
    vec4 curTexture = texture2D(uTexture, vUv);
          
    gl_FragColor = curTexture;
    #include <tonemapping_fragment>
    #include <encodings_fragment>
  }`
);

extend({
  ImageSliderMaterial,
});

export const ImageSlider = ({ width = 3, height = 4, fillPercent = 0.75 }) => {
  const { items, curSlide } = useSlider();
  const image = items[curSlide].image;
  const texture = useTexture(image);
  const [lastImage, setLastImage] = useState(image);
  const prevTexture = useTexture(lastImage);

  useEffect(() => {
    const newImage = image;

    return () => {
      setLastImage(newImage);
    };
  }, [image]);

  const viewport = useThree((state) => state.viewport);
  let ratio = viewport.height / (height / fillPercent);
  if (viewport.width < viewport.height) {
    ratio = viewport.width / (width / fillPercent);
  }
  return (
    <mesh>
      <planeGeometry args={[width * ratio, height * ratio]} />
      <imageSliderMaterial uTexture={texture} />
    </mesh>
  );
};

useSlider.getState().items.forEach((item) => {
  useTexture.preload(item.image);
});
