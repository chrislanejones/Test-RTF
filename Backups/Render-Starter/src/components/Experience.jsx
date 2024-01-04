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
import { useRemote } from "../hooks/useRemote";

const VECTOR_ZERO = new Vector3(0, 0, 0);

export const Experience = () => {
  const videoTexture = useVideoTexture("/textures/bounce-patrick.mp4");

  const frontCamera = useRef();
  const frontRenderTarget = useFBO();

  const topCamera = useRef();
  const topRenderTarget = useFBO();

  const cornerCamera = useRef();
  const cornerRenderTarget = useFBO();

  const tvMaterial = useRef();

  const { mode } = useRemote();

  useFrame(({ gl, scene }) => {
    tvMaterial.current.map = videoTexture;

    topCamera.current.lookAt(VECTOR_ZERO);
    cornerCamera.current.lookAt(VECTOR_ZERO);
    frontCamera.current.lookAt(VECTOR_ZERO);

    let currentScreenTexture = videoTexture;

    if (mode === "top") {
      currentScreenTexture = topRenderTarget.texture;
      // Rendering main scene with the top camera
      gl.setRenderTarget(topRenderTarget);
      gl.render(scene, topCamera.current);
    }

    if (mode === "corner") {
      currentScreenTexture = cornerRenderTarget.texture;
      // Rendering main scene with the top camera
      gl.setRenderTarget(cornerRenderTarget);
      gl.render(scene, cornerCamera.current);
    }

    if (mode === "front") {
      currentScreenTexture = frontRenderTarget.texture;
      gl.setRenderTarget(frontRenderTarget);
      gl.render(scene, frontCamera.current);
    }

    gl.setRenderTarget(null);

    // Reset tvMaterial to the current screen texture
    tvMaterial.current.map = currentScreenTexture;
  });

  return (
    <>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={5}
      />
      <perspectiveCamera
        position={[0, 0, -0.3]}
        fov={50}
        near={0.1}
        ref={frontCamera}
      />
      <perspectiveCamera
        position={[0, 2.2, 0]}
        fov={30}
        near={0.1}
        ref={topCamera}
      />
      <perspectiveCamera
        position={[2, 1.2, 0]}
        fov={30}
        near={0.1}
        ref={cornerCamera}
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
