import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 8], fov: 42 }}>
        <ScrollControls pages={3}>
          <Experience />

          <Environment preset="sunset" />
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
