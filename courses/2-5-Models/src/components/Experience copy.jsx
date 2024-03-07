import { useFBX, useGLTF, Gltf } from "@react-three/drei";

export const Experience = () => {
  const dino = useFBX("models/Dino.fbx");
  const stores = useFBX("models/pepsi-small.fbx");

  return (
    <>
      <Gltf src="models/Fish.gltf" />
      <primitive object={dino} scale={0.01} position-x={-3} />
      <primitive
        object={stores}
        scale={0.01}
        position-z={-1}
        rotation-y={Math.PI / 2}
      />
    </>
  );
};
