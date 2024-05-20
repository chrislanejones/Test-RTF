import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Color } from "three";

import myShaderFragment from "./shaders/myshader.fragment.glsl";
import myShaderVertex from "./shaders/myshader.vertex.glsl";

const MyShaderMaterial = shaderMaterial(
  {
    uColor: new Color("pink"),
  },
  myShaderVertex,
  myShaderFragment
);

extend({ MyShaderMaterial });

export const ShaderPlane = ({ ...props }) => {
  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1]} />
      <myShaderMaterial uColor={"lightblue"} />
    </mesh>
  );
};
