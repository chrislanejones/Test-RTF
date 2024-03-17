import {
  Environment,
  OrbitControls,
  Scroll,
  Text3D,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { Panda } from "./Panda";
import { foodItems } from "../App";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export const Experience = () => {
  const scrollData = useScroll();
  useFrame((state) => {
    state.camera.position.x = -2 + scrollData.offset * 4;
  return (
    <>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        enableZoom={false}
      />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <Text3D
          font="fonts/Inter_Bold.json"
          size={0.8}
          position={[-3.5, 2, -3]}
          bevelEnabled
          bevelThickness={0.2}
        >
          PANDA
          <meshStandardMaterial color="#333344" />
        </Text3D>
        <Text3D
          font="fonts/Inter_Bold.json"
          size={1.8}
          position={[-3.5, 0, -3]}
          bevelEnabled
          bevelThickness={0.2}
        >
          SUSHI
          <meshStandardMaterial color="white" />
        </Text3D>
        <Panda position={[2.5, 0, -5]} rotation-y={-Math.PI / 6} />
      </group>
      <Scroll>
        {foodItems.map((foodItem, idx) => (
          <FoodItem key={idx} {...foodItem} />
        ))}
      </Scroll>
    </>
  );
};

const FoodItem = ({ model, page }) => {
  const gltf = useGLTF(model);
  const viewport = useThree((state) => state.viewport);
  const scrollData = useScroll();
  const ref = useRef();

  useFrame(() => {
    const pageScroll = scrollData.offset;
    ref.current.rotation.y = pageScroll * Math.PI * 2;
    const pages = scrollData.pages - 1;
    const offsetX = 2;
  
    ref.current.position.x =
  scrollData.curve((page - 1) / pages, 2 / pages) * offsetX;
  });
  
  return (
    <group ref={ref}>
      <primitive
        object={gltf.scene}
        position={[0, -viewport.height * page, 0]}
      />
    </group>
  );
};
