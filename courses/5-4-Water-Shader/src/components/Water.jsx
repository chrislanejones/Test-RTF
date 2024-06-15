import { useFBO } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
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
  const {
    waterColor,
    waterOpacity,
    speed,
    maxDepth,
    noiseType,
    foam,
    foamTop,
    repeat,
  } = useControls({
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

  useFrame(({ gl, scene, camera, clock }) => {
    // We hide the water mesh and render the scene to the render target
    waterRef.current.visible = false;
    gl.setRenderTarget(renderTarget);
    scene.overrideMaterial = depthMaterial; // It replaces the material of all the meshes in the scene to store the depth values inside the render target
    gl.render(scene, camera);

    // We reset the scene and show the water mesh
    scene.overrideMaterial = null; // Comment this line if you want to visualize what happens in the render target
    waterRef.current.visible = true;
    gl.setRenderTarget(null);

    // We set the uniforms
    if (waterMaterialRef.current) {
      // ...
      waterMaterialRef.current.uniforms.uDepth.value = renderTarget.texture;
      const pixelRatio = gl.getPixelRatio();
      waterMaterialRef.current.uniforms.uResolution.value = [
        window.innerWidth * pixelRatio,
        window.innerHeight * pixelRatio,
      ];
      waterMaterialRef.current.uniforms.uCameraNear.value = camera.near;
      waterMaterialRef.current.uniforms.uCameraFar.value = camera.far;
    }
  });

  const renderTarget = useFBO({
    depth: true,
    type: FloatType,
  });

  const waterRef = useRef();

  return (
    <mesh {...props} ref={waterRef}>
      <planeGeometry args={[15, 32, 22, 22]} />
      <waterMaterial
        uMaxDepth={maxDepth}
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
