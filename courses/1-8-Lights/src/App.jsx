import { OrbitControls, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
useControls;
import * as THREE from "three";

const Lights = () => {
  const ref = useRef();
  const helper = useHelper(ref, THREE.PointLightHelper, 0.5, "red");
  const { color, distance, intensity, decay } = useControls({
    color: "#ff0000",
    distance: 3,
    intensity: 0.5,
    decay: 2,
  });

  return (
    <>
      <pointLight
        ref={ref}
        position={[1, 1, 0]}
        color={color}
        intensity={intensity}
        decay={decay}
        distance={distance}
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
