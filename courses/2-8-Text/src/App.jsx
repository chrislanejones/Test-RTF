import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
function App() {
  return (
    <>
      <Canvas
        style={{ background: "#7a7a7a" }}
        camera={{ position: [0, 2, 12], fov: 42 }}
      >
        <group position-y={-1.5}>
          <Experience />
        </group>
        <OrbitControls />
        <Environment preset="sunset" />
        {/* <Sky /> */}
      </Canvas>
    </>
  );
}

export default App;
