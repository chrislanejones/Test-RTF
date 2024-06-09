import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas
      camera={{
        position: [8, 4.5, 24],
        fov: 60,
      }}
    >
      <fog attach="fog" args={["#53ac58", 50, 100]} />
      <color attach="background" args={["#53ac58"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
