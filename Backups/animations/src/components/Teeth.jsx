export const Teeth = () => {
  return (
    <group>
      <mesh position-x={-1} position-y={-1}>
        <coneGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position-x={0} position-y={1} rotation-x={Math.PI}>
        <coneGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position-x={1} position-y={-1}>
        <coneGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
};
