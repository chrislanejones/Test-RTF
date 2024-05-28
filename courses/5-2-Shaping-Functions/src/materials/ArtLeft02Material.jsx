import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const ArtLeft02Material = shaderMaterial(
  {
    uColor: new Color("pink"),
    uTime: 0,
    uResolution: [1, 1],
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
  uniform vec2 uResolution;
  varying vec2 vUv;

  float sdRoundedBox( in vec2 p, in vec2 b, in vec4 r )
{
    r.xy = (p.x>0.0)?r.xy : r.zw;
    r.x  = (p.y>0.0)?r.x  : r.y;
    vec2 q = abs(p)-b+r.x;
    return min(max(q.x,q.y),0.0) + length(max(q,0.0)) - r.x;
}

// Rounded Box
// void main() {
//   vec2 translatedUvs = (vUv - 0.5) * 2.0;
//   // Square Shape
//   // float roundedBoxDistance
//   //   = sdRoundedBox(translatedUvs, vec2(0.2), vec4(0.01));
//   float roundedBoxDistance = sdRoundedBox(translatedUvs, vec2(0.5, 0.3), vec4(0.1, 0.0, 0.0, 0.1));
//   float pct = step(roundedBoxDistance, 0.0);
//   vec3 finalColor = pct * uColor;
//   gl_FragColor = vec4(finalColor, 1.0);
// }


// Hexagram - exact (https://www.shadertoy.com/view/tt23RR)
float sdHexagram( in vec2 p, in float r )
{
    const vec4 k = vec4(-0.5,0.8660254038,0.5773502692,1.7320508076);
    p = abs(p);
    p -= 2.0*min(dot(k.xy,p),0.0)*k.xy;
    p -= 2.0*min(dot(k.yx,p),0.0)*k.yx;
    p -= vec2(clamp(p.x,r*k.z,r*k.w),r);
    return length(p)*sign(p.y);
}

// Hexagram 
// void main() {
//   vec2 translatedUvs = (vUv - 0.5) * 2.0;
//   translatedUvs.x *= uResolution.x / uResolution.y;
//   // Square Shape
//   // float roundedBoxDistance
//   //   = sdRoundedBox(translatedUvs, vec2(0.2), vec4(0.01));
//   float hexagramDistance = sdHexagram(translatedUvs, 0.3);
//   float pct = step(hexagramDistance, 0.0);
//   vec3 finalColor = pct * uColor;
//   gl_FragColor = vec4(finalColor, 1.0);
// }


// Hexagram Mutipled With Sin
// void main() {
//   vec2 translatedUvs = (vUv - 0.5) * 2.0;
//   translatedUvs.x *= uResolution.x / uResolution.y;
//   // Square Shape
//   // float roundedBoxDistance
//   //   = sdRoundedBox(translatedUvs, vec2(0.2), vec4(0.01));
//   float hexagramDistance = sin(sdHexagram(translatedUvs, 0.3) * 12.0);
//   float pct = step(hexagramDistance, 0.0);
//   vec3 finalColor = pct * uColor;
//   gl_FragColor = vec4(finalColor, 1.0);
// }

// Hexagram Mutipled With Sin and Animated
void main() {
  vec2 translatedUvs = (vUv - 0.5) * 2.0;
  translatedUvs.x *= uResolution.x / uResolution.y;
  float hexagramDistance = sdHexagram(translatedUvs, 0.3);
  hexagramDistance = sin(hexagramDistance * 12.0 + uTime * 3.0);
  float pct = step(hexagramDistance, 0.0);
  vec3 finalColor = pct * uColor;
  gl_FragColor = vec4(finalColor, 1.0);
}

  `
);
