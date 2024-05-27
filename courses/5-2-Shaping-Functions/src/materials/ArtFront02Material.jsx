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

// Step 
//   void main() {
//   float pct = 1.0;
//   pct = step(0.5, vUv.x);
//   vec3 finalColor = pct * uColor;
//   gl_FragColor = vec4(finalColor, 1.0);
// }  

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
// void main() {
//   vec2 repeatedUvs = fract(vUv * 8.0 - 0.125);
//   float verticalStripes = step(0.75, repeatedUvs.x);
//   float horizontalStripes = step(0.75, repeatedUvs.y);
//   float pct = verticalStripes * horizontalStripes;
//   vec3 finalColor = uColor * pct;
//   gl_FragColor = vec4(finalColor, 1.0);
// }

// Combining effects (Broken Checkboard)
// void main() {
//     vec2 repeatedUvs = fract(vUv * 8.0 - 0.25);
//     float verticalRectangle = step(0.5, repeatedUvs.x) * step(0.35, repeatedUvs.y);
//     float horizontalLine = step(0.9, repeatedUvs.y);
//     float pct = verticalRectangle + horizontalLine;
//     vec3 finalColor = uColor * pct;
//   gl_FragColor = vec4(finalColor, 1.0);
// }

// Piet Mondrian
vec3 red    = vec3(0.81, 0.15, 0.15);
vec3 blue   = vec3(0.215, 0.152, 0.615);
vec3 yellow = vec3(0.89, 0.62, 0.26);
vec3 yellowFluo = vec3(0.949,0.90,0.0627);
vec3 white  = vec3(0.89, 0.89, 0.89);
vec3 black  = vec3(0.22, 0.22, 0.22);
vec3 green = vec3(0.28, 0.61,	0.29);

void main() {
  vec3 finalColor = white;

  // Blue and Red Right
  finalColor = mix(finalColor, black, step(0.5, vUv.x));
  finalColor = mix(finalColor, red, step(0.55, vUv.x));
  finalColor = mix(finalColor, black, step(0.5, vUv.x) * step(0.45, vUv.y));
  finalColor = mix(finalColor, blue, step(0.55, vUv.x) * step(0.5, vUv.y));

  finalColor = mix(finalColor, black, step(vUv.x, 0.5) * step(vUv.y, 0.24));
  finalColor = mix(finalColor, yellow, step(vUv.x, 0.5) * step(vUv.y, 0.2));

  finalColor = mix(finalColor, black, step(vUv.x, 0.5) * step(0.6, vUv.y) * step(vUv.y, 0.64));
  finalColor = mix(finalColor, black, step(vUv.x, 0.25) * step(0.20, vUv.x) * step(0.64, vUv.y));

  finalColor = mix(finalColor, green, step(vUv.x, 0.2) * step(0.2, vUv.y) * step(0.64, vUv.y));


  finalColor = mix(finalColor, yellowFluo, step(vUv.x, 0.5) * step(0.25, vUv.x) * step(0.64, vUv.y) * step(vUv.y, 0.82));
  finalColor = mix(finalColor, black, step(vUv.x, 0.5) * step(0.25, vUv.x) * step(0.82, vUv.y) * step(vUv.y, 0.86));

  gl_FragColor = vec4(finalColor, 1.0);
}
 `
);
