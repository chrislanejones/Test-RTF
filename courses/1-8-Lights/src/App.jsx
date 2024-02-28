import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 3, 3] }}
        style={{ background: "DodgerBlue" }}
      >
        <OrbitControls />

        <ambientLight intensity={0.2} />
        <directionalLight intensity={0.5} position={[3, 3, 3]} color="red" />
        <directionalLight intensity={0.5} position={[0, 3, -3]} color="green" />
        <directionalLight intensity={0.5} position={[-3, 3, 3]} color="blue" />

        <mesh rotation-y={Math.PI / 4}>
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
