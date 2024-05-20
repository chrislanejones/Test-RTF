import {
  AccumulativeShadows,
  Box,
  Environment,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { ShaderPlane } from "./ShaderPlane";

export const Experience = () => {
  return (
    <>
      {/* SCENE ITEMS */}
      <ShaderPlane position-z={0.13} />
      <Box castShadow args={[1.5, 1.5, 0.25]}>
        <meshStandardMaterial color={"white"} />
      </Box>
      {/* CAMERA CONTROLS */}
      <OrbitControls
        minAzimuthAngle={degToRad(-30)}
        maxAzimuthAngle={degToRad(30)}
        minPolarAngle={degToRad(60)}
        maxPolarAngle={degToRad(120)}
        minDistance={5}
        maxDistance={12}
      />
      {/* LIGHTING */}
      <Environment preset="sunset" />
      <AccumulativeShadows
        temporal
        frames={45}
        scale={50}
        position-z={-0.2}
        color="#9100ff"
        rotation-x={Math.PI / 2}
      >
        <RandomizedLight
          amount={4}
          radius={9}
          intensity={0.55}
          ambient={0.25}
          position={[10, 2, -10]}
        />
        <RandomizedLight
          amount={4}
          radius={5}
          intensity={0.25}
          ambient={0.55}
          position={[-3, 3, -10]}
        />
      </AccumulativeShadows>
    </>
  );
};
