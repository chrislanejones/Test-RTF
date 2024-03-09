import { useTexture } from "@react-three/drei";

export const Experience = () => {
  const texture = useTexture("textures/PavingStones130_1K_Color.jpg");

  return (
    <>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};
