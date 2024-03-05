import { useState } from "react";

export const MoveableSphere = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <mesh
      {...props}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
};
