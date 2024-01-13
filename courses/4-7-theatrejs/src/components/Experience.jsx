import { Environment } from "@react-three/drei";
import { MedievalFantasyBook } from "./MedievalFantasyBook";
import { editable as e } from "@theatre/r3f";

export const Experience = () => {
  return (
    <>
      <e.directionalLight
        theatreKey="SunLight"
        position={[3, 3, 3]}
        intensity={0.2}
        castShadow
        shadow-bias={-0.001}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <e.group theatreKey="MedievalFantasyBook">
        <MedievalFantasyBook scale={0.1} envMapIntensity={0.3} />
      </e.group>
      <Environment preset="dawn" background blur={4} />
    </>
  );
};
