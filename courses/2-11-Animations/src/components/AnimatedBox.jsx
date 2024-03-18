import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const AnimatedBox = ({ boxPositions, ...props }) => {
  const box = useRef();

  useFrame(({ clock }) => {
    const seconds = parseInt(clock.getElapsedTime());
    const targetPosition = boxPositions[seconds % boxPositions.length];

    box.current.position.x = targetPosition.x;
    box.current.position.y = targetPosition.y;
    box.current.position.z = targetPosition.z;
  });

  return (
    <group {...props}>
      <RoundedBox
        scale={0.5}
        position-x={boxPositions[0].x}
        position-y={boxPositions[0].y}
        position-z={boxPositions[0].z}
        ref={box}
      >
        <meshStandardMaterial color="white" />
      </RoundedBox>
    </group>
  );
};
