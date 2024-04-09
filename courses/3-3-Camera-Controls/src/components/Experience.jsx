import { button, useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import { sections } from "./UI";
import { CameraControls, Environment, Gltf } from "@react-three/drei";

const cameraPositions = {
  intro: [0.8503144347555986, -0.560747178949297, 0.8503144347555988, 0, 0, 0],
  titanium: [
    1.6269470477745973, -0.08199617683753212, 0.0012868091538008235, 0, 0, 0,
  ],
  camera: [
    0.23787808955966433, -0.47834873508444364, 0.4750417529355832,
    0.007050009547159786, 0.0028544709420128545, -0.017466759122731546,
  ],
  "action-button": [
    0.5575016497944482, -0.028192851071981218, -0.00480673706298803,
    -0.1855658916811315, 0.46422437600988475, -0.02354337756360715,
  ],
};

// const cameraPositions = {
//   intro: [0, 0, 3, 0, 0, 0],
//   titanium: [0, 0, 3, 0, 0, 0],
//   camera: [0, 0, 3, 0, 0, 0],
//   "action-button": [0, 0, 3, 0, 0, 0],
// };

export const Experience = ({ section }) => {
  const controls = useRef();
  const box = useRef();
  const sphere = useRef();

  /* Use Controls Section for leva */
  useControls("settings", {
    smoothTime: {
      value: 0.35,
      min: 0.1,
      max: 2,
      step: 0.1,
      onChange: (v) => (controls.current.smoothTime = v),
    },
  });
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

  useControls("fit", {
    fitToBox: button(() => {
      controls.current.fitToBox(box.current, true);
    }),
    fitToSphere: button(() => {
      controls.current.fitToSphere(sphere.current, false);
    }),
  });

  const [introFinished, setIntroFinished] = useState(false);
  const intro = async () => {
    controls.current.setLookAt(0, 0, 5, 0, 0, 0, false);
    await controls.current.dolly(3, true);
    await controls.current.rotate(degToRad(45), degToRad(25), true);

    setIntroFinished(true);
    playTransition();
  };

  const playTransition = () => {
    controls.current.setLookAt(...cameraPositions[sections[section]], true);
  };

  useControls("Helper", {
    getLookAt: button(() => {
      const position = controls.current.getPosition();
      const target = controls.current.getTarget();
      console.log([...position, ...target]);
    }),
  });

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    if (!introFinished) {
      return;
    }
    playTransition();
  }, [section]);

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
