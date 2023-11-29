import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas camera={{ position: [0, 3, 3] }}>
      <OrbitControls />
      <mesh>
        <cylinderGeometry args={[2, 3, 3, 32]} />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export default App;
