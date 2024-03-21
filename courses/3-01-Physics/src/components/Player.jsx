export const Player = () => {
  return (
    <mesh position-y={0.5} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};
