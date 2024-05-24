import { Canvas, extend } from "@react-three/fiber";
import { Experience } from "./Experience";
import { ArtFront01Material } from "./materials/ArtFront01Material";
import { ArtFront02Material } from "./materials/ArtFront02Material";
import { ArtFront03Material } from "./materials/ArtFront03Material";
import { ArtLeft01Material } from "./materials/ArtLeft01Material";
import { ArtLeft02Material } from "./materials/ArtLeft02Material";
import { ArtLeft03Material } from "./materials/ArtLeft03Material";
import { ArtRear01Material } from "./materials/ArtRear01Material";
import { ArtRear02Material } from "./materials/ArtRear02Material";
import { ArtRear03Material } from "./materials/ArtRear03Material";
import { ArtRear04Material } from "./materials/ArtRear04Material";
import { ArtRight01Material } from "./materials/ArtRight01Material";
import { SimpleShaderMaterial } from "./materials/SimpleShaderMaterial";

extend({
  SimpleShaderMaterial,
  ArtFront01Material,
  ArtFront02Material,
  ArtFront03Material,
  ArtLeft01Material,
  ArtLeft02Material,
  ArtLeft03Material,
  ArtRight01Material,
  ArtRear01Material,
  ArtRear02Material,
  ArtRear03Material,
  ArtRear04Material,
});

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 0.00001], fov: 65 }}>
      <Experience />
    </Canvas>
  );
}

export default App;
