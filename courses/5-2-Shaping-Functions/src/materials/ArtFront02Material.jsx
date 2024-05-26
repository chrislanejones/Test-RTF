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

// Mix
//   void main() {
//   vec3 whiteColor = vec3(1.0);
//   vec3 finalColor = mix(whiteColor, uColor, vUv.y);
//   gl_FragColor = vec4(finalColor, 1.0);
// }


// SmoothStep
// void main() {
//   vec3 whiteColor = vec3(1.0);
//   float pct = smoothstep(0.4, 0.6, vUv.y);
//   vec3 finalColor = mix(whiteColor, uColor, pct);
//   gl_FragColor = vec4(finalColor, 1.0);
// }

// Min & Max
// void main() {
//   vec3 whiteColor = vec3(1.0);
//   float pct = smoothstep(0.4, 0.6, vUv.y);
//   pct = max(pct, 0.4);
//   pct = min(pct, 0.6);
//   vec3 finalColor = mix(whiteColor, uColor, pct);
//   gl_FragColor = vec4(finalColor, 1.0);
// }

// Min & Max 2
// void main() {
//   vec3 whiteColor = vec3(1.0);
//   float pct = smoothstep(0.4, 0.6, vUv.y);
//   pct = max(pct, 0.4);
//   pct = min(pct, 0.6);
//   vec3 finalColor = mix(whiteColor, uColor, pct);
//   gl_FragColor = vec4(finalColor, 1.0);
// }

// Repeating patterns with modulo (SAW)
// void main() {
//   float pct = mod(vUv.x * 5.0, 1.0);
//   pct = step(pct, 0.5);
//   vec3 finalColor = uColor * pct;
//   gl_FragColor = vec4(finalColor, 1.0);
// }

// Repeating patterns with modulo gradient (SAW)
// void main() {
//   float pct = mod(vUv.x * 5.0, 1.0);
//   vec3 finalColor = uColor * pct;
//   gl_FragColor = vec4(finalColor, 1.0);
// }

// Repeating patterns with modulo gradient (SAW and Fract)
// void main() {
//   float pct = fract(vUv.x * 5.0);
//   vec3 finalColor = uColor * pct;
//   pct = step(pct, 0.5);
//   gl_FragColor = vec4(finalColor, 1.0);
// }

// Combining effects (checkerboard pattern)
// void main() {
//   vec2 repeatedUvs = fract(vUv * 8.0);
//   float verticalStripes = step(0.75, repeatedUvs.x);
//   float horizontalStripes = step(0.75, repeatedUvs.y);
//   float pct = verticalStripes + horizontalStripes;
//   vec3 finalColor = uColor * pct;
//   gl_FragColor = vec4(finalColor, 1.0);
// }

// Combining effects (checkerboard pattern Intersection)
// void main() {
//   vec2 repeatedUvs = fract(vUv * 8.0);
//   float verticalStripes = step(0.75, repeatedUvs.x);
//   float horizontalStripes = step(0.75, repeatedUvs.y);
//   float pct = verticalStripes + horizontalStripes;
//   pct = min(pct, 1.0);
//   vec3 finalColor = uColor * pct;
//   gl_FragColor = vec4(finalColor, 1.0);
// }

// Combining effects (checkerboard pattern Intersection) - Stripes Subtracted
// void main() {
//   vec2 repeatedUvs = fract(vUv * 8.0 - 0.125);
//   float verticalStripes = step(0.75, repeatedUvs.x);
//   float horizontalStripes = step(0.75, repeatedUvs.y);
//   float pct = verticalStripes + horizontalStripes;
//   pct = min(pct, 1.0);
//   vec3 finalColor = uColor * pct;
//   gl_FragColor = vec4(finalColor, 1.0);
// }

// Combining effects (Intersection Only)
void main() {
  vec2 repeatedUvs = fract(vUv * 8.0 - 0.125);
  float verticalStripes = step(0.75, repeatedUvs.x);
  float horizontalStripes = step(0.75, repeatedUvs.y);
  float pct = verticalStripes * horizontalStripes;
  vec3 finalColor = uColor * pct;
  gl_FragColor = vec4(finalColor, 1.0);
}

 `
);
