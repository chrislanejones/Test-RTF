import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
function App() {
  return (
    <>
      <Canvas camera={{ position: [3, 3, 3], fov: 42 }}>
        <Experience />
        <OrbitControls />
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
