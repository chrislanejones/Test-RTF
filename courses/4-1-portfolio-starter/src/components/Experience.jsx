import { Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useRef } from "react";

export const Experience = () => {
  const sceneContainer = useRef();
  return (
    <>
      <Environment preset="sunset" />
      <Avatar />
      <group ref={sceneContainer}>
        {/* HOME */}
        <group></group>
        {/* SKILLS */}
        <group></group>
        {/* PROJECTS */}
        <group></group>
        {/* CONTACT */}
        <group></group>
      </group>
    </>
  );
};
