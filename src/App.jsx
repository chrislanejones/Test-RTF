import { OrbitControls, Grid } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

function App() {
  return (
    <Canvas camera={{ position: [0, 3, 8] }}>
      <Grid
        sectionSize={3}
        sectionColor={"purple"}
        sectionThickness={1}
        cellSize={1}
        cellColor={"#6f6f6f"}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
      />
      <OrbitControls />
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 3, 5]} intensity={0.5} />

      {/* Objects */}
      <group position={[-2, -2, 0]} scale={[2, 2, 2]} rotation-y={Math.PI / 4}>
        <mesh position-x={-0.6}>
          <boxGeometry />
          <meshStandardMaterial color="hotpink" side={THREE.FrontSide} />
        </mesh>
        <mesh position-x={0.6} position-z={-1}>
          <boxGeometry />
          <meshStandardMaterial color="skyblue" side={THREE.BackSide} />
        </mesh>
        <mesh position-x={0.6} position-z={-1}>
          <torusGeometry args={[6, 2, 5, 40]} />
          <meshPhongMaterial attach="material" color={"green"} />
        </mesh>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 3]} intensity={5} />
        <directionalLight position={[0, 3, 3]} intensity={1} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
      </group>
    </Canvas>
  );
}

export default App;
