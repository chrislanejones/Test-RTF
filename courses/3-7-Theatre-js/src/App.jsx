import { SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { UI } from "./UI";
import { Experience } from "./components/Experience";

import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";

const project = getProject("MedievalTown");
const mainSheet = project.sheet("Main");

import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";

studio.initialize();
studio.extend(extension);

function App() {
  const [currentScreen, setCurrentScreen] = useState("Intro");
  const [targetScreen, setTargetScreen] = useState("Home");

  return (
    <>
      <UI
        currentScreen={currentScreen}
        onScreenChange={setTargetScreen}
        isAnimating={currentScreen !== targetScreen}
      />
      <Canvas camera={{ position: [5, 5, 10], fov: 30, near: 1 }} shadows>
        <SoftShadows />
        <SheetProvider sheet={mainSheet}>
          <Experience />
        </SheetProvider>
      </Canvas>
    </>
  );
}

export default App;
