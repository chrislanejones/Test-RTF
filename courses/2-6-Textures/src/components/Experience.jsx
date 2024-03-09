import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Experience = () => {
  const texture = useTexture("textures/PavingStones130_1K_Color.jpg");

  texture.repeat.set(3, 3);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};
