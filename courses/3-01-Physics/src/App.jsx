import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 6, 6], fov: 60 }} shadows>
        <color attach="background" args={["#171720"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
