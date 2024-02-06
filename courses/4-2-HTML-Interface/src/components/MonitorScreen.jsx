import { useAtom } from "jotai";
import { projectAtom } from "./Interface";
import { useTexture } from "@react-three/drei";
import { config } from "../config";

export const MonitorScreen = ({ ...props }) => {
  const [project] = useAtom(projectAtom);
  const projectTexture = useTexture(project.image);

  return (
    <group {...props}>
      <mesh>
        <planeGeometry args={[1.14, 0.66]} />
        <meshBasicMaterial map={projectTexture} />
      </mesh>
    </group>
  );
};

config.projects.forEach((project) => {
  useTexture.preload(project.image);
});
