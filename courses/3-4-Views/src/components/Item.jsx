import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export const Item = ({ model = "Casual", ...props }) => {
  const { scene } = useGLTF(`/models/${model}.glb`);
  const copiedScene = useMemo(() => scene.clone(), [scene]); // To be able to reuse the same object

  return (
    <group {...props}>
      <primitive object={copiedScene} />
    </group>
  );
};

useGLTF.preload("/models/Classroom.glb");
useGLTF.preload("/models/MacBook Pro.glb");
useGLTF.preload("/models/Oculus Controller.glb");
useGLTF.preload("/models/Phone.glb");
useGLTF.preload("/models/VR Headset.glb");
useGLTF.preload("/models/Flower_1.glb");
useGLTF.preload("/models/Flower_2.glb");
useGLTF.preload("/models/Flower_3.glb");
useGLTF.preload("/models/Flower_4.glb");
useGLTF.preload("/models/Flower_5.glb");
