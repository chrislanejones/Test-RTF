import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";
import { resolveLygia } from "resolve-lygia";

export const WaterMaterial = shaderMaterial(
  {
    uColor: new Color("skyblue"),
    uOpacity: 0.8,
  },
  /*glsl*/ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  resolveLygia(/*glsl*/ `
    #include "lygia/generative/pnoise.glsl" 
    varying vec2 vUv;
    uniform vec3 uColor;
    uniform float uOpacity;

    void main() {
      // pnoise - https://lygia.xyz/generative/pnoise
      float noise = pnoise(vec3(vUv * 10.0, 1.0), vec3(100.0, 24.0, 112.0));
      gl_FragColor = vec4(uColor, uOpacity);
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`)
);
