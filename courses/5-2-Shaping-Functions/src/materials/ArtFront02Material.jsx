import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const ArtFront02Material = shaderMaterial(
  {
    uColor: new Color("pink"),
    uTime: 0,
  },
  /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  /* glsl */ `
  uniform vec3 uColor;
  uniform float uTime;
  varying vec2 vUv;

//   void main() {
//   vec3 whiteColor = vec3(1.0);
//   vec3 finalColor = mix(whiteColor, uColor, vUv.y);
//   gl_FragColor = vec4(finalColor, 1.0);
// }

void main() {
  vec3 whiteColor = vec3(1.0);
  float pct = mix(0.0, 0.3, vUv.y);
  vec3 finalColor = mix(whiteColor, uColor, pct);
  gl_FragColor = vec4(finalColor, 1.0);
}
  `
);
