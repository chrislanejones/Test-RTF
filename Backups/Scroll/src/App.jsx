import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/interface";

// ...

export const foodItems = [
  {
    name: "Dango",
    description:
      "Dango is a Japanese dumpling and sweet made from mochiko, related to mochi.",
    model: "/models/Food_Dango.gltf",
    page: 1,
  },
  {
    name: "Maguro Nigiri",
    description:
      "Nigiri is a type of sushi made of a slice of raw fish over pressed vinegared rice.",
    model: "/models/Food_MaguroNigiri.gltf",
    page: 2,
  },
  {
    name: "Ramen",
    description:
      "Ramen is a Japanese noodle soup. It consists of Chinese wheat noodles served in a meat or (occasionally) fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork, nori, menma, and scallions.",
    model: "/models/Food_Ramen.gltf",
    page: 3,
  },
  {
    name: "Salmon Roll",
    description:
      "A salmon roll is a type of sushi roll. It usually contains cucumber, avocado, and salmon. It can sometimes also include other ingredients such as mayonnaise, lettuce, and sesame seed.",
    model: "/models/Food_SalmonRoll.gltf",
    page: 4,
  },
];
function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 4, 12], fov: 30 }}>
        <ScrollControls pages={5}>
          <Experience />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
