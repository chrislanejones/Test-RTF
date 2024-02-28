import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  OrthographicCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { City } from "./components/City";

function App() {
  return (
    <Canvas>
      {/* <OrthographicCamera
        makeDefault
        position={[1, 1, 1]}
        left={-2}
        right={2}
        top={2}
        bottom={-2}
      /> */}

      <OrthographicCamera
        makeDefault
        position={[1, 1, 1]}
        left={-2 * (window.innerWidth / window.innerHeight)}
        right={2 * (window.innerWidth / window.innerHeight)}
        top={2}
        bottom={-2}
        near={-5}
      />

      <OrbitControls />
      {/* IGNORE FOR NOW */}
      <City />
      <Environment preset="city" />
    </Canvas>
  );
}

export default App;
