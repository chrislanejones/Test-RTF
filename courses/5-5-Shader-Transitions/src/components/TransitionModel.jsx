import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { MathUtils } from "three/src/math/MathUtils.js";
import { CAKE_TRANSITION_DURATION } from "./UI";
import { useFrame } from "@react-three/fiber";
import { shaderStages } from "three/examples/jsm/nodes/Nodes.js";

const declarationsFragment = /* glsl */ `
  uniform float uProgression;
`;

const fadeFragment = /* glsl */ `
  diffuseColor.a = diffuseColor.a * uProgression;
`;

const varyingFragment = /* glsl */ `
  varying vec3 vPosition;
`;

const applyVaryingFragment = /* glsl */ `
  // use world position to apply the effect
  vPosition = gl_Position.xyz;
`;

export function TransitionModel({ model, visible, ...props }) {
  const { scene, materials } = useGLTF(`/models/${model}.glb`);
  const transitionData = useRef({
    from: 0,
    to: 1,
    started: 0,
  });

  const [animatedVisible, setAnimatedVisible] = useState(visible);

  useEffect(() => {
    if (visible === animatedVisible) {
      return;
    }
    if (!visible) {
      transitionData.current.from = 1;
      transitionData.current.to = 0;
      transitionData.current.started = new Date();
    }
    const timeout = setTimeout(() => {
      if (visible) {
        transitionData.current.from = 0;
        transitionData.current.to = 1;
        transitionData.current.started = new Date();
      }
      setAnimatedVisible(visible);
    }, CAKE_TRANSITION_DURATION * 1000);
    return () => clearTimeout(timeout);
  }, [visible]);

  useFrame(() => {
    Object.values(materials).forEach((material) => {
      if (material.userData.shader) {
        material.userData.shader.uniforms.uProgression.value = MathUtils.lerp(
          transitionData.current.from,
          transitionData.current.to,
          (new Date() - transitionData.current.started) /
            (CAKE_TRANSITION_DURATION * 1000)
        );
      }
    });
  });

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.transparent = true;
      material.onBeforeCompile = (shader) => {
        shader.uniforms.uProgression = { value: 0 };
        material.userData.shader = shader;

        shader.vertexShader = shader.vertexShader.replace(
          `void main() {`,
          `${varyingFragment}
                  void main() {`
        );
        shader.vertexShader = shader.vertexShader.replace(
          `#include <fog_vertex>`,
          `#include <fog_vertex>
                  ${applyVaryingFragment}`
        );

        shader.fragmentShader = shader.fragmentShader.replace(
          `void main() {`,
          `${varyingFragment}
          void main() {`
        );

        shader.fragmentShader = shader.fragmentShader.replace(
          `void main() {`,
          `${declarationsFragment}
          void main() {`
        );
        shader.fragmentShader = shader.fragmentShader.replace(
          `#include <alphamap_fragment>`,
          `#include <alphamap_fragment>
        ${fadeFragment}`
        );
        shader.fragmentShader = shader.fragmentShader.replace(
          `#include <tonemapping_fragment>`,
          `${colorWashFragment}
                #include <tonemapping_fragment>`
        );
      };
    });
  }, [materials]);

  return (
    <group {...props} dispose={null} visible={animatedVisible}>
      <primitive object={scene} />
    </group>
  );
}
