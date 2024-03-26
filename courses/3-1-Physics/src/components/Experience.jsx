import { Gltf, Grid, OrbitControls } from "@react-three/drei";
import { Player } from "./Player";
import { BallCollider, RigidBody } from "@react-three/rapier";

export const Experience = () => {
  return (
    <>
      <directionalLight position={[-10, 10, 5]} intensity={0.4} castShadow />
      <directionalLight position={[10, 10, 5]} intensity={0.2} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Player />
      <RigidBody type="fixed" name={"ground"}>
        <mesh position-y={-0.251} receiveShadow>
          <boxGeometry args={[10, 0.5, 10]} />
          <meshStandardMaterial color="BlanchedAlmond" />
        </mesh>
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
