import { Hud, OrthographicCamera, shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Color } from "three";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { MathUtils } from "three/src/math/MathUtils.js";
import { TRANSITION_DURATION } from "./UI";

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
    transitionMaterial.current.uniforms.uProgression.value = MathUtils.lerp(
      transitionData.current.from,
      transitionData.current.to,
      (new Date() - transitionData.current.started) /
        (TRANSITION_DURATION * 1000)
    );
  );
});


export const ScreenTransition = ({ transition, color }) => {
  const transitionMaterial = useRef();

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

extend({ ScreenTransitionMaterial });
