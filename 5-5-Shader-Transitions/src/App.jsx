import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { ScreenTransition } from "./components/ScreenTransition";

function App() {
  const { backgroundColor } = useControls({
    backgroundColor: "#241b52",
  });
  return (
    <>
      <Leva hidden />
      <UI />
      <Canvas camera={{ position: [0, 1.8, 5], fov: 42 }}>
        <color attach="background" args={[backgroundColor]} />
        <fog attach="fog" args={[backgroundColor, 5, 12]} />
        <ScreenTransition transition color="#a5b4fc" />
        <Suspense>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
