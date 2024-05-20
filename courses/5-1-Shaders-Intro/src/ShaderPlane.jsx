import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const MyShaderMaterial = shaderMaterial(
  {},
  `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
  `
);

extend({ MyShaderMaterial });

export const ShaderPlane = ({ ...props }) => {
  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1]} />
      <myShaderMaterial />
    </mesh>
  );
};
