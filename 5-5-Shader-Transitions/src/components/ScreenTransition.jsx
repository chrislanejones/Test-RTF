import { Hud, OrthographicCamera } from "@react-three/drei";

export const ScreenTransition = ({ transition, color }) => {
  return (
    <Hud>
      <OrthographicCamera
        makeDefault
        top={1}
        right={1}
        bottom={-1}
        left={-1}
        near={0}
        far={1}
      />
      <mesh>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Hud>
  );
};
