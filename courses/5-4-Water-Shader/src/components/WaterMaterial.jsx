import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";
import { resolveLygia } from "resolve-lygia";

export const WaterMaterial = shaderMaterial(
  {
    uColor: new Color("skyblue"),
    uOpacity: 0.8,
    uTime: 0,
    uSpeed: 0.5,
    uRepeat: 20.0,
    uNoiseType: 0,
    uFoam: 0.4,
    uFoamTop: 0.7,
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
    uniform float uTime;
    uniform float uSpeed;
    uniform float uRepeat;
    uniform int uNoiseType;
    uniform float uFoam;
    uniform float uFoamTop;
    
      void main() {
  float noise = pnoise(vec3(vUv * 10.0, 1.0), vec3(100.0, 24.0, 112.0));
  vec3 black = vec3(0.0);
  vec3 finalColor = mix(uColor, black, noise);
  gl_FragColor = vec4(finalColor, uOpacity);
  #include <tonemapping_fragment>
  #include <encodings_fragment>
}
`)
);
