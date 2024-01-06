import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { useControls } from "leva";


export const Effects = () => {
 
    const bloomConfig = useControls("bloom", {
        enabled: true,
        luminanceThreshold: { value: 1, min: 0, max: 2 },
        intensity: { value: 1.28, min: 0, max: 2 },
        mipmapBlur: true,
      });
  });
  return (
    <EffectComposer disableNormalPass>

      {bloomConfig.enabled && <Bloom {...bloomConfig} />}
    </EffectComposer>
  );
};
