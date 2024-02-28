import { Grid } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Box = () => {
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color="white" transparent opacity={0} />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <axesHelper />
        {/* <gridHelper args={[10, 10, "green", "blue"]} /> */}
        <Grid
          sectionSize={3}
          sectionColor={"purple"}
          sectionThickness={1}
          cellSize={1}
          cellColor={"#6f6f6f"}
          cellThickness={0.6}
          infiniteGrid
          fadeDistance={50}
          fadeStrength={5}
        />
        <Box />
      </Canvas>
    </>
  );
}

export default App;
