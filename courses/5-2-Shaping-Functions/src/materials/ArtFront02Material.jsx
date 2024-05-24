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

  void main() {
  float pct = 1.0;
  pct = step(0.5, vUv.x);
  vec3 finalColor = pct * uColor;
  gl_FragColor = vec4(finalColor, 1.0);
}
  `
);
