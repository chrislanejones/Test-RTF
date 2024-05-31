import { useThree } from "@react-three/fiber";

export const ImageSlider = ({ width = 3, height = 4, fillPercent = 0.75 }) => {
  const viewport = useThree((state) => state.viewport);
  let ratio = viewport.height / (height / fillPercent);
  if (viewport.width < viewport.height) {
    ratio = viewport.width / (width / fillPercent);
  }
  return (
    <mesh>
      <planeGeometry args={[width * ratio, height * ratio]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};
