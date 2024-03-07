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
        <pointLight position={[-60, 10, 10]} intensity={0.2} />
        <pointLight position={[-15, 10, 10]} intensity={0.3} />
        <pointLight position={[50, 10, 10]} intensity={0.3} />
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
