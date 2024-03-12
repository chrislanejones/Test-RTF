import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 12], fov: 42 }}>
        <group position-y={-2}>
          <Experience />
          <ContactShadows opacity={0.32} blur={2} />
        </group>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minDistance={8}
          maxDistance={20}
        />
        <Environment preset="warehouse" />
      </Canvas>
    </>
  );
}

export default App;
