import { useFBX, useGLTF } from "@react-three/drei";

export const Experience = () => {
  const { scene } = useGLTF("models/Fish.gltf");
  const dino = useFBX("models/Dino.fbx");
  const store = useFBX("models/Pepsi.fbx");

  return (
    <>
      <primitive object={scene} />
      <primitive object={dino} scale={0.01} position-x={-3} />
      <primitive object={store} scale={0.08} position-x={15} />
    </>
  );
};
