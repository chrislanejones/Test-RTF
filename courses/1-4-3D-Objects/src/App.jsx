import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

function App() {
  return (
    <Canvas camera={{ position: [0, 5, 3] }} style={{ background: "#20222B" }}>
      <OrbitControls />
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={0x00ff00} />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshNormalMaterial color={0x00ff00} />
      </mesh>
      <mesh position={[0, 0, -1]}>
        <planeGeometry args={[5, 5]} />
        <meshNormalMaterial color={0x00ff00} />
      </mesh>
      <mesh position={[-2, 0, 0]}>
        <cylinderGeometry args={[1, 1, 2, 32]} />
        <meshNormalMaterial color={0x00ff00} />
      </mesh>
      <mesh position={[0, 0, 2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[0, 3, 0]}>
        <torusKnotGeometry args={[1, 0.3, 200, 32]} />
        <meshToonMaterial color="green" />
      </mesh>
      <mesh position={[0, -3, 0]}>
        <boxGeometry />
        <meshStandardMaterial
          color="green"
          side={THREE.FrontSide} // Optional as it's the default
        />
      </mesh>
      <mesh position={[-2, -3, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="green" side={THREE.BackSide} />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 3]} intensity={1} />
      <directionalLight position={[0, 3, 3]} intensity={0.5} />
    </Canvas>
  );
}

export default App;
