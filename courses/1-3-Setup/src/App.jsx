import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
};

export default App;
