import {
  BakeShadows,
  ContactShadows,
  OrbitControls,
  SoftShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";

function App() {
  const { cubeInAir } = useControls({
    cubeInAir: false,
  });
  return (
    <>
      <Canvas
        camera={{ position: [0, 3, 3] }}
        style={{ background: "#20222B" }}
      >
        <ContactShadows
          frames={1}
          position-y={-0.49}
          opacity={0.5}
          blur={2}
          color={"pink"}
          scale={10}
        />
        <SoftShadows />
        <BakeShadows />
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.5}
          castShadow
        ></directionalLight>
        <mesh position={[1, 1, 1]} castShadow>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh
          rotation-y={Math.PI / 4}
          castShadow
          receiveShadow
          position-y={cubeInAir ? 1 : 0}
        >
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh rotation-x={-Math.PI / 2} position-y={-0.5} receiveShadow>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
