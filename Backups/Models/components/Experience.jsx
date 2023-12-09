import { useGLTF } from "@react-three/drei";

export const Experience = () => {
  const { scene } = useGLTF("models/Fish.gltf");

  return (
    <>
      <primitive object={scene} />
    </>
  );
};
