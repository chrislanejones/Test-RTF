import { RigidBody } from "@react-three/rapier";
import { Controls } from "../App";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
const MOVEMENT_SPEED = 0.5;

export const Player = () => {
  const rb = useRef();
  const [, get] = useKeyboardControls();
  const impulse = new Vector3();
  useFrame(() => {
    impulse.x = 0;
    impulse.y = 0;
    impulse.z = 0;
    if (get()[Controls.forward]) {
      impulse.z -= MOVEMENT_SPEED;
    }
    if (get()[Controls.back]) {
      impulse.z += MOVEMENT_SPEED;
    }
    if (get()[Controls.left]) {
      impulse.x -= MOVEMENT_SPEED;
    }
    if (get()[Controls.right]) {
      impulse.x += MOVEMENT_SPEED;
    }
    if (get()[Controls.jump]) {
    }
    rb.current.applyImpulse(impulse, true);
  });

  <RigidBody ref={rb}>
    <mesh position-y={0.5} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  </RigidBody>;
};
