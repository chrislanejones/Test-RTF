export const Frame = ({
  width = 1,
  height = 1,
  borderSize = 0.1,
  color = "#ececec",
  children,
  ...props
}) => {
  return (
    <group {...props}>
      <mesh position-x={-width / 2 - borderSize / 2}>
        <boxGeometry args={[borderSize, height, 0.1]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.1} />
      </mesh>
      <mesh position-x={width / 2 + borderSize / 2}>
        <boxGeometry args={[borderSize, height, 0.1]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.1} />
      </mesh>
      <mesh position-y={height / 2 + borderSize / 2}>
        <boxGeometry args={[width + borderSize * 2, borderSize, 0.1]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.1} />
      </mesh>
      <mesh position-y={-height / 2 - borderSize / 2}>
        <boxGeometry args={[width + borderSize * 2, borderSize, 0.1]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.1} />
      </mesh>
      <mesh position-z={0}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <group position-z={0.01}>{children}</group>
    </group>
  );
};
