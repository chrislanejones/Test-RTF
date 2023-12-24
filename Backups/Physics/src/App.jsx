import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Physics } from "@react-three/rapier";

import { KeyboardControls } from "@react-three/drei";
import { useMemo } from "react";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

function App() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );
  return (
    <KeyboardControls map={map}>
      <Canvas camera={{ position: [0, 6, 6], fov: 60 }} shadows>
        <color attach="background" args={["#171720"]} />
        <Physics debug gravity={[0, -50, 0]}>
          <Experience />
        </Physics>
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
