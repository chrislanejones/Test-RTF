import { ContactShadows, Float, Gltf } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useAtom } from "jotai";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import { TransitionModel } from "./TransitionModel";
import {
  CAKE_TRANSITION_DURATION,
  cakeAtom,
  cakes,
  isMobileAtom,
  screenAtom,
  TRANSITION_DELAY,
} from "./UI";
import { transitionAtom, TRANSITION_DURATION } from "./UI";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

export const Experience = () => {
  const [cake, setCake] = useAtom(cakeAtom);
  const [screen] = useAtom(screenAtom);
  const { groundColor } = useControls({
    groundColor: "#4e35b5",
  });
  const [isMobile] = useAtom(isMobileAtom);
  const [transition] = useAtom(transitionAtom);

  useEffect(() => {
    setCake(screen === "menu" ? 0 : -1);
  }, [screen]);

  const materialShadowsHide = useRef();
  const [fadeOutShadows, setFadeOutShadows] = useState(false);
  useEffect(() => {
    setFadeOutShadows(true);
    const timeout = setTimeout(() => {
      setFadeOutShadows(false);
    }, CAKE_TRANSITION_DURATION * 1.42 * 1000);
    return () => clearTimeout(timeout);
  }, [cake]);

  useFrame(() => {
    materialShadowsHide.current.opacity = MathUtils.lerp(
      materialShadowsHide.current.opacity,
      fadeOutShadows ? 1 : 0,
      0.02
    );
  });

  return (
    <>
      <group position-y={isMobile ? -0.66 : -1}>
        {/* HOME */}
        <group visible={screen === "home"}>
          <motion.group
            animate={!transition && screen === "home" ? "visible" : "hidden"}
            variants={{
              visible: {
                scale: isMobile ? 0.75 : 1,
                x: isMobile ? 0 : -1.5,
                rotateY: degToRad(-42),
                transition: {
                  delay: TRANSITION_DURATION - 0.3,
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
        <mesh rotation-x={degToRad(-90)} position-y={0.001}>
          <planeGeometry args={[40, 40]} />
          <meshBasicMaterial
            color={groundColor}
            toneMapped={false}
            ref={materialShadowsHide}
            opacity={0}
            transparent
          />
        </mesh>
        <mesh rotation-x={degToRad(-90)} position-y={-0.001}>
          <planeGeometry args={[40, 40]} />
          <meshBasicMaterial color={groundColor} toneMapped={false} />
        </mesh>
      </group>
    </>
  );
};
