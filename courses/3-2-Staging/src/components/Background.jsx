import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Background = () => {
  const map = useTexture(
    "/textures/tech_noir__cyberpunk_showroom_filled_with_spotlig.jpg"
  );
  return (
    <>
      <mesh>
        <sphereGeometry args={[5, 64, 64]} />
        <meshBasicMaterial side={THREE.BackSide} map={map} toneMapped={false} />
      </mesh>
    </>
  );
};
