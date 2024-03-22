import { Grid, OrbitControls } from "@react-three/drei";
import { Player } from "./Player";
import { RigidBody } from "@react-three/rapier";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  jump: "jump",
};

function App() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );
  return <KeyboardControls map={map}>{/* ... */}</KeyboardControls>;
}

export const Experience = () => {
  return (
    <>
      <directionalLight position={[-10, 10, 5]} intensity={0.4} castShadow />
      <directionalLight position={[10, 10, 5]} intensity={0.2} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Player />
      <RigidBody type="fixed">
        <mesh position-y={-0.251} receiveShadow>
          <boxGeometry args={[20, 0.5, 20]} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
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
