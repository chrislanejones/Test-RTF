import { ContactShadows, Text, useGLTF } from "@react-three/drei";
import { Character } from "./Character";
import * as THREE from "three";

export const Experience = () => {
  const woodenSign = useGLTF("models/Wooden Sign.glb");

  return (
    <>
      <group position-x={-1.5} rotation-y={THREE.MathUtils.degToRad(15)}>
        <primitive object={woodenSign.scene} />
        <Text
          fontSize={0.3}
          position={[0, 1.2, 0.01]}
          maxWidth={1}
          textAlign="center"
          font="fonts/MedievalSharp-Regular.ttf"
        >
          Hyrule Castle
          <meshStandardMaterial color={"#803d1c"} />
        </Text>
      </group>
      <group position={[1.5, 0, 0]} rotation-y={-Math.PI / 4}>
        <group position-y={3}>
          <Text fontSize={0.2} anchorY={"bottom"}>
            Link
            <meshStandardMaterial color={"black"} />
          </Text>
          <Text fontSize={0.2} anchorY={"top"}>
            Zelda personal hero
            <meshStandardMaterial color={"grey"} />
          </Text>
        </group>
        <Character />
      </group>
      <ContactShadows opacity={0.42} scale={42} far={42} />
    </>
  );
};
