import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { useControls } from "leva";

export const Effects = () => {
  const vignetteConfig = useControls("vignette", {
    enabled: true,
    offset: {
      value: 0.1,
      min: 0,
      max: 0,
    },
    darkness: {
      value: 0.92,
      min: 0,
      max: 1,
    },
  });
  const bloomConfig = useControls("bloom", {
    enabled: true,
    luminanceThreshold: {
      value: 1,
      min: 0,
      max: 2,
    },
    intensity: {
      value: 1.28,
      min: 0,
      max: 2,
    },
    mipmapBlur: true,
  });
  return (
    <EffectComposer disableNormalPass>
      {vignetteConfig.enabled && <Vignette {...vignetteConfig} />}
      {bloomConfig.enabled && <Bloom {...bloomConfig} />}
    </EffectComposer>
  );
};
