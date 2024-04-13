import { Environment, OrbitControls } from "@react-three/drei";
import { Background } from "./Background";
import { Medieval } from "./Medieval";
import { Tavern } from "./Tavern";
import { Witch } from "./Witch";

export const Experience = () => {
  return (
    <>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        maxDistance={15}
        minDistance={6}
      />
      <Environment>
        <Background />
      </Environment>
      <Medieval rotation-y={-Math.PI / 4} position={[1.4, -0.9, -2]} />
      <Witch rotation-y={Math.PI / 4} position={[-1.4, -0.9, 2.6]} />
      <Tavern rotation-y={-Math.PI / 4} />
    </>
  );
};
