import { useGLTF } from "@react-three/drei";
import React from "react";

export function TransitionModel({ model, visible, ...props }) {
  const { scene } = useGLTF(`/models/${model}.glb`);

  return (
    <group {...props} dispose={null} visible={visible}>
      <primitive object={scene} />
    </group>
  );
}
