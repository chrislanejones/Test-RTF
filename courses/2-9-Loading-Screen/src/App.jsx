import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense } from "react";
import { useProgress } from "@react-three/drei";

const CubeLoader = () => {
  return (
    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};

const LoadingScreen = () => {
  const { progress } = useProgress();

  return (
    <div className="loading-screen">
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">3D Web Agency</h1>
        <p>Loading... ({parseInt(progress)}%)</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <LoadingScreen />
      <Canvas camera={{ position: [-4, 4, 12], fov: 30 }}>
        <Suspense fallback={<CubeLoader />}>
          <group position-y={-1}>
            <Experience />
          </group>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
