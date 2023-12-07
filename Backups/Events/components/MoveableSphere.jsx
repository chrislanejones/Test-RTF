import { useState } from "react";

export const MoveableSphere = (props) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  return (
    <mesh
      {...props}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClicked={() => setSelected(!selected)}
    >
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={hovered ? "pink" : "white"} />
    </mesh>
  );
};
