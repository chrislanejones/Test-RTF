import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { MathUtils } from "three/src/math/MathUtils.js";
import { CAKE_TRANSITION_DURATION } from "./UI";

export function TransitionModel({ model, visible, ...props }) {
  const { scene } = useGLTF(`/models/${model}.glb`);

  const transitionData = useRef({
    from: 0,
    to: 1,
    started: 0,
  });

  const [animatedVisible, setAnimatedVisible] = useState(visible);

  useEffect(() => {
    if (visible == animatedVisible) {
      return;
    }
    if (!visible) {
      transitionData.current.from = 1;
    }
    const timeout = setTimeout(() => {}, CAKE_TRANSITION_DURATION * 1000);
  }, [visible]);

  return (
    <group {...props} dispose={null} visible={visible}>
      <primitive object={scene} />
    </group>
  );
}
