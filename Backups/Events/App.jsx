import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 3, 8], fov: 42 }}>
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
