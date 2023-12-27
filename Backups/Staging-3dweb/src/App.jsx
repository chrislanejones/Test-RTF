import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas camera={{ position: [-3, 1.5, 12], fov: 30 }}>
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
