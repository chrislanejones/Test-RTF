import { SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState, useRef } from "react";
import { UI } from "./UI";
import { Experience } from "./components/Experience";

import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";

const project = getProject("MedievalTown");
const mainSheet = project.sheet("Main");

import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";

import { editable as e } from "@theatre/r3f";

import { PerspectiveCamera } from "@theatre/r3f";

studio.initialize();
studio.extend(extension);

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
