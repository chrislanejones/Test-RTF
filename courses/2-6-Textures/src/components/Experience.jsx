import { useTexture } from "@react-three/drei";
export const Experience = () => {
  const props = useTexture({
    map: "textures/PavingStones130_1K_Color.jpg",
    normalMap: "textures/PavingStones130_1K_NormalGL.jpg",
    roughnessMap: "textures/PavingStones130_1K_Roughness.jpg",
    aoMap: "textures/PavingStones130_1K_AmbientOcclusion.jpg",
  });

  return (
    <>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial {...props} />
      </mesh>
      <mesh position={[0.5, 0.7, 0.7]}>
        <boxGeometry />
        <meshStandardMaterial {...props} />
      </mesh>
      <mesh position={[-0.7, 0.7, -0.7]}>
        <boxGeometry />
        <meshStandardMaterial {...props} />
      </mesh>
    </>
  );
};
