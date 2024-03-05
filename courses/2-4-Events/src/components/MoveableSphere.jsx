import { useState } from "react";

export const MoveableSphere = (props) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  let color = hovered ? "pink" : "white";
  if (selected) {
    color = "hotpink";
  }
  return (
    <mesh
      {...props}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onClick={(e) => {
        e.stopPropagation();
        setSelected(!selected);
      }}
    >
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
