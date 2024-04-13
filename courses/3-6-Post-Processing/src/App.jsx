import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
function App() {
  return (
    <>
      <Canvas camera={{ position: [-1, 0.225, 5.91], fov: 42 }}>
        <color attach="background" args={["#333333"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
