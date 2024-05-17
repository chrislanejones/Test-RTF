import { Environment } from "@react-three/drei";
import { MedievalFantasyBook } from "./MedievalFantasyBook";
import { editable as e } from "@theatre/r3f";
import { Autofocus, EffectComposer } from "@react-three/postprocessing";

export const Experience = () => {
  const focusTargetRef = useRef(new Vector3(0, 0, 0));
  const focusTargetVisualizerRef = useRef();

  return (
    <>
      <e.directionalLight
        theatreKey="sunlight"
        position={[3, 3, 3]}
        intensity={0.2}
        castShadow
        shadow-bias={-0.001}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <e.group theatreKey="MedievalFantasyBook">
        <MedievalFantasyBook scale={0.1} envMapIntensity={0.3} />
      </e.group>
      <Environment preset="dawn" background blur={4} />
      <EffectComposer>
        <Autofocus
          smoothTime={0.1}
          debug={0.04}
          focusRange={0.002}
          bokehScale={8}
        />
      </EffectComposer>
    </>
  );
};
