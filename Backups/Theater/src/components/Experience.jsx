import { Environment } from "@react-three/drei";
import { MedievalFantasyBook } from "./MedievalFantasyBook";
export const Experience = () => {
  return (
    <>
      <directionalLight
        position={[3, 3, 3]}
        intensity={0.2}
        castShadow
        shadow-bias={-0.001}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <group>
        <MedievalFantasyBook scale={0.1} envMapIntensity={0.3} />
      </group>
      <Environment preset="dawn" background blur={4} />
    </>
  );
};
