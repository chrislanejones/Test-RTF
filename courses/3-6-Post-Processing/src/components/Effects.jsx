import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { useControls } from "leva";

export const Effects = () => {
  const vignetteConfig = useControls("vignette", {
    enabled: true,
    offset: { value: 0.1, min: 0, max: 1 },
    darkness: { value: 0.92, min: 0, max: 1 },
  });
  return (
    <EffectComposer disableNormalPass>
      {vignetteConfig.enabled && <Vignette {...vignetteConfig} />}
    </EffectComposer>
  );
};
