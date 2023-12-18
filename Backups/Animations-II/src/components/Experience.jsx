import { Duck } from "./Duck";

import { Float, Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { AnimatedBox } from "./AnimatedBox";
import { AnimatedDodecahedron } from "./AnimatedDodecahedron";
import { Background } from "./Background";
import { Teeth } from "./Teeth";

export const Experience = () => {
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <group position-y={-0.75}>
        <Float floatIntensity={2} speed={3}>
          <Duck />
        </Float>
      </group>
      <Background />
      <Scroll>
        {/* FIRST SECTION */}
        <group position-z={-2}>
          <AnimatedBox
            boxPositions={[
              { x: -2, y: 0, z: 0 },
              { x: 0, y: 2, z: 0 },
              { x: 2, y: 0, z: 0 },
              { x: 0, y: -2, z: 0 },
            ]}
          />
          <AnimatedBox
            boxPositions={[
              { x: 2, y: 0, z: 0 },
              { x: 0, y: -2, z: 0 },
              { x: -2, y: 0, z: 0 },
              { x: 0, y: 2, z: 0 },
            ]}
          />
        </group>

        {/* SECOND SECTION */}
        <group position-y={-viewport.height} position-z={1}>
          <Teeth />
        </group>

        {/* THIRD SECTION */}
        <group position-y={-viewport.height * 2} position-z={-1}>
          <AnimatedDodecahedron />
        </group>
      </Scroll>
    </>
  );
};
