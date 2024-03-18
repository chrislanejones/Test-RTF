import { useRef } from "react";
import * as THREE from "three";
export const Background = () => {
  const skyMaterial = useRef();

  return (
    <mesh rotation-x={Math.PI / 4}>
      <sphereGeometry args={[16, 32, 32]} />
      <meshBasicMaterial
        side={THREE.BackSide}
        color={"#313131"}
        ref={skyMaterial}
      />
    </mesh>
  );
};
