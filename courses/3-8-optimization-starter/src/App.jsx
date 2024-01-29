import { Environment, PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Effects } from "./components/Effects";
import { Experience } from "./components/Experience";
import { useState } from "react";

function App() {
  const [effect, setEffect] = useState(true);
  const [nbBoxes, setNbBoxes] = useState(100);
  return (
    <>
      <Canvas camera={{ position: [0, 2, 10], fov: 42 }}>
        <color attach="background" args={["#ffffff"]} />
        <fog attach="fog" args={["#ffffff", 10, 50]} />
        <group position-y={-2}>
          <PerformanceMonitor
            onChange={(api) => {
              console.log("Perfomance Monitor (FPS)", api.fps);
              console.log("Perfoamnce Monitor (Factor)", api.factor);
            }}
            onIncline={() => {
              console.log("Perfoamnce Monitor (Inclined)");
            }}
            onDecline={() => {
              setEffect(false);
              setNbBoxes(nbBoxes / 2);
              console.log("Perfoamnce Monitor (Declined)");
            }}
            flipflops={3}
          />

          <Experience nbBoxes={nbBoxes} />
        </group>
        <Environment preset="sunset" />
        {effect && <Effects />}
      </Canvas>
    </>
  );
}

export default App;