import { Text3D } from "@react-three/drei";

export const SectionTitle = ({ children, ...props }) => {
  return (
    <Text3D font={"fonts/Inter_Bold.json"} size={0.3} {...props}>
      {children}
      <meshStandardMaterial color="white" />
    </Text3D>
  );
};
