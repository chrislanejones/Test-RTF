import { ContactShadows, Environment, Float } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";
import { Item } from "./Item";

export const Services3D = ({ currentService }) => {
  return (
    <>
      <group visible={currentService === 0}>
        <Float position-z={-1.2} speed={1.8}>
          <Item
            model="Phone"
            scale={0.6}
            position-x={-0.22}
            position-y={0.02}
            rotation-y={degToRad(22)}
            rotation-x={degToRad(-15)}
          />
        </Float>
        <Float position-z={-3}>
          <Item
            position-x={0.22}
            position-y={0}
            model="MacBook Pro"
            rotation-y={degToRad(-22)}
            rotation-z={degToRad(-15)}
            scale={0.32}
          />
        </Float>
      </group>
      <group visible={currentService === 1}>
        <Float position-z={-1}>
          <Item
            scale={0.5}
            position-y={0.15}
            model="VR Headset"
            visible={currentService === 1}
            rotation-y={degToRad(-70)}
          />
        </Float>
        <Float
          position-x={0.35}
          position-y={-0.1}
          position-z={-0.5}
          rotationIntensity={2.4}
          speed={2.8}
          floatIntensity={0.5}
        >
          <Item
            scale={0.05}
            model="Oculus Controller"
            rotation-y={degToRad(45)}
          />
        </Float>
        <Float
          position-x={-0.25}
          position-y={-0.2}
          position-z={-0.1}
          rotationIntensity={2}
          speed={2.5}
          floatIntensity={0.6}
        >
          <Item
            scale={0.05}
            model="Oculus Controller"
            rotation-y={degToRad(45)}
          />
        </Float>
      </group>
      <group visible={currentService !== 2} position-y={-0.5}>
        <ContactShadows />
      </group>

      <group visible={currentService === 2}>
        <Float
          rotationIntensity={0}
          floatIntensity={0.5}
          position-x={0.1}
          position-y={-0.15}
          position-z={0}
        >
          <Item
            model="Classroom"
            scale={0.5}
            rotation-y={degToRad(-5)}
            visible={currentService === 2}
          />
        </Float>
      </group>
      <Environment preset="sunset" />
    </>
  );
};
