import { useGLTF } from "@react-three/drei";

const sceneItems = [
  {
    model: "Japanese Door.glb",
    position: [0, -0.88, -1.2],
    scale: 1.8,
  },
  {
    model: "Counter Sink.glb",
    position: [1.3, 0, -2.8],
  },
  {
    model: "Chopping board.glb",
    position: [2.8, 1.9, -2.8],
    scale: 0.5,
  },
  {
    model: "Fridge.glb",
    position: [-2.1, 0, -3],
  },
  {
    model: "Table.glb",
    position: [-1, 0, 2],
    scale: [1, 1, 1],
  },
  {
    model: "Dango.glb",
    position: [-1.4, 1.64, 2],
    scale: 0.72,
    rotation: [0, Math.PI / 6, 0],
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

const Item = ({ model, position, rotation, ...props }) => {
  const gltf = useGLTF(`models/${model}`);

  return (
    <group position={position} rotation={rotation}>
      <primitive object={gltf.scene} {...props} />
    </group>
  );
};
