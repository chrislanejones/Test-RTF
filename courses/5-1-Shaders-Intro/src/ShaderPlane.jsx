import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";
import { randFloat } from "three/src/math/MathUtils.js";

const MyShaderMaterial = shaderMaterial(
  {
    uColor: new Color("pink"),
    uTime: 0,
  },
  /* glsl */ `
attribute vec3 aColor;
varying vec3 vColor;

void main() {
  vColor = aColor;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
  /* glsl */ `
  varying vec3 vColor;

  void main() {
    gl_FragColor = vec4(vColor, 1.0);
  }
  `
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
          attach={"attributes-aColor"}
          count={3 * ((widthSegments + 1) * (heightSegments + 1))}
          array={new Float32Array(
            3 * (widthSegments + 1) * (heightSegments + 1)
          ).map(() => randFloat(0, 1))}
          itemSize={3}
        />
      </planeGeometry>
      <myShaderMaterial uColor="lightblue" ref={material} />
    </mesh>
  );
};
