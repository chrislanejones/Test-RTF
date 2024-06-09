import { useControls } from "leva";

export const Water = ({ ...props }) => {
  const { waterColor, waterOpacity } = useControls({
    waterOpacity: { value: 0.8, min: 0, max: 1 },
    waterColor: "#00c3ff",
  });

  return (
    <mesh {...props}>
      <planeGeometry args={[15, 32, 22, 22]} />
      <meshBasicMaterial
        color={waterColor}
        transparent
        opacity={waterOpacity}
      />
    </mesh>
  );
};
