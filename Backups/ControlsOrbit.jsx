import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Lighthouse } from "./components/Lighthouse";
function App() {
  return (
    <>
      <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
        <OrbitControls
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={Math.PI / 2}
          maxAzimuthAngle={-Math.PI / 2}
          minDistance={3}
          maxDistance={10}
        />
        <Lighthouse position-y={-1} scale={[0.2, 0.2, 0.2]} />
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
