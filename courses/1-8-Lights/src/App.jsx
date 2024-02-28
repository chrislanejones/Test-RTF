import { OrbitControls, useHelper, Lightformer } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
useControls;
import * as THREE from "three";

const Lights = () => {
  return (
    <>
      <hemisphereLight
        color={"deepskyblue"}
        groundColor={"sandybrown"}
        intensity={1}
      />
      <Lightformer
        position={[0, 2, 3]}
        form="ring" // circle | ring | rect (optional, default = rect)
        intensity={1} // power level (optional = 1)
        color="white" // (optional = white)
        scale={[5, 5]} // Scale it any way you prefer (optional = [1, 1])
        target={[0, 0, 0]} // Target position (optional = undefined)
      />
    </>
  );
};

function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 3, 3] }}
        style={{ background: "DodgerBlue" }}
      >
        <OrbitControls />
        <Lights />
        <mesh rotation-y={Math.PI / 4}>
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
