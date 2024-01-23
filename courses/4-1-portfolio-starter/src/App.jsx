import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
        <color attach="background" args={["#f5f3ee"]} />
        <fog attach="fog" args={["#f5f3ee", 10, 50]} />
        <group position-y={-1}>
          <Experience />
        </group>
      </Canvas>
    </>
  );
}

export default App;
