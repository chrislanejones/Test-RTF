import { Environment, Gltf, OrbitControls } from "@react-three/drei";
import { CameraControls } from "@react-three/drei";
import { useRef } from "react";
import { button, useControls } from "leva";

export const Experience = () => {
  const controls = useRef();
  const box = useRef();
  const sphere = useRef();

  useControls("settings", {
    smoothTime: {
      value: 0.35,
      min: 0.1,
      max: 2,
      step: 0.1,
      onChange: (value) => (controls.current.smoothTime = value),
    },
  });

  useControls("Dolly", {
    in: button(() => controls.current.dolly(1, true)),
    out: button(() => controls.current.dolly(-1, true)),
  });
  useControls("truck", {
    up: button(() => {
      controls.current.truck(0, -0.5, true);
    }),
    left: button(() => {
      controls.current.truck(-0.5, 0, true);
    }),
    down: button(() => {
      controls.current.truck(0, 0.5, true);
    }),
    right: button(() => {
      controls.current.truck(0.5, 0, true);
    }),
  });
  useControls("rotate", {
    up: button(() => {
      controls.current.rotate(0, -0.5, true);
    }),
    down: button(() => {
      controls.current.rotate(0, 0.5, true);
    }),
    left: button(() => {
      controls.current.rotate(-0.5, 0, true);
    }),
    right: button(() => {
      controls.current.rotate(0.5, 0, true);
    }),
  });

  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={box}>
        <boxGeometry args={[0.5, 1, 0.2]} />
        <meshBasicMaterial color="hotpink" wireframe />
      </mesh>
      <mesh ref={sphere}>
        <sphereGeometry args={[0.3, 64]} />
        <meshBasicMaterial color="hotpink" wireframe />
      </mesh>
      <Gltf
        position={[0, 0, 0]}
        src="models/apple_iphone_15_pro_max_black.glb"
        // "Apple iPhone 15 Pro Max Black" (https://skfb.ly/oLpPT) by polyman is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
      />
      <group rotation-y={Math.PI}>
        <Environment preset="warehouse" blur />
      </group>
    </>
  );
};
