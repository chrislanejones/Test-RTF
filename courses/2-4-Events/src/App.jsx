import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
};
function App() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );
  return (
    <>
      <KeyboardControls map={map}>
        <Canvas camera={{ position: [0, 3, 8], fov: 42 }}>
          <Experience />
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
