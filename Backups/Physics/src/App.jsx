import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Physics } from "@react-three/rapier";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 6, 6], fov: 60 }} shadows>
        <color attach="background" args={["#171720"]} />
        <Physics>
          <Experience />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
