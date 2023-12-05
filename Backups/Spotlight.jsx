import { OrbitControls, SpotLight, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { HemisphereLight } from "three";

const Lights = () => {
  const ref = useRef();
  const helper = useHelper(ref, THREE.SpotLightHelper, "red");

  const { color, distance, attenuation, angle, anglePower } = useControls({
    color: "#876ae5",
    distance: 6,
    attenuation: 2.2,
    angle: 1,
    anglePower: 1,
  });

  return (
    <SpotLight
      ref={ref}
      color={color}
      distance={distance}
      angle={angle}
      attenuation={attenuation}
      anglePower={anglePower}
    />
  );
};

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 3, 3] }}>
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
      <Canvas camera={{ position: [0, 3, 3] }}>
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
