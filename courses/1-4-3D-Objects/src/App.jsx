import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas camera={{ position: [0, 3, 3] }} style={{ background: "#5aa38b" }}>
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
    </Canvas>
  );
}

export default App;
