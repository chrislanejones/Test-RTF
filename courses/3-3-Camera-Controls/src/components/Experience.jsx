import { button, useControls } from "leva";
import { useEffect, useRef } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import { sections } from "./UI";
import { CameraControls, Environment, Gltf } from "@react-three/drei";

export const Experience = ({ section }) => {
  const cameraPositions = {
    intro: [0, 0, 3, 0, 0, 0],
    titanium: [0, 0, 3, 0, 0, 0],
    camera: [0, 0, 3, 0, 0, 0],
    "action-button": [0, 0, 3, 0, 0, 0],
  };

  const [introFinished, setIntroFinished] = useState(false);
  const intro = async () => {
    controls.current.setLookAt(0, 0, 5, 0, 0, 0, false);
    await controls.current.dolly(3, true);
    await controls.current.rotate(degToRad(45), degToRad(25), true);

    setIntroFinished(true);
    playTransition();
  };

  useEffect(() => {
    if (!introFinished) {
      return;
    }
    playTransition();
  }, [section]);
  // ...

  const box = useRef();
  const sphere = useRef();

  useControls("dolly", {
    in: button(() => {
      controls.current.dolly(1, true);
    }),
    out: button(() => {
      controls.current.dolly(-1, true);
    }),
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
  useControls("settings", {
    smoothTime: {
      value: 0.35,
      min: 0.1,
      max: 2,
      step: 0.1,
      onChange: (v) => (controls.current.smoothTime = v),
    },
  });

  useControls("fit", {
    fitToBox: button(() => {
      controls.current.fitToBox(box.current, true);
    }),
    fitToSphere: button(() => {
      controls.current.fitToSphere(sphere.current, false);
    }),
  });
  const controls = useRef();
  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={box} visible={false}>
        <boxGeometry args={[0.5, 0.8, 0.2]} />
        <meshBasicMaterial color="mediumpurple" wireframe />
      </mesh>
      <mesh ref={sphere} visible={false}>
        <sphereGeometry args={[0.36, 64]} />
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
