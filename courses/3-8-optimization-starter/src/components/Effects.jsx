import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

const focusTarget = new THREE.Vector3(0, 1.2, 1);

export const Effects = () => {
  return (
    <>
      <EffectComposer>
        <DepthOfField
          target={focusTarget}
          focusRange={0.001}
          focalLength={0.2}
          bokehScale={5}
        />
      </EffectComposer>
    </>
  );
};
