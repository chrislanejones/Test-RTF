import {
  EffectComposer,
  Vignette,
  Bloom,
  DepthOfField,
  Noise,
  BrightnessContrast,
  Glitch,
} from "@react-three/postprocessing";
import { useControls } from "leva";

export const Effects = () => {
  // Vignette Effect
  const vignetteConfig = useControls("vignette", {
    enabled: true,
    offset: { value: 0.1, min: 0, max: 1 },
    darkness: { value: 0.92, min: 0, max: 1 },
  });

  // Bloom Effect
  const bloomConfig = useControls("bloom", {
    enabled: true,
    luminanceThreshold: { value: 1, min: 0, max: 2 },
    intensity: { value: 1.28, min: 0, max: 2 },
    mipmapBlur: true,
  });

  // DepthOfField Effect
  const DepthOfFieldConfig = useControls("DepthOfField", {
    enabled: true,
    focalDistance: { value: 0, min: 0, max: 2 },
    focalLength: { value: 0, min: 0.1, max: 0.8 },
    bokehScale: { value: 0, min: 0, max: 3 },
    height: { value: 0, min: 0, max: 500 },
  });

  // DepthOfField Effect
  const GlitchConfig = useControls("Glitch", {
    enabled: true,
    delay: { value: 0.5, min: 0.5, max: 2.0 },
    duration: { value: 0.3, min: 0.3, max: 2.0 },
    strength: { value: 0, min: 0, max: 3 },
  });

  // Noise Effect
  const NoiseConfig = useControls("Noise", {
    enabled: true,
    opacity: { value: 0, min: 0, max: 8 },
  });

  // Brightness Contrast Effect
  const brightnessContrastConfig = useControls("brightnessContrast", {
    enabled: true,
    brightness: { value: 0.02, min: -1, max: 1 },
    contrast: { value: -0.1, min: -1, max: 1 },
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
      {bloomConfig.enabled && <Bloom {...bloomConfig} />}
      {vignetteConfig.enabled && <Vignette {...vignetteConfig} />}
      {DepthOfFieldConfig.enabled && <DepthOfField {...DepthOfFieldConfig} />}
      {NoiseConfig.enabled && <Noise {...NoiseConfig} />}
      {GlitchConfig.enabled && (
        <Glitch {...GlitchConfig} />
      )}
      {brightnessContrastConfig.enabled && (
        <BrightnessContrast {...brightnessContrastConfig} />
      )}
       {sepiaConfig.enabled && (
        <Sepia
          {...sepiaConfig}
          blendFunction={BlendFunction[sepiaConfig.blendFunction]}
        />
    </EffectComposer>
  );
};
