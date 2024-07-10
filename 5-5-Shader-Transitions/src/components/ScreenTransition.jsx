import { Hud, OrthographicCamera, shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Color } from "three";

const ScreenTransitionMaterial = shaderMaterial(
  {
    uColor: new Color("pink"),
    uProgression: 0,
  },
  /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  /* glsl */ `
  uniform vec3 uColor;
  varying vec2 vuv;
  uniform float uProgression;

  void main() {
    float alpha = 1.0 - smoothstep(0.0, 1.0, uProgression);
    vec3 finalColor = uColor;
    gl_fragment = vec4(finalColor, alpha);
    #include <encodings_fragment>
  }`
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
  }, [transition]);
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
        <screenTransitionMaterial ref={transitionMaterial} transparent uColor />
      </mesh>
    </Hud>
  );
};
