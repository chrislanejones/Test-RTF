import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { Color } from "three";
import { useRef } from "react";

import myShaderFragment from "./shaders/myshader.fragment.glsl";
import myShaderVertex from "./shaders/myshader.vertex.glsl";
import { randFloat } from "three/src/math/MathUtils.js";

const MyShaderMaterial = shaderMaterial(
  {
    uColor: new Color("pink"),
    uTime: 0,
  },
  myShaderVertex,
  myShaderFragment
);

extend({ MyShaderMaterial });

export const ShaderPlane = ({
  widthSegments = 5,
  heightSegments = 5,
  ...props
}) => {
  const material = useRef();

  useFrame(({ clock }) => {
    material.current.uTime = clock.getElapsedTime();
  });

  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1, widthSegments, heightSegments]}>
        <bufferAttribute
          attach={"attributes-aSpeed"}
          count={1 * ((widthSegments + 1) * (heightSegments + 1))}
          array={new Float32Array(
            1 * (widthSegments + 1) * (heightSegments + 1)
          ).map(() => randFloat(1, 5))}
          itemSize={1}
        />
      </planeGeometry>
      <myShaderMaterial uColor={"lightblue"} ref={material} />
    </mesh>
  );
};
