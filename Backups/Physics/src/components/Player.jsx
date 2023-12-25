import { PerspectiveCamera, useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { RigidBody, euler, quat, vec3 } from "@react-three/rapier";
import { useRef } from "react";
import { Vector3 } from "three";
import { Controls } from "../App";
const MOVEMENT_SPEED = 5;
const JUMP_FORCE = 8;
const ROTATION_SPEED = 5;

export const Player = () => {
  const rb = useRef();
  const camera = useRef();
  const cameraTarget = useRef(new Vector3(0, 0, 0));
  const [, get] = useKeyboardControls();
  const inTheAir = useRef(false);
  const punched = useRef(false);
  const vel = new Vector3();

  useFrame(() => {
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
      inTheAir.current = true;
      vel.y += JUMP_FORCE;
    } else {
      vel.y = curVel.y;
    }
    if (!punched.current) {
      rb.current.setLinvel(vel, true);
    }
  });

  const respawn = () => {
    rb.current.setTranslation({
      x: 0,
      y: 5,
      z: 0,
    });
  };

  const scene = useThree((state) => state.scene);
  const teleport = () => {
    const gateOut = scene.getObjectByName("gateLargeWide_teamYellow");
    rb.current.setTranslation(gateOut.position);
  };

  return (
    <RigidBody
      ref={rb}
      gravityScale={2.5}
      onIntersectionEnter={({ other }) => {
        if (other.rigidBodyObject.name === "space") {
          respawn();
        }
        if (other.rigidBodyObject.name === "gateIn") {
          teleport();
        }
      }}
      lockRotations
      onCollisionEnter={({ other }) => {
        if (other.rigidBodyObject.name === "ground") {
          inTheAir.current = false;
        }
        if (other.rigidBodyObject.name === "swiper") {
          punched.current = true;
          setTimeout(() => {
            punched.current = false;
          }, 200);
        }
      }}
    >
      <PerspectiveCamera ref={camera} makeDefault position={[0, 5, 8]} />
      <mesh position-y={0.5} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </RigidBody>
  );
};
