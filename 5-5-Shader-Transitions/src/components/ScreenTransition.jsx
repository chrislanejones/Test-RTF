import { Hud, OrthographicCamera, shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Color } from "three";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three/src/math/MathUtils.js";
import { TRANSITION_DURATION } from "./UI";

const ScreenTransitionMaterial = shaderMaterial(
  {
    uColor: new Color("pink"),
    uProgression: 0,
    uResolution: [0, 0],
  },
  /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  /* glsl */ `
  uniform vec3 uColor;
  uniform vec2 uResolution;
  uniform float uProgression;
  varying vec2 vUv;
  const float pi = 3.141592654;

void main() {
  vec2 uvs = vUv - 0.5;
  uvs.x *= uResolution.x / uResolution.y;
  float r = length(uvs * 0.92);
  float theta = atan(uvs.y, uvs.x);
  float spiral = fract(2.5 * theta / pi + 4.0 * pow(r, 0.4) - 4.5 * uProgression);
  float animatedProgression = smoothstep(0.25, 1.0, uProgression);
  float alphaSpiral = step(animatedProgression, spiral);

  float animatedProgressionCircle = smoothstep(0.25, 0.8, uProgression);
  float alphaCircle = step(animatedProgressionCircle, r);
  float alpha = max(alphaSpiral, alphaCircle);

  vec3 finalColor = uColor;

  gl_FragColor = vec4(finalColor, alpha);
  #include <encodings_fragment>
  }
  `
);

extend({ ScreenTransitionMaterial });

export const ScreenTransition = ({ transition, color }) => {
  const transitionMaterial = useRef();
  const transitionData = useRef({
    from: 0,
    to: 0,
    started: 0,
  });

  useEffect(() => {
    transitionData.current.from =
      transition && transitionData.current.started ? 1 : 0;
    transitionData.current.to = transition ? 0 : 1;
    transitionData.current.started = new Date();
  }, [transition]);

  useFrame(() => {
    if (!transitionMaterial.current) {
      return;
    }
    transitionMaterial.current.uniforms.uResolution.value = [
      window.innerWidth,
      window.innerHeight,
    ];
    transitionMaterial.current.uniforms.uProgression.value = MathUtils.lerp(
      transitionData.current.from,
      transitionData.current.to,
      (new Date() - transitionData.current.started) /
        (TRANSITION_DURATION * 1000)
    );
  });
  return (
    <Hud>
      <OrthographicCamera
        makeDefault
        top={1}
        right={1}
        bottom={-1}
        left={-1}
        near={0}
        far={1}
      />
      <mesh>
        <planeGeometry args={[2, 2]} />
        <screenTransitionMaterial
          ref={transitionMaterial}
          transparent
          uColor={color}
        />
      </mesh>
    </Hud>
  );
};
