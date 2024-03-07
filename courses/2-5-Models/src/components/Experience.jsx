import { useFBX, useGLTF, Gltf } from "@react-three/drei";

export const Experience = () => {
  const dino = useFBX("models/Dino.fbx");
  const store = useFBX("models/Pepsi.fbx");

  return (
    <>
      <Gltf src="models/Fish.gltf" />
      <primitive object={dino} scale={0.01} position-x={-3} />
      <primitive
        object={store}
        scale={0.03}
        position-z={-10}
        rotation-y={Math.PI / 2}
      />
    </>
  );
};
