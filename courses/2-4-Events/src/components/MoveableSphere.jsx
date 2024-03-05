import { useCursor, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Controls } from "../App";

const MOVEMENT_SPEED = 0.05;

export const MoveableSphere = (props) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const ref = useRef();

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

  useCursor(hovered);
  let color = hovered ? "pink" : "white";
  if (selected) {
    color = "hotpink";
  }

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => setSelected(!selected)}
      onPointerMissed={() => setSelected(false)}
    >
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
