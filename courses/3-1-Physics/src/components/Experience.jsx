import {
  Gltf,
  Grid,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Player } from "./Player";
import { BallCollider, CuboidCollider, RigidBody } from "@react-three/rapier";
import { Playground } from "./Playground";
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export const Experience = () => {
  const shadowCameraRef = useRef();
  useHelper(shadowCameraRef, THREE.CameraHelper);
  return (
    <>
      <directionalLight
        position={[-50, 50, 25]}
        intensity={0.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      >
        <PerspectiveCamera
          ref={shadowCameraRef}
          attach={"shadow-camera"}
          near={55}
          far={86}
          fov={80}
        />
      </directionalLight>{" "}
      <directionalLight position={[10, 10, 5]} intensity={0.2} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Player />
      <Playground />
      <RigidBody
        type="fixed"
        colliders={false}
        sensor
        name="space"
        position-y={-5}
      >
        <CuboidCollider args={[50, 0.5, 50]} />
      </RigidBody>
      <RigidBody
        colliders={false}
        position={[3, 3, 0]}
        gravityScale={0.2}
        restitution={1.2}
      >
        <Gltf src="/models/ball.glb" castShadow />
        <BallCollider args={[1]} />
      </RigidBody>
      <Grid
        sectionSize={3}
        sectionColor={"white"}
        sectionThickness={1}
        cellSize={1}
        cellColor={"#ececec"}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={100}
        fadeStrength={5}
      />
    </>
  );
};
