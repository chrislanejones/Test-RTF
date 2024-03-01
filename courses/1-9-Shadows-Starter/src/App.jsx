import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 3, 3] }}
        style={{ background: "#20222B" }}
        shadows
      >
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow>
          <orthographicCamera
            attach="shadow-camera"
            args={[-10, 10, 10, -10]}
          />
        </directionalLight>
        <mesh position={[1, 1, 1]} castShadow>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh rotation-y={Math.PI / 4} castShadow receiveShadow>
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh rotation-x={-Math.PI / 2} position-y={-0.5} receiveShadow>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <group position-x={8}>
          <mesh position={[1, 1, 1]} castShadow>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>

          <mesh rotation-y={Math.PI / 4} castShadow receiveShadow>
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>

          <mesh rotation-x={-Math.PI / 2} position-y={-0.5} receiveShadow>
            <planeGeometry args={[5, 5]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </group>
      </Canvas>
    </>
  );
}

export default App;
