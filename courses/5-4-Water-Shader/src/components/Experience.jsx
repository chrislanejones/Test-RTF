import {
  CameraControls,
  Environment,
  Float,
  Gltf,
  Text,
} from "@react-three/drei";
import * as THREE from "three";
import { MeshDepthMaterial } from "three";
import { degToRad } from "three/src/math/MathUtils.js";
import { Water } from "./Water";
const depthMaterial = new MeshDepthMaterial();
depthMaterial.depthPacking = THREE.RGBADepthPacking;
depthMaterial.blending = THREE.NoBlending;

export const Experience = ({ ...props }) => {
  return (
    <group {...props}>
      <CameraControls
        minDistance={5}
        maxDistance={32}
        minPolarAngle={degToRad(-10)}
        maxPolarAngle={degToRad(80)}
      />
      {/* LIGHTS */}
      <Environment preset="sunset" />
      <pointLight
        position={[12, 5, 12]}
        intensity={1.2}
        decay={0.8}
        distance={100}
        color="white"
      />
      <directionalLight
        position={[-15, 5, -15]}
        intensity={1.2}
        color="skyblue"
      />
      {/* SCENE */}
      <Gltf src="models/pool.glb" />
      <Text
        font={"fonts/Inter-Black.woff"}
        rotation-x={degToRad(-90)}
        rotation-z={degToRad(90)}
        position-y={0.1}
        position-x={-16.5}
        fontSize={4.3}
      >
        REACT THREE FIBER
        <meshStandardMaterial color="white" roughness={0.7} />
      </Text>
      <Text
        font={"fonts/Inter-Black.woff"}
        rotation-x={degToRad(-90)}
        position-y={0.1}
        position-z={-24}
        fontSize={3.2}
      >
        ULTIMATE GUIDE
        <meshStandardMaterial color="white" roughness={0.7} />
      </Text>
      <Float floatIntensity={2} rotationIntensity={2} position-y={-1}>
        <Gltf src="models/duck.glb" scale={2.5} />
      </Float>
      <Water rotation-x={-Math.PI / 2} position-y={-0.1} />
    </group>
  );
};
