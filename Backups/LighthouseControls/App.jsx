import { Environment, PivotControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Lighthouse } from "./components/Lighthouse";
import { MoveableItem } from "./components/MoveableItem";
function App() {
  return (
    <>
      <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
        <MoveableItem>
          <Lighthouse position-y={-1} scale={[0.2, 0.2, 0.2]} />
        </MoveableItem>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
