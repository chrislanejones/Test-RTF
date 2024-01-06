import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import { useControls } from "leva";

export const Effects = () => {
  const vignetteConfig = useControls("vignette", {
    enabled: true,
    offset: {
      value: 0.1,
      min: 0,
      max: 1,
    },
    darkness: {
      value: 1.28,
      min: 0,
      max: 1,
    },
  });
  const bloomConfig = useControls("bloom", {
    enabled: true,
    luminanceThreshold: { value: 1, min: 0, max: 2 },
    intensity: { value: 1.28, min: 0, max: 2 },
    mipmapBlur: true,
  });
  const brightnessContrastConfig = useControls("brightnessContrast", {
    enabled: true,
    brightness: {
      value: 0.1,
      min: 0,
      max: 1,
    },
    contrast: {
      value: 1.28,
      min: 0,
      max: 1,
    },
  });
  return (
    <EffectComposer disableNormalPass>
      {vignetteConfig.enabled && <Vignette {...vignetteConfig} />}
      {bloomConfig.enabled && <Bloom {...bloomConfig} />}
      {brightnessContrastConfig.enabled && (
        <BrightnessContrast {...brightnessContrastConfig} />
      )}
    </EffectComposer>
  );
};
