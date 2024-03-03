import {
  AccumulativeShadows,
  BakeShadows,
  ContactShadows,
  OrbitControls,
  RandomizedLight,
  SoftShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";

function App() {
  const { cubeInAir } = useControls({
    cubeInAir: false,
  });
  const { sphereMove } = useControls({
    sphereMove: false,
  });
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 3, 3] }}
        style={{ background: "#cccccc" }}
      >
        <OrbitControls />
        <OrbitControls />
        <AccumulativeShadows
          temporal
          frames={35}
          alphaTest={0.85}
          scale={5}
          position={[0, -0.499, 0]}
          color="#EFBD4E"
        >
          <RandomizedLight
            amount={4}
            radius={9}
            intensity={0.55}
            ambient={0.25}
            position={[5, 5, -10]}
          />
          <RandomizedLight
            amount={4}
            radius={5}
            intensity={0.25}
            ambient={0.55}
            position={[-5, 5, -9]}
          />
        </AccumulativeShadows>

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} color="red" />
        <mesh
          position-y={1}
          position-x={sphereMove ? 0.5 : 1}
          position-z={sphereMove ? 0.5 : 1}
          rotation-y={Math.PI / 2}
          castShadow
        >
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
