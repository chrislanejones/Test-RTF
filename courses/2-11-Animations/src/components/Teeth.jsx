import { motion } from "framer-motion-3d";
import { useEffect, useState } from "react";

export const Teeth = () => {
  const [variant, setVariant] = useState("closed");

  useEffect(() => {
    const interval = setInterval(() => {
      setVariant((prev) => (prev === "closed" ? "open" : "closed"));
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.group animate={variant}>
      <motion.mesh
        position-x={-1}
        position-y={-1}
        animate={{
          y: 0,
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <coneGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="#ffffff" />
      </motion.mesh>
      <mesh position-x={0} position-y={1} rotation-x={Math.PI}>
        <coneGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position-x={1} position-y={-1}>
        <coneGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </motion.group>
  );
};
