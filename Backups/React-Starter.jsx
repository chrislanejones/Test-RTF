import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { button, useControls } from "leva";
import { useMemo, useRef, useState } from "react";

const Cube = (props) => {
  const [color, setColor] = useState("white");
  const ref = useRef();

  const material = useMemo(
    () => <meshStandardMaterial color={color} />,
    [color]
  );

  useControls({
    changeColorToRed: button(() => setColor("red")),
    changeColorToGreen: button(() => setColor("green")),
    changeColorToBlue: button(() => setColor("blue")),
  });

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
        <OrbitControls />
        <Cube rotation-y={Math.PI / 4} />
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
