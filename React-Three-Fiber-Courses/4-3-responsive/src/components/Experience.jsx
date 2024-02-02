import { Environment } from "@react-three/drei";

export const Experience = () => {
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
