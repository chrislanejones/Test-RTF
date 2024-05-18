import { SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider, editable as e } from "@theatre/r3f";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { useEffect, useRef, useState } from "react";
import { UI } from "./UI";
import projectState from "./assets/MedievalTownThreejs.theatre-project-state-main.json";
import { Experience } from "./components/Experience";

// https://www.theatrejs.com/docs/latest/getting-started/with-react-three-fiber - The Lesson version did not work needed to use the version from Theatre JS's website

if (import.meta.env.DEV) {
  studio.initialize();
  studio.extend(extension);
}
const mainSheet = getProject("MedievalTownThreejs", {
  state: projectState,
}).sheet("Main");

const transitions = {
  Home: [0, 2 + 29 / 30],
  Castle: [6, 12],
  Windmill: [14, 18],
};

function App() {
  const cameraTargetRef = useRef();
  const [currentScreen, setCurrentScreen] = useState("Intro");
  const [targetScreen, setTargetScreen] = useState("Home");

  const isSetup = useRef(false);

  useEffect(() => {
    mainSheet.project.ready.then(() => {
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
