import { EffectComposer } from "@react-three/postprocessing";

export const Effects = () => {
  return (
    <EffectComposer disableNormalPass>
      <Vignette />
    </EffectComposer>
  );
};
