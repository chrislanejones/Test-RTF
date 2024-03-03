import { PivotControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export const MoveableItem = (props) => {
  const { children } = props;
  const ref = useRef();

  const displayItemNewPosition = () => {
    const newWorldPosition = new THREE.Vector3();
    ref.current.getWorldPosition(newWorldPosition);
    console.log("New position: ", [
      newWorldPosition.x,
      newWorldPosition.y,
      newWorldPosition.z,
    ]);

    const newWorldRotation = new THREE.Euler();
    ref.current.getWorldQuaternion(newWorldRotation);
    console.log("New rotation: ", [
      newWorldRotation.x,
      newWorldRotation.y,
      newWorldRotation.z,
    ]);
  };

  return (
    <PivotControls depthTest={false} onDragEnd={displayItemNewPosition}>
      <group ref={ref}>{children}</group>
    </PivotControls>
  );
};
