import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { Suspense, useEffect } from "react";
import { Experience } from "./components/Experience";
import { UI, transitionAtom } from "./components/UI";
import { ScreenTransition } from "./components/ScreenTransition";
import { useProgress } from "@react-three/drei";
import { useAtom } from "jotai";

function App() {
  const [transition, setTransition] = useAtom(transitionAtom);
  const { progress } = useProgress();
  const { backgroundColor } = useControls({
    backgroundColor: "#241b52",
  });

  useEffect(() => {
    if (progress === 100) {
      setTransition(false);
    }
  }, [progress]);
  return (
    <>
      <Leva hidden />
      <UI />
      <Canvas camera={{ position: [0, 1.8, 5], fov: 42 }}>
        <color attach="background" args={[backgroundColor]} />
        <fog attach="fog" args={[backgroundColor, 5, 12]} />
        <ScreenTransition transition={transition} color="#a5b4fc" />
        <Suspense>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
