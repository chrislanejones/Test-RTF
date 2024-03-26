import { RigidBody, vec3 } from "@react-three/rapier";
import { Controls } from "../App";
import { PerspectiveCamera, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { BallCollider } from "@react-three/rapier";

const MOVEMENT_SPEED = 5;
const JUMP_FORCE = 8;

export const Player = () => {
  const rb = useRef();
  const camera = useRef();
  const cameraTarget = useRef(new Vector3(0, 0, 0));
  const [, get] = useKeyboardControls();
  const inTheAir = useRef(false);
  const vel = new Vector3();
  useFrame(() => {
    cameraTarget.current.lerp(vec3(rb.current.translation()), 0.5);
    camera.current.lookAt(cameraTarget.current);
    vel.x = 0;
    vel.y = 0;
    vel.z = 0;
    const curVel = rb.current.linvel();
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
    if (get()[Controls.jump] && !inTheAir.current) {
      vel.y += JUMP_FORCE;
      inTheAir.current = true;
    } else {
      vel.y = curVel.y;
    }
    rb.current.setLinvel(vel, true);
  });

  return (
    <RigidBody
      ref={rb}
      lockRotations
      onCollisionEnter={({ other }) => {
        if (other.rigidBodyObject.name === "ground") {
          inTheAir.current = false;
        }
      }}
      gravityScale={2.5}
    >
      <PerspectiveCamera makeDefault position={[0, 5, 8]} ref={camera} />
      <mesh position-y={0.5} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </RigidBody>
  );
};
