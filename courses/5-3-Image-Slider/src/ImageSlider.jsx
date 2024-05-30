export const ImageSlider = ({ width = 3, height = 4, fillPercent = 0.75 }) => {
  return (
    <mesh>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};
