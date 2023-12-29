import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const TeamMember = ({ model = "Casual", ...props }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(`/models/${model}.gltf`);
  const { actions, mixer } = useAnimations(animations, group);
  const [animation, setAnimation] = useState("Idle");
  useEffect(() => {
    actions[animation].reset().fadeIn(0.2).play();
    return () => actions[animation].fadeOut(0.2);
  }, [animation]);

  useEffect(() => {
    // We set clampWhenFinished and loop to LoopOnce to have the "finished" event fire when the animation is done playing
    if (actions["Wave"]) {
      actions["Wave"].clampWhenFinished = true;
      actions["Wave"].loop = THREE.LoopOnce;
    }
  }, [actions]);

  useEffect(() => {
    const onAnimationFinished = () => {
      setAnimation("Idle");
    };
    mixer.addEventListener("finished", onAnimationFinished);
    return () => mixer.removeEventListener("finished", onAnimationFinished);
  }, [mixer]);
  return (
    <group ref={group} {...props} onPointerEnter={() => setAnimation("Wave")}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload("/models/Casual.gltf");
useGLTF.preload("/models/Formal.gltf");
useGLTF.preload("/models/Suit.gltf");
