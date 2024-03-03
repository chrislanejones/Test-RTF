import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useControls, button } from "leva";

const Cube = (props) => {
  // const { camera } = useThree(); changes to below to prevent re-rendering
  const camera = useThree((state) => state.camera);

  const updateFov = (fov) => {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  };

  useControls("FOV", {
    smallFov: button(() => updateFov(20)),
    normalFov: button(() => updateFov(42)),
    bigFov: button(() => updateFov(60)),
    hugeFov: button(() => updateFov(110)),
  });

  return (
    <mesh {...props}>
      <boxGeometry />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas
        style={{ background: "#6a6a6a" }}
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
