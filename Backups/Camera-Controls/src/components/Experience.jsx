import { Environment, Gltf, OrbitControls } from "@react-three/drei";
import { CameraControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
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
