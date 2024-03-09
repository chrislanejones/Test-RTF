import { useTexture } from "@react-three/drei";

export const Experience = () => {
  const texture = useTexture("textures/matcapTexture.png");

  return (
    <>
      <mesh>
        <boxGeometry />
        <meshMatcapMaterial matcap={texture} />
      </mesh>
    </>
  );
};
