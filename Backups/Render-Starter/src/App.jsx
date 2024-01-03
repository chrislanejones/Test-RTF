import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Remote } from "./components/Remote";
import { RemoteProvider } from "./hooks/useRemote";

function App() {
  return (
    <RemoteProvider>
      <Canvas camera={{ position: [-3, 1.5, 3], fov: 30, near: 1 }}>
        <Experience />
      </Canvas>
      <Remote />
    </RemoteProvider>
  );
}

export default App;
