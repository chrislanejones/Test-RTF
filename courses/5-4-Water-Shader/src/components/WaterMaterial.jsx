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
    #include "lygia/generative/voronoise.glsl"
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
      float adjustedTime = uTime * uSpeed;
      float noise = 0.0;
if (uNoiseType == 0)

      float noise = pnoise(vec3(vUv * uRepeat, adjustedTime * 0.5), vec3(100.0, 24.0, 112.0));
      noise = smoothstep(uFoam, uFoamTop, noise);
      vec3 intermediateColor = uColor * 1.8;
      vec3 topColor = intermediateColor * 2.0;
      vec3 black = vec3(0.0);
      vec3 finalColor = uColor;
      finalColor = mix(uColor, intermediateColor, step(0.01, noise));
      finalColor = mix(finalColor, topColor, step(1.0, noise));
      gl_FragColor = vec4(finalColor, uOpacity);
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`)
);
