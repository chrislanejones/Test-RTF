import {
  ContactShadows,
  Environment,
  Gltf,
  OrbitControls,
  Sky,
  useVideoTexture,
} from "@react-three/drei";
import { Vector3 } from "three";
import { Avatar } from "./Avatar";
import { useFBO } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const VECTOR_ZERO = new Vector3(0, 0, 0);

export const Experience = () => {
  const tvMaterial = useRef();
  const videoTexture = useVideoTexture("/textures/bounce-patrick.mp4");
  const cornerRenderTarget = useFBO();

  useFrame(({ gl, camera, scene }) => {
    tvMaterial.current.map = videoTexture;

    gl.setRenderTarget(cornerRenderTarget);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    tvMaterial.current.map = cornerRenderTarget.texture;
  });

  return (
    <>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={5}
      />
      <group position-y={-0.5}>
        <group>
          <Sky />
          <Avatar rotation-y={Math.PI} scale={0.45} position-z={0.34} />
          <Gltf src="models/Room.glb" scale={0.3} rotation-y={-Math.PI / 2} />
          <mesh position-x={0.055} position-y={0.48} position-z={-0.601}>
            <planeGeometry args={[0.63, 0.44]} />
            <meshBasicMaterial ref={tvMaterial} />
          </mesh>
        </group>
      </group>
      <Environment preset="sunset" />
      <ContactShadows position-y={-1} blur={2} opacity={0.42} />
    </>
  );
};
