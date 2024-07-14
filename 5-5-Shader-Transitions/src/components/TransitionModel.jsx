import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { MathUtils } from "three/src/math/MathUtils.js";
import { CAKE_TRANSITION_DURATION } from "./UI";
import { useFrame } from "@react-three/fiber";

export function TransitionModel({ model, visible, ...props }) {
  const { scene, materials } = useGLTF(`/models/${model}.glb`);
  console.log(materials);

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.transparent = true;
      material.onBeforeCompile = (shader) => {
        console.log(shader);
      };
    });
  }, [materials]);

  const transitionData = useRef({
    from: 0,
    to: 1,
    started: 0,
  });

  const [animatedVisible, setAnimatedVisible] = useState(visible);

  useEffect(() => {
    if (visible === animatedVisible) {
      return;
    }
    if (!visible) {
      transitionData.current.from = 1;
      transitionData.current.to = 0;
      transitionData.current.started = new Date();
    }
    const timeout = setTimeout(() => {
      if (visible) {
        transitionData.current.from = 0;
        transitionData.current.to = 1;
        transitionData.current.started = new Date();
      }
      setAnimatedVisible(visible);
    }, CAKE_TRANSITION_DURATION * 1000);
    return () => clearTimeout(timeout);
  }, [visible]);

  useFrame(() => {
    Object.values(materials).forEach((material) => {
      material.transparent;
    });
  });

  return (
    <group {...props} dispose={null} visible={animatedVisible}>
      <primitive object={scene} />
    </group>
  );
}
