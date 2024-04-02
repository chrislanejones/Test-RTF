import { ContactShadows, Environment, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { degToRad } from "three/src/math/MathUtils.js";
import { Item } from "./Item";

const GrowingFlower = ({
  children,
  growSpeed = 0.2,
  minSize = 0.3,
  maxSize = 1,
  ...props
}) => {
  const ref = useRef();
  const targetSize = new Vector3(maxSize, maxSize, maxSize);
  useFrame((_, delta) => {
    ref.current.scale.lerp(targetSize, delta * growSpeed);
  });
  return (
    <group ref={ref} {...props} scale={minSize}>
      {children}
    </group>
  );
};

export const Hero3D = () => {
  return (
    <>
      <Float
        rotationIntensity={0.3}
        floatIntensity={0.4}
        rotation-x={degToRad(-15)}
        rotation-y={degToRad(15)}
        scale={0.4}
        position-y={0.12}
      >
        <GrowingFlower growSpeed={0.22}>
          <Item model="Flower_1" scale={0.6} />
        </GrowingFlower>
        <GrowingFlower growSpeed={0.24} position-x={0.1} position-z={0.1}>
          <Item model="Flower_2" scale={0.5} />
        </GrowingFlower>
        <GrowingFlower position-x={-0.1} position-z={-0.15}>
          <Item model="Flower_3" scale={0.6} />
        </GrowingFlower>
        <GrowingFlower growSpeed={0.28} position-x={-0.3} position-z={0.05}>
          <Item model="Flower_4" scale={0.6} />
        </GrowingFlower>
        <GrowingFlower growSpeed={0.26} position-x={0.3} scale={0.6}>
          <Item model="Flower_5" />
        </GrowingFlower>
        <Item
          model="Phone"
          rotation-x={-degToRad(90)}
          rotation-z={-degToRad(90)}
        />
      </Float>
      <color attach="background" args={["#ffffff"]} />
      <fog attach="fog" args={["#ffffff", 5, 25]} />
      <Environment preset="sunset" />
      <ContactShadows position-y={-0.1} />
    </>
  );
};
