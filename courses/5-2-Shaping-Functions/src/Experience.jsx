import { CameraControls, Environment } from "@react-three/drei";
// import { ACTION } from 'camera-controls/dist/types'

import { Gallery } from "./Gallery";

export const Experience = () => {
  return (
    <>
      <CameraControls
        minZoom={0.6}
        maxZoom={2}
        polarRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
        azimuthRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
        mouseButtons={{
          left: 1, //ACTION.ROTATE
          wheel: 16, //ACTION.ZOOM
        }}
        touches={{
          one: 32, //ACTION.TOUCH_ROTATE
          two: 512, //ACTION.TOUCH_ZOOM
        }}
      />
      <Environment preset="sunset" background blur={0.3} />
      <Gallery position-y={-1.5} />
    </>
  );
};
