import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { City } from "./components/City";
import { useControls } from "leva";

const pA = useControls("Camera1", options);
const pB = useControls("Camera2", options);

const [ortho, set] = useState(false);
useEffect(() => {
  const interval = setInterval(() => set((state) => !state), 1000);
  return () => clearInterval(interval);
}, []);

function App() {
  return (
    <Canvas>
      <PerspectiveCamera
        position={[3, 3, 3]}
        makeDefault={true}
        fov={30}
        aspect={1}
      />
      <OrbitControls />
      {/* IGNORE FOR NOW */}
      <City />
      <Environment preset="city" />
    </Canvas>
  );
}

export default App;
