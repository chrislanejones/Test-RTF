import {
  Gltf,
  Grid,
  OrbitControls,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";
import { BallCollider, CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import * as THREE from "three";
import { Player } from "./Player";
import { Playground } from "./Playground";
export const Experience = () => {
  const shadowCameraRef = useRef();
  useHelper(shadowCameraRef, THREE.CameraHelper);

  return (
    <>
      <OrbitControls />
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
      </directionalLight>
      <directionalLight position={[10, 10, 5]} intensity={0.2} />

      <ambientLight intensity={0.5} />
      <Player />

      {/* <RigidBody type="fixed" name="ground">
        <mesh position-y={-0.251} receiveShadow>
          <boxGeometry args={[20, 0.5, 20]} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </RigidBody> */}
      <RigidBody
        type="fixed"
        colliders={false}
        sensor
        name="space"
        position-y={-5}
      >
        <CuboidCollider args={[50, 0.5, 50]} />
      </RigidBody>
      <Playground />
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
      <RigidBody
        colliders={false}
        position-x={3}
        position-y={3}
        gravityScale={0.2}
        restitution={1.2}
      >
        <Gltf src="/models/ball.glb" castShadow />
        <BallCollider args={[1]} />
      </RigidBody>
    </>
  );
};
