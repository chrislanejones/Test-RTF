import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
};

export default App;
