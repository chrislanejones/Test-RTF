import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Effects } from "./components/Effects";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 10], fov: 42 }}>
        <color attach="background" args={["#ffffff"]} />
        <fog attach="fog" args={["#ffffff", 10, 50]} />
        <group position-y={-2}>
          <Experience />
        </group>
        <Environment preset="sunset" />
        {/* <Effects /> */}
      </Canvas>
    </>
  );
}

export default App;
