import { Environment, useScroll } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { SectionTitle } from "./SectionTitle";

const SECTIONS_DISTANCE = 10;

export const Experience = () => {
  const sceneContainer = useRef();
  const scrollData = useScroll();

  useFrame(() => {
    sceneContainer.current.position.z =
      -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
  });

  return (
    <>
      <Environment preset="sunset" />
      <Avatar />
      <group ref={sceneContainer}>
        {/* HOME */}
        <group>
          <SectionTitle position-x={0.5}>HOME</SectionTitle>
        </group>
        {/* SKILLS */}
        <group position-z={SECTIONS_DISTANCE}>
          <SectionTitle position-x={0.5}>SKILLS</SectionTitle>
        </group>
        {/* PROJECTS */}
        <group position-z={2 * SECTIONS_DISTANCE}>
          <SectionTitle position-x={0.5}>PROJECTS</SectionTitle>
        </group>
        {/* CONTACT */}
        <group position-z={3 * SECTIONS_DISTANCE}>
          <SectionTitle position-x={0.5}>CONTACT</SectionTitle>
        </group>
      </group>
    </>
  );
};
