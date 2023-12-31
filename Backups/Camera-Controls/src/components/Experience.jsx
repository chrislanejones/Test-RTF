import { Environment, Gltf, OrbitControls } from "@react-three/drei";
import { CameraControls } from "@react-three/drei";
import { useRef } from "react";
import { useControls } from "leva";

export const Experience = () => {
  const controls = useRef();

  useControls("Dolly", {
    in: button(() => controls.current.dolly(1, true)),
    in: button(() => controls.current.dolly(2, true)),
  });

  return (
    <>
      <CameraControls ref={controls} />
      <Gltf
        position={[0, 0, 0]}
        src="models/apple_iphone_15_pro_max_black.glb"
        // "Apple iPhone 15 Pro Max Black" (https://skfb.ly/oLpPT) by polyman is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
      />
      <group rotation-y={Math.PI}>
        <Environment preset="warehouse" blur />
      </group>
    </>
  );
};
