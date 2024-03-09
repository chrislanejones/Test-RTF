import { useVideoTexture } from "@react-three/drei";

export const Experience = () => {
  const videoTexture = useVideoTexture("textures/spongebob-squarepants.mp4");

  return (
    <>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial map={videoTexture} />
      </mesh>
    </>
  );
};
