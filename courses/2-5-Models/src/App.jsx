import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
function App() {
  return (
    <>
      <Canvas
        style={{ background: "#6a6a6a" }}
        camera={{ position: [-1.5, 3, 10], fov: 42 }}
      >
        <Experience />
        <OrbitControls />
        {/* <ambientLight intensity={1} /> */}
        <pointLight position={[10, 10, 10]} />
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
