import { useFBX, useGLTF } from "@react-three/drei";

export const Experience = () => {
  const { scene } = useGLTF("models/Fish.gltf");
  const dino = useFBX("models/Dino.fbx");
  return (
    <>
      <primitive object={scene} />
      <primitive object={dino} />
    </>
  );
};
