import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { City } from "./components/City";

function App() {
  return (
    <Canvas>
      <OrthographicCamera makeDefault position={[1, 1, 1]} />
      <OrbitControls />
      {/* IGNORE FOR NOW */}
      <City />
      <Environment preset="city" />
    </Canvas>
  );
}

export default App;
