import {
  OrbitControls,
  Sky,
  Lightformer,
  useHelper,
  SpotLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
useControls;
import * as THREE from "three";

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
    <>
      <SpotLight
        ref={ref}
        color={color}
        distance={distance}
        angle={angle}
        attenuation={attenuation}
        anglePower={anglePower}
      />
    </>
  );
};

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 3, 3] }}>
        <Sky distance={45000} sunPosition={[0, 1, 0]} inclination={0} />
        <OrbitControls />
        <Lights />
        <mesh rotation-y={Math.PI / 4}>
          <boxGeometry />
          <meshStandardMaterial color="white" roughness={1} metalness={0} />
        </mesh>

        <mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="white" roughness={0.2} metalness={0.8} />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
