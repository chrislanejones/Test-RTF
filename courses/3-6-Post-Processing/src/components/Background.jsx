import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Background = () => {
  const map = useTexture(
    "/textures/anime_tavern_with_candle_lights_and_magical_purple.jpg"
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
