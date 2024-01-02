import { Environment, Gltf, OrbitControls } from "@react-three/drei";
import { CameraControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { button, useControls } from "leva";
import { degToRad } from "three/src/math/MathUtils";
import { sections } from "./UI";

const cameraPositions = {
  intro: [
    -0.8408130777453015, -0.5579311237409535, -1.2494838493879465,
    0.09186000885066517, -0.013170057989714374, -0.15707536590700685,
  ],
  titanium: [
    -0.33845493114618996, -0.38300322828293054, 0.23117101681493882,
    0.0907781098318133, 0.14091696753514726, -0.09426415209367653,
  ],
  camera: [
    -0.2816817625748494, -0.017347003209647244, 0.3065631638865963,
    -0.036054404825409433, 0.2469066391985735, 0.01959945436374355,
  ],
  "action-button": [
    -0.88612937193474, -0.4964915367233699, 0.003459464080557469,
    -0.015160554557400105, 0.16977404132378549, 0.0015889919991764756,
  ],
};

export const Experience = ({ section }) => {
  const controls = useRef();
  const box = useRef();
  const sphere = useRef();

  useControls("settings", {
    smoothTime: {
      value: 0.35,
      min: 0.5,
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
      onChange: (v) => {
        // imperatively update the world after Leva input changes
        divRef.current.truck = v;
      };
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

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    if (!introFinished) {
      return;
    }
    playTransition();
  }, [section]);

  useControls("helper", {
    getLookAt: button(() => {
      const position = controls.current.getPosition();
      const target = controls.current.getTarget();
      console.log([...position, ...target]);
    }),
  });

  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={box} visible={false}>
        <boxGeometry args={[0.5, 1, 0.2]} />
        <meshBasicMaterial color="hotpink" wireframe />
      </mesh>
      <mesh ref={sphere} visible={false}>
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
