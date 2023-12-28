import {
  OrbitControls,
  MeshReflectorMaterial,
  Environment,
} from "@react-three/drei";
import { TeslaModel3 } from "./TeslaModel3";
import { Background } from "./Background";
import { Lights } from "./Lights";

export const Experience = () => {
  return (
    <>
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.72}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        maxDistance={15}
        minDistance={6}
      />
      <ambientLight intensity={0.8} />
      <Environment frames={Infinity} resolution={720} blur={0.5}>
        <Lights />
      </Environment>

      <TeslaModel3 scale={0.012} position-z={0.2} />
      <mesh position-y={-0.76} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          color="#171720"
          resolution={1080}
          roughness={0.6}
          mixStrength={3}
        />
      </mesh>
    </>
  );
};
