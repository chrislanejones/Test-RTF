import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

function App() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <OrbitControls />
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
    </Canvas>
  );
}

export default App;
