import { EffectComposer, Vignette, Bloom } from "@react-three/postprocessing";
import { useControls } from "leva";

export const Effects = () => {
  // Vignette Effect
  // const vignetteConfig = useControls("vignette", {
  //   enabled: true,
  //   offset: { value: 0.1, min: 0, max: 1 },
  //   darkness: { value: 0.92, min: 0, max: 1 },
  // });

  // Bloom Effect
  const bloomConfig = useControls("bloom", {
    enabled: true,
    luminanceThreshold: { value: 1, min: 0, max: 2 },
    intensity: { value: 1.28, min: 0, max: 2 },
    mipmapBlur: true,
  });

  return (
    <EffectComposer disableNormalPass>
      {bloomConfig.enabled && <Bloom {...bloomConfig} />}
    </EffectComposer>
  );
};
