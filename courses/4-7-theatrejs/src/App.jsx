import { SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { UI } from "./UI";
import { Experience } from "./components/Experience";

import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";

import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { editable as e } from "@theatre/r3f";

const project = getProject("MedievalTownThreejs");
const mainSheet = project.sheet("Main");

studio.initialize();
studio.extend(extension);

const transitions = {
  Home: [0, 2 + 29 / 30],
  Castle: [6, 10],
  Windmill: [16, 19],
};

function App() {
  const cameraTargetRef = useRef();
  const [currentScreen, setCurrentScreen] = useState("Intro");
  const [targetScreen, setTargetScreen] = useState("Home");

  const isSetup = useRef(false);

  useEffect(() => {
    project.ready.then(() => {
      if (currentScreen === targetScreen) {
        return;
      }
      if (isSetup.current && currentScreen === "Intro") {
        // Strict mode in development will trigger the useEffect twice, so we need to check if it's already setup
        return;
      }
      isSetup.current = true;
      const reverse = targetScreen === "Home" && currentScreen !== "Intro";
      const transition = transitions[reverse ? currentScreen : targetScreen];
      if (!transition) {
        return;
      }

      mainSheet.sequence
        .play({
          range: transition,
          direction: reverse ? "reverse" : "normal",
          rate: reverse ? 2 : 1,
        })
        .then(() => {
          setCurrentScreen(targetScreen);
        });
    });
  }, [targetScreen]);

  return (
    <>
      <UI
        currentScreen={currentScreen}
        onScreenChange={setTargetScreen}
        isAnimating={currentScreen !== targetScreen}
      />
      <Canvas
        camera={{ position: [5, 5, 10], fov: 30, near: 1 }}
        shadows
        gl={{ preserveDrawingBuffer: true }}
      >
        <SoftShadows />
        <SheetProvider sheet={mainSheet}>
          <PerspectiveCamera
            position={[5, 5, 10]}
            fov={30}
            near={1}
            makeDefault
            theatreKey="Camera"
            lookAt={cameraTargetRef}
          />
          <e.mesh
            theatreKey="Camera Target"
            visible="editor"
            ref={cameraTargetRef}
          >
            <octahedronBufferGeometry args={[0.1, 0]} />
            <meshPhongMaterial color="yellow" />
          </e.mesh>
          <Experience />
        </SheetProvider>
      </Canvas>
    </>
  );
}

export default App;
