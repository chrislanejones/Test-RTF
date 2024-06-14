import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import { Color } from "three";
import {
  Color,
  FloatType,
  MeshDepthMaterial,
  NoBlending,
  RGBADepthPacking,
} from "three";

const depthMaterial = new MeshDepthMaterial();
depthMaterial.depthPacking = RGBADepthPacking;
depthMaterial.blending = NoBlending;

export const Water = ({ ...props }) => {
  const waterMaterialRef = useRef();
  const { waterColor, waterOpacity, speed, noiseType, foam, foamTop, repeat } =
    useControls({
      waterOpacity: { value: 0.8, min: 0, max: 1 },
      waterColor: "#00c3ff",
      speed: { value: 0.5, min: 0, max: 5 },
      maxDepth: { value: 2, min: 0, max: 5 },
      repeat: {
        value: 30,
        min: 1,
        max: 100,
      },
      foam: {
        value: 0.4,
        min: 0,
        max: 1,
      },
      foamTop: {
        value: 0.7,
        min: 0,
        max: 1,
      },
      noiseType: {
        value: 0,
        options: {
          Perlin: 0,
          Voronoi: 1,
        },
      },
    });

  useFrame(({ clock }) => {
    if (waterMaterialRef.current) {
      waterMaterialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh {...props}>
      <planeGeometry args={[15, 32, 22, 22]} />
      <waterMaterial
        ref={waterMaterialRef}
        uColor={new Color(waterColor)}
        transparent
        uOpacity={waterOpacity}
        uNoiseType={noiseType}
        uSpeed={speed}
        uRepeat={repeat}
        uFoam={foam}
        uFoamTop={foamTop}
      />
    </mesh>
  );
};
