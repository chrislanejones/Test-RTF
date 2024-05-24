import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const ArtLeft03Material = shaderMaterial(
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
    gl_FragColor = vec4(uColor, 1.0);
  }
  `
);
