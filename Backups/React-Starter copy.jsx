import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { button, useControls } from "leva";
import { useMemo, useEffect, useRef, useState, memo, useCallback } from "react";
import * as THREE from "three";

const Cube = memo((props) => {
  console.log("Cube Rendered");
  const [color, setColor] = useState("white");
  const ref = useRef();

  const material = useMemo(
    () => <meshStandardMaterial color={color} />,
    [color]
  );

  var scene = new THREE.Scene();

  // Change Background Color
  scene.background = new THREE.Color(0x000000);

  useControls({
    changeColorToRed: button(() => setColor("red")),
    changeColorToGreen: button(() => setColor("green")),
    changeColorToBlue: button(() => setColor("blue")),
    rotateCube: button(() => (ref.current.rotation.y += Math.PI / 4)),
  });

  useEffect(() => {
    const colorsPositions = {
      white: [0, 0, 0],
      red: [-1, 0, 0],
      blue: [0, 1, 0],
      green: [1, 0, 0],
    };

    const position = colorsPositions[color];
    ref.current.position.set(...position);

    const interval = setInterval(
      () => (ref.current.rotation.y += Math.PI / 4),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, [color]);

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const onCubeClicked = useCallback(() => {
    console.log(`Cube clicked ${count} time${count > 1 ? "s" : ""}`);
    setCount((prev) => count + 1);
  }, []);

  return (
    <>
      <Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
        <OrbitControls />
        <Cube rotation-y={Math.PI / 4} onClick={onCubeClicked} />
        <ContactShadows
          position-y={-2}
          opacity={0.5}
          blur={2}
          color={"pink"}
          scale={10}
        />
        <Environment preset="city" />
      </Canvas>
    </>
  );
}

export default App;
