import { Grid, OrbitControls } from "@react-three/drei";
import { Player } from "./Player";

export const Experience = () => {
  return (
    <>
      <directionalLight position={[-10, 10, 5]} intensity={0.4} castShadow />
      <directionalLight position={[10, 10, 5]} intensity={0.2} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Player />

      <mesh position-y={-0.251} receiveShadow>
        <boxGeometry args={[20, 0.5, 20]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
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
