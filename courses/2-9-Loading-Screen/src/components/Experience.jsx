import {
  ContactShadows,
  Environment,
  OrbitControls,
  Text3D,
} from "@react-three/drei";
import { Adventurer } from "./Adventurer";
import { CasualHoodie } from "./CasualHoodie";
import { King } from "./King";
import { Spacesuit } from "./Spacesuit";
export const Experience = () => {
  return (
    <>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        minDistance={8}
        maxDistance={20}
      />
      <Environment preset="sunset" />

      <Text3D
        font="fonts/Inter_Bold.json"
        size={0.8}
        position={[-3.5, 2, -3]}
        bevelEnabled
        bevelThickness={0.2}
      >
        OUR
        <meshStandardMaterial color="white" />
      </Text3D>
      <Text3D
        font="fonts/Inter_Bold.json"
        size={1.8}
        position={[-3.5, 0, -3]}
        bevelEnabled
        bevelThickness={0.2}
      >
        TEAM
        <meshStandardMaterial color="white" />
      </Text3D>
      <King position-x={-3} rotation-y={-Math.PI / 4} />
      <Adventurer position-x={-1} />
      <Spacesuit position-x={1} />
      <CasualHoodie position-x={3} rotation-y={Math.PI / 4} />
      <ContactShadows opacity={0.42} blur={2} />
    </>
  );
};
