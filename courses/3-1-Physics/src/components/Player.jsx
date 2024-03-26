import { RigidBody, euler, quat, vec3 } from "@react-three/rapier";
import { Controls } from "../App";
import { PerspectiveCamera, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

const MOVEMENT_SPEED = 5;
const JUMP_FORCE = 8;
const ROTATION_SPEED = 5;

export const Player = () => {
  const rb = useRef();
  const camera = useRef();
  const cameraTarget = useRef(new Vector3(0, 0, 0));
  const [, get] = useKeyboardControls();
  const inTheAir = useRef(false);
  const vel = new Vector3();
  useFrame(() => {
    // Positon of RigidBody
    cameraTarget.current.lerp(vec3(rb.current.translation()), 0.5);
    camera.current.lookAt(cameraTarget.current);
    const rotVel = {
      x: 0,
      y: 0,
      z: 0,
    };

    const curVel = rb.current.linvel();
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
      rotVel.y += ROTATION_SPEED;
    }
    if (get()[Controls.right]) {
      rotVel.y -= ROTATION_SPEED;
    }

    rb.current.setAngvel(rotVel, true);
    // apply rotation to x and z to go in the right direction
    const eulerRot = euler().setFromQuaternion(quat(rb.current.rotation()));
    vel.applyEuler(eulerRot);

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
