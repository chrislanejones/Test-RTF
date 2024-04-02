import {
  Environment,
  MeshReflectorMaterial,
  useCursor,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { MathUtils } from "three";
import { degToRad } from "three/src/math/MathUtils.js";

const Project = ({ image, ...props }) => {
  const map = useTexture(image);
  const imageRef = useRef();
  const [projectHovered, setProjectHovered] = useState(false);
  useCursor(projectHovered);
  useFrame(() => {
    imageRef.current.scale.x = MathUtils.lerp(
      imageRef.current.scale.x,
      projectHovered ? 1.1 : 1,
      0.05
    );
    imageRef.current.scale.y = MathUtils.lerp(
      imageRef.current.scale.y,
      projectHovered ? 0.5625 + 0.1 : 0.5625,
      0.05
    );
  });
  return (
    <group
      {...props}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setProjectHovered(true);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        setProjectHovered(false);
      }}
    >
      <mesh scale-x={1 + 0.2} scale-y={0.5625 + 0.2}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color={"black"} />
      </mesh>
      <mesh scale-x={1 + 0.1} scale-y={0.5625 + 0.1} position-z={0.001}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="white" toneMapped={false} />
      </mesh>
      <mesh position-z={0.002} ref={imageRef} scale-x={1} scale-y={0.5625}>
        <planeGeometry />
        <meshBasicMaterial map={map} toneMapped={false} />
      </mesh>
    </group>
  );
};

const projects = [
  "projects/0.jpg",
  "projects/1.jpg",
  "projects/2.jpg",
  "projects/3.jpg",
  "projects/4.jpg",
  "projects/5.jpg",
  "projects/6.jpg",
];

const SLIDING_SPEED = 2;

export const Portfolio3D = () => {
  const group = useRef();
  const [curProject, setCurProject] = useState(0);

  useFrame((_, delta) => {
    group.current.position.x = MathUtils.lerp(
      group.current.position.x,
      -curProject * 1.2,
      delta * SLIDING_SPEED
    );
    group.current.position.z = MathUtils.lerp(
      group.current.position.z,
      curProject * 1.2,
      delta * SLIDING_SPEED
    );
  });

  return (
    <>
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 0, 15]} />
      <group position-z={-3}>
        <group ref={group}>
          {projects.map((url, idx) => (
            <Project
              onClick={() => setCurProject(idx)}
              image={url}
              key={idx}
              position-x={idx * 1.2}
              position-z={-idx * 1.2}
            />
          ))}
        </group>
      </group>

      <mesh rotation-x={degToRad(-90)} position-y={-0.4}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={80}
          roughness={0.6}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>
      <Environment preset="sunset" />
    </>
  );
};
