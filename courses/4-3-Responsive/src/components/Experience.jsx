import { Environment } from "@react-three/drei";

export const Experience = () => {
  const { isMobile } = useMobile();
  return (
    <>
      <Environment preset="sunset" />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};
