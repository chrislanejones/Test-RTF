import { PivotControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export const MoveableItem = ({ children }) => {
  const ref = useRef();
  const displayItemNewPosition = () => {
    const newPosition = new THREE.Vector3();
    ref.current.getWorldPosition(newPosition);
    console.log("new position", newPosition);
    const newRotation = new THREE.Euler();
    ref.current.getWorldQuaternion(newRotation);
    console.log("new position", newRotation);
  };

  return (
    <PivotControls depthTest={false} onDragEnd={displayItemNewPosition}>
      <group ref={ref}>{children}</group>
    </PivotControls>
  );
};
