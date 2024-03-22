import { RigidBody } from "@react-three/rapier";
import { Controls } from "../App";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

const MOVEMENT_SPEED = 5;

export const Player = () => {
  const [, get] = useKeyboardControls();
  const rb = useRef();
  const vel = new Vector3();
  useFrame(() => {
    vel.x = 0;
    vel.y = 0;
    vel.z = 0;
    if (get()[Controls.forward]) {
      vel.z -= MOVEMENT_SPEED;
    }
    if (get()[Controls.back]) {
      vel.z += MOVEMENT_SPEED;
    }
    if (get()[Controls.left]) {
      vel.x -= MOVEMENT_SPEED;
    }
    if (get()[Controls.right]) {
      vel.x += MOVEMENT_SPEED;
    }
    if (get()[Controls.jump]) {
    }
    rb.current.setLinvel(vel, true);
  });

  <RigidBody ref={rb} lockRotations>
    <mesh position-y={0.5} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  </RigidBody>;
};
