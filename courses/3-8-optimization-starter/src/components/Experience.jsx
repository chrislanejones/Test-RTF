import {
  ContactShadows,
  Instance,
  Instances,
  OrbitControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

import * as THREE from "three";
import { NinjaMale } from "./NinjaMale";

const Box = ({ scale, position, color, speed }) => {
  const ref = useRef();

  useFrame(() => {
    ref.current.position.z -= speed;
    if (ref.current.position.z < -50) ref.current.position.z = 10;
  });

  return <Instance ref={ref} position={position} scale={scale} color={color} />;
};

export const Experience = ({ nbBoxes }) => {
  const boxes = useMemo(
    () =>
      Array.from({ length: nbBoxes }, () => ({
        position: [
          THREE.MathUtils.randFloat(2, 20) *
            (THREE.MathUtils.randInt(0, 1) ? -1 : 1),
          THREE.MathUtils.randFloat(0.2, 10),
          THREE.MathUtils.randFloat(10, 50),
        ],
        scale: THREE.MathUtils.randFloat(0.2, 1.2),
        color: new THREE.Color().setHSL(Math.random(), 1, 0.5),
        speed: THREE.MathUtils.randFloat(0.08, 0.42),
      })),
    [nbBoxes]
  );
  return (
    <>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        maxDistance={12}
        minDistance={8}
      />
      <NinjaMale scale={1.4} />
      <ContactShadows opacity={0.5} />
      <Instances>
        <boxGeometry />
        <meshStandardMaterial side={THREE.DoubleSide} />
        {boxes.map(({ scale, position, color, speed }, i) => (
          <Box
            key={i}
            scale={scale}
            position={position}
            color={color}
            speed={speed}
          />
        ))}
      </Instances>
    </>
  );
};
