import { ContactShadows, useGLTF } from "@react-three/drei";
import { Character } from "./Character";

import * as THREE from "three";

export const Experience = () => {
  const woodenSign = useGLTF("models/Wooden Sign.glb");

  return (
    <>
      <group position-x={-1.5} rotation-y={THREE.MathUtils.degToRad(15)}>
        <primitive object={woodenSign.scene} />
      </group>
      <group position={[1.5, 0, 0]} rotation-y={-Math.PI / 4}>
        <Character />
      </group>
      <ContactShadows opacity={0.42} scale={42} far={42} />
    </>
  );
};
