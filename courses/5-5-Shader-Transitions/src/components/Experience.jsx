import { ContactShadows, Float, Gltf } from "@react-three/drei";

import { motion } from "framer-motion-3d";
import { useAtom } from "jotai";
import { useControls } from "leva";
import { useEffect } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import { TransitionModel } from "./TransitionModel";
import { cakeAtom, cakes, isMobileAtom, screenAtom } from "./UI";
export const Experience = () => {
  const [cake, setCake] = useAtom(cakeAtom);
  const [screen] = useAtom(screenAtom);
  const { groundColor } = useControls({
    groundColor: "#4e35b5",
  });
  const [isMobile] = useAtom(isMobileAtom);

  useEffect(() => {
    setCake(screen === "menu" ? 0 : -1);
  }, [screen]);

  return (
    <>
      <group position-y={isMobile ? -0.66 : -1}>
        {/* HOME */}
        <group visible={screen === "home"}>
          <motion.group
            animate={screen === "home" ? "visible" : "hidden"}
            variants={{
              visible: {
                scale: isMobile ? 0.75 : 1,
                x: isMobile ? 0 : -1.5,
                rotateY: degToRad(-42),
                transition: {
                  duration: 1.2,
                },
              },
              hidden: {
                x: 0,
                scale: isMobile ? 0.9 : 1.15,
                rotateY: degToRad(-90),
                transition: {
                  duration: 1,
                },
              },
            }}
            initial={{
              x: 0,
              rotateY: degToRad(-90),
              scale: isMobile ? 0.9 : 1.15,
            }}
          >
            <Gltf src="/models/juice_carton_shop.glb" scale={0.72} />
          </motion.group>
        </group>
        {/* MENU */}
        <group position-y={isMobile ? 0.42 : 0.75} visible={screen === "menu"}>
          <Float scale={isMobile ? 0.75 : 1}>
            {cakes.map((cakeItem, index) => (
              <TransitionModel
                key={index}
                model={cakeItem.model}
                scale={cakeItem.scale}
                visible={index === cake}
              />
            ))}
          </Float>
        </group>
        <ContactShadows opacity={0.42} scale={25} />

        <mesh rotation-x={degToRad(-90)} position-y={-0.001}>
          <planeGeometry args={[40, 40]} />
          <meshBasicMaterial color={groundColor} toneMapped={false} />
        </mesh>
      </group>
    </>
  );
};
