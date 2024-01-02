import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Leva } from "leva";
import { UI } from "./components/UI";
import { useState } from "react";

function App() {
  const [section, setSection] = useState(0);

  return (
    <>
      <Leva hidden />
      <Canvas camera={{ position: [0, 0, 3], fov: 30 }}>
        <color attach="background" args={["#171720"]} />
        <Experience />
      </Canvas>
      <UI section={section} onSectionChange={setSection} />
    </>
  );
}

export default App;
