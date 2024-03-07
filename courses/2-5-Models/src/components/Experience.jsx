import { useFBX, useGLTF, Gltf } from "@react-three/drei";

export const Experience = () => {
  const dino = useFBX("models/Dino.fbx");

  return (
    <>
      <Gltf
        src="models/breakroom.gltf"
        scale={0.02}
        position-z={-1}
        rotation-y={Math.PI / 2}
      />
      <Gltf src="models/Fish.gltf" />
      <primitive object={dino} scale={0.01} position-x={-3} />
    </>
  );
};
