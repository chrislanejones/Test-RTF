import {
  EffectComposer,
  Vignette,
  Bloom,
  DepthOfField,
  Noise,
  BrightnessContrast,
  Glitch,
  Sepia,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { BlendFunction, GlitchMode } from "postprocessing";

export const Effects = () => {
  // Vignette Effect
  const vignetteConfig = useControls("vignette", {
    enabled: false,
    offset: { value: 0.1, min: 0, max: 1 },
    darkness: { value: 0.92, min: 0, max: 1 },
  });

  // Bloom Effect
  const bloomConfig = useControls("bloom", {
    enabled: false,
    luminanceThreshold: { value: 1, min: 0, max: 2 },
    intensity: { value: 1.28, min: 0, max: 2 },
    mipmapBlur: true,
  });

  // DepthOfField Effect
  const DepthOfFieldConfig = useControls("DepthOfField", {
    enabled: false,
    focalDistance: { value: 0, min: 0, max: 2 },
    focalLength: { value: 0, min: 0.1, max: 0.8 },
    bokehScale: { value: 0, min: 0, max: 3 },
    height: { value: 0, min: 0, max: 500 },
  });

  // DepthOfField Effect
  const glitchConfig = useControls("Glitch", {
    enabled: false,
    delay: { value: 0.5, min: 0.5, max: 2.0 },
    duration: { value: 0.3, min: 0.3, max: 2.0 },
    strength: { value: 0, min: 0, max: 3 },
    glitchMode: {
      value: "SPORADIC",
      options: Object.keys(GlitchMode),
    },
    active: true,
  });

  // Noise Effect
  const NoiseConfig = useControls("Noise", {
    enabled: false,
    opacity: { value: 0, min: 0, max: 8 },
  });

  // Brightness Contrast Effect
  const brightnessContrastConfig = useControls("brightnessContrast", {
    enabled: false,
    brightness: { value: 0.02, min: -1, max: 1 },
    contrast: { value: -0.1, min: -1, max: 1 },
  });

  // Sepia Effect
  const sepiaConfig = useControls("sepia", {
    enabled: false,
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
      {brightnessContrastConfig.enabled && (
        <BrightnessContrast {...brightnessContrastConfig} />
      )}
      {sepiaConfig.enabled && (
        <Sepia
          {...sepiaConfig}
          blendFunction={BlendFunction[sepiaConfig.blendFunction]}
        />
      )}
      {glitchConfig.enabled && (
        <Glitch {...glitchConfig} mode={GlitchMode[glitchConfig.glitchMode]} />
      )}
    </EffectComposer>
  );
};
