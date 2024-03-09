import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Experience = () => {
  const texture = useTexture("textures/PavingStones130_1K_Color.jpg");

  texture.repeat.set(2, 2);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.rotation = Math.PI / 6;

  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 40, 40]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};
