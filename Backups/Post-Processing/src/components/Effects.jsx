import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
  Vignette,
  Sepia,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { BlendFunction } from "postprocessing";

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
      value: 0.02,
      min: 0,
      max: 1,
    },
    contrast: {
      value: -0.1,
      min: 0,
      max: 1,
    },
  });

  const sepiaConfig = useControls("sepia", {
    enabled: true,
    blendFunction: {
      value: "DARKEN",
      options: Object.keys(BlendFunction),
    },
  });
  return (
    <EffectComposer disableNormalPass>
      {vignetteConfig.enabled && <Vignette {...vignetteConfig} />}
      {bloomConfig.enabled && <Bloom {...bloomConfig} />}
      {brightnessContrastConfig.enabled && (
        <BrightnessContrast {...brightnessContrastConfig} />
      )}
      {sepiaConfig.enabled && (
        <Sepia
          {...sepiaConfig}
          blendFunction={BlendFunction[sepiaConfig.blendFunction]}
        />
      )}
    </EffectComposer>
  );
};
