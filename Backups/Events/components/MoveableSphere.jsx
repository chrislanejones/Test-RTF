import { useCursor, useKeyboardControls } from "@react-three/drei";
import { useState, useRef } from "react";
import { Controls } from "../App";
import { useFrame } from "@react-three/fiber";

const MOVEMENT_SPEED = 0.05;

export const MoveableSphere = (props) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const [selected, setSelected] = useState(false);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);

  useFrame(() => {
    if (!selected) {
      return;
    }
    if (forwardPressed) {
      ref.current.position.y += MOVEMENT_SPEED;
    }
    if (backPressed) {
      ref.current.position.y -= MOVEMENT_SPEED;
    }
    if (leftPressed) {
      ref.current.position.x -= MOVEMENT_SPEED;
    }
    if (rightPressed) {
      ref.current.position.x += MOVEMENT_SPEED;
    }
  });

  let color = hovered ? "blue" : "white";
  if (selected) {
    color = "hotpink";
  }

  return (
    <mesh
      ref={ref}
      {...props}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        setSelected(!selected);
      }}
      onPointerMissed={() => setSelected(false)}
    >
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
