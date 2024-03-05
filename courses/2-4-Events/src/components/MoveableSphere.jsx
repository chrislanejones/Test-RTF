import { useCursor } from "@react-three/drei";
import { useState } from "react";

export const MoveableSphere = (props) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  useCursor(hovered);
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
      onPointerMissed={() => setSelected(false)}
    >
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
