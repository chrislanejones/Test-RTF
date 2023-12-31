import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 3], fov: 30 }}>
        <color attach="background" args={["#171720"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
