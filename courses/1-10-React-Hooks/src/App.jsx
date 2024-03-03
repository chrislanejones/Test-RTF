import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { button, useControls } from "leva";

const Cube = (props) => {
  const [color, setColor] = useState("red");
  const ref = useRef();
  const myNumber = useRef(0);

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
      {material}
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas
        style={{ background: "#cccccc" }}
        camera={{ position: [0, 2, 6], fov: 42 }}
      >
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
