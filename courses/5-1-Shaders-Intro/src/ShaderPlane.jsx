import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { Color } from "three";
import { useRef } from "react";

import myShaderFragment from "./shaders/myshader.fragment.glsl";
import myShaderVertex from "./shaders/myshader.vertex.glsl";

const MyShaderMaterial = shaderMaterial(
  {
    uColor: new Color("pink"),
    uTime: 0,
  },
  myShaderVertex,
  myShaderFragment
);

extend({ MyShaderMaterial });

export const ShaderPlane = ({ ...props }) => {
  const material = useRef();

  useFrame(({ clock }) => {
    material.current.uTime = clock.getElapsedTime();
  });

  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1]} />
      <myShaderMaterial uColor={"lightblue"} ref={material} />
    </mesh>
  );
};
