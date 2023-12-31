import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Experience = () => {
  const model = useLoader(GLTFLoader, "models/couch.gltf");

  return (
    <>
      <primitive object={model.scene} />
    </>
  );
};
