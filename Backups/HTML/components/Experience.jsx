import { Html, useGLTF } from "@react-three/drei";
import { useState } from "react";

const sceneItems = [
  {
    model: "Japanese Door.glb",
    position: [0, -0.88, -1.2],
    scale: 1.8,
    name: "Hemnes",
    price: 300,
    labelOffset: [2, 7, -2],
  },
  {
    model: "Counter Sink.glb",
    position: [1.3, 0, -2.8],
    name: "Lillången",
    price: 450,
    labelOffset: [-0.5, 1, 1.5],
  },
  {
    model: "Chopping board.glb",
    position: [2.8, 1.9, -2.8],
    scale: 0.5,
    name: "Skogsta",
    price: 25,
    labelOffset: [0, 1, 0],
  },
  {
    model: "Fridge.glb",
    position: [-2.1, 0, -3],
    name: "Lagan",
    price: 600,
    labelOffset: [-0.5, 3, 2],
  },
  {
    model: "Table.glb",
    position: [-1, 0, 2],
    scale: [1, 1, 1],
    name: "Lerhamn",
    price: 80,
    labelOffset: [1, 1, 0],
  },
  {
    model: "Dango.glb",
    position: [-1.4, 1.64, 2],
    scale: 0.72,
    rotation: [0, Math.PI / 6, 0],
    name: "Dango",
    price: 4,
    labelOffset: [-1, 0.5, 0],
  },
];

export const Experience = () => {
  return (
    <>
      {sceneItems.map((item, index) => {
        return <Item key={index} {...item} />;
      })}
    </>
  );
};

const Item = ({
  model,
  position,
  rotation,
  name,
  price,
  labelOffset,
  ...props
}) => {
  const gltf = useGLTF(`models/${model}`);
  const [hidden, setHidden] = useState(false);

  return (
    <group position={position} rotation={rotation}>
      <primitive object={gltf.scene} {...props} />
      <Html
        transform
        occlude
        onOcclude={setHidden}
        position={labelOffset}
        scale={0.42}
      >
        <div className={`label noselect ${hidden ? "label--hidden" : ""}`}>
          <div className="label__price">${price}</div>
          <div className="label__name">{name}</div>
        </div>
      </Html>
    </group>
  );
};
