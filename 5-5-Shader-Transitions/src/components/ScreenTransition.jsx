export const ScreenTransition = ({ transition, color }) => {
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};
