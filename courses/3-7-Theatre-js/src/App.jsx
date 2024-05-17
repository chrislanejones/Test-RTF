import { SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState, useRef } from "react";
import { UI } from "./UI";
import { Experience } from "./components/Experience";

import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";

import { editable as e } from "@theatre/r3f";

studio.initialize();
studio.extend(extension);

const project = getProject("MedievalTown");
const mainSheet = project.sheet("Main");

const transitions = {
  Home: [0, 5],
  Castle: [6, 12 + 16 / 30],
  Windmill: [14, 18 + 5 / 30],
};

import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";

import { PerspectiveCamera } from "@theatre/r3f";

function App() {
  const [currentScreen, setCurrentScreen] = useState("Intro");
  const [targetScreen, setTargetScreen] = useState("Home");

  const cameraTargetRef = useRef();
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
        gl={{
          preserveDrawingBuffer: true,
        }}
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
