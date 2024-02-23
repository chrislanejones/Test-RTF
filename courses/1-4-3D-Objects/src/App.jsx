import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas camera={{ position: [0, 3, 3] }} style={{ background: "#5aa38b" }}>
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export default App;
