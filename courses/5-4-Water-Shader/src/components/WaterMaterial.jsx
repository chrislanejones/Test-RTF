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
    uDepth: null,
    uMaxDepth: 1.0,
    uResolution: [0, 0],
    uCameraNear: 0,
    uCameraFar: 0,
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
    uniform sampler2D uDepth;
    uniform float uMaxDepth;
    uniform vec2 uResolution;
    uniform float uCameraNear;
    uniform float uCameraFar;
    
    void main() {
      float adjustedTime = uTime * uSpeed;
      float noise = 0.0;
if (uNoiseType == 0) {
  noise = pnoise(vec3(vUv * uRepeat, adjustedTime * 0.5), vec3(100.0, 24.0, 112.0));
} else if (uNoiseType == 1) {
  vec2 p = 0.5 - 0.5*cos(adjustedTime *vec2(1.0,0.5));
  p = p*p*(3.0-2.0*p);
  p = p*p*(3.0-2.0*p);ren
  p = p*p*(3.0-2.0*p);
  noise = voronoise(vec3(vUv * uRepeat, adjustedTime), p.x, 1.0);
}

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
