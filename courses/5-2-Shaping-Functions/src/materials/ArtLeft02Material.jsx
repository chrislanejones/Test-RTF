import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const ArtLeft02Material = shaderMaterial(
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

  float sdRoundedBox( in vec2 p, in vec2 b, in vec4 r )
{
    r.xy = (p.x>0.0)?r.xy : r.zw;
    r.x  = (p.y>0.0)?r.x  : r.y;
    vec2 q = abs(p)-b+r.x;
    return min(max(q.x,q.y),0.0) + length(max(q,0.0)) - r.x;
}

void main() {
  vec2 translatedUvs = (vUv - 0.5) * 2.0;
  float roundedBoxDistance
    = sdRoundedBox(translatedUvs, vec2(0.2), vec4(0.01));
  float pct = step(roundedBoxDistance, 0.0);
  vec3 finalColor = pct * uColor;
  gl_FragColor = vec4(finalColor, 1.0);
}
  `
);
