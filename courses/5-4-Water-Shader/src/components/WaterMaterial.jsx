import { resolveLygia } from "resolve-lygia";

import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const WaterMaterial = shaderMaterial(
  {
    uColor: new Color("skyblue"),
    uOpacity: 0.8,
  },
  /*glsl*/ `
  #include "lygia/generative/pnoise.glsl"
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  resolveLygia(/*glsl*/ ` 
    varying vec2 vUv;
    uniform vec3 uColor;
    uniform float uOpacity;

    void main() {
      gl_FragColor = vec4(uColor, uOpacity);
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`)
);
