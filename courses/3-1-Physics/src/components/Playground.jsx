/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/playground.glb -o src/components/Playground.jsx -r public -k
*/

import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React, { useEffect, useRef } from "react";

export function Playground(props) {
  const { nodes, materials } = useGLTF("/models/playground.glb");

  const swiper = useRef();
  useEffect(() => {
    swiper.current.setAngvel({ x: 0, y: 3, z: 0 }, true);
  });

  return (
    <group {...props} dispose={null}>
      <RigidBody
        type="kinematicVelocity"
        colliders={"trimesh"}
        ref={swiper}
        restitution={3}
        name="swiper"
      >
        <group
          name="swiperDouble_teamRed"
          rotation-y={Math.PI / 4}
          position={[0.002, -0.106, -21.65]}
        >
          <mesh
            receiveShadow
            castShadow
            name="Cylinder051"
            geometry={nodes.Cylinder051.geometry}
            material={materials["Brown.004"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cylinder051_1"
            geometry={nodes.Cylinder051_1.geometry}
            material={materials["Metal.030"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cylinder051_2"
            geometry={nodes.Cylinder051_2.geometry}
            material={materials["Red.010"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cylinder051_3"
            geometry={nodes.Cylinder051_3.geometry}
            material={materials["White.005"]}
          />
        </group>
      </RigidBody>
      <RigidBody type="fixed" name="ground" colliders="trimesh">
        <group name="button_teamYellow" position={[-39.612, -0.038, -27.712]}>
          <mesh
            receiveShadow
            castShadow
            name="Cube1548"
            geometry={nodes.Cube1548.geometry}
            material={materials["Yellow.032"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cube1548_1"
            geometry={nodes.Cube1548_1.geometry}
            material={materials["Metal.065"]}
          />
        </group>
        <group
          name="flag_teamYellow"
          position={[-39.987, -0.145, -25.53]}
          rotation={[0, -0.548, 0]}
        >
          <mesh
            receiveShadow
            castShadow
            name="Cube1559"
            geometry={nodes.Cube1559.geometry}
            material={materials["Yellow.022"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cube1559_1"
            geometry={nodes.Cube1559_1.geometry}
            material={materials["Brown.012"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cube1559_2"
            geometry={nodes.Cube1559_2.geometry}
            material={materials["Metal.050"]}
          />
        </group>
        <mesh
          receiveShadow
          castShadow
          name="gateLargeWide_teamBlue"
          geometry={nodes.gateLargeWide_teamBlue.geometry}
          material={materials["Blue.020"]}
          position={[-20.325, -0.249, -28.42]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          receiveShadow
          castShadow
          name="gateLargeWide_teamYellow"
          geometry={nodes.gateLargeWide_teamYellow.geometry}
          material={materials["Yellow.024"]}
          position={[-35.697, -0.141, -27.933]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          receiveShadow
          castShadow
          name="plantA_forest"
          geometry={nodes.plantA_forest.geometry}
          material={materials["Green.008"]}
          position={[-2.077, 0.09, 1.102]}
        />
        <mesh
          receiveShadow
          castShadow
          name="plantB_forest"
          geometry={nodes.plantB_forest.geometry}
          material={materials["Green.009"]}
          position={[2.191, -0.074, -2.562]}
        />
        <mesh
          receiveShadow
          castShadow
          name="rocksB_forest"
          geometry={nodes.rocksB_forest.geometry}
          material={materials["Stone.001"]}
          position={[-0.454, -0.031, 1.748]}
        />
        <group name="tileHigh_forest" position={[-0.077, -1.023, -15.377]}>
          <mesh
            receiveShadow
            castShadow
            name="Cube1600"
            geometry={nodes.Cube1600.geometry}
            material={materials["Green.007"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cube1600_1"
            geometry={nodes.Cube1600_1.geometry}
            material={materials["BrownDark.019"]}
          />
        </group>
        <group name="tileLarge_forest" position={[0.014, -1.023, -0.209]}>
          <mesh
            receiveShadow
            castShadow
            name="Cube1605"
            geometry={nodes.Cube1605.geometry}
            material={materials["Green.001"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cube1605_1"
            geometry={nodes.Cube1605_1.geometry}
            material={materials["BrownDark.004"]}
          />
        </group>
        <group name="tileLarge_teamBlue" position={[-18.017, -1.023, -28.243]}>
          <mesh
            receiveShadow
            castShadow
            name="Cube1606"
            geometry={nodes.Cube1606.geometry}
            material={materials["Blue.001"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cube1606_1"
            geometry={nodes.Cube1606_1.geometry}
            material={materials["Metal.007"]}
          />
        </group>
        <group name="tileLarge_teamRed" position={[0.068, -1.023, -21.648]}>
          <mesh
            receiveShadow
            castShadow
            name="Cube1607"
            geometry={nodes.Cube1607.geometry}
            material={materials["Red.003"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cube1607_1"
            geometry={nodes.Cube1607_1.geometry}
            material={materials["Metal.008"]}
          />
        </group>
        <group name="tileLarge_teamYellow" position={[-37.85, -1.023, -27.665]}>
          <mesh
            receiveShadow
            castShadow
            name="Cube1608"
            geometry={nodes.Cube1608.geometry}
            material={materials["Yellow.004"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cube1608_1"
            geometry={nodes.Cube1608_1.geometry}
            material={materials["Metal.009"]}
          />
        </group>
        <group name="tileLow_forest" position={[-0.145, -1.023, -6.557]}>
          <mesh
            receiveShadow
            castShadow
            name="Cube1610"
            geometry={nodes.Cube1610.geometry}
            material={materials["Green.002"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cube1610_1"
            geometry={nodes.Cube1610_1.geometry}
            material={materials["BrownDark.006"]}
          />
        </group>
        <group name="tileMedium_teamRed" position={[-11.56, -1.023, -27.446]}>
          <mesh
            receiveShadow
            castShadow
            name="Cube1617"
            geometry={nodes.Cube1617.geometry}
            material={materials["Red.005"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cube1617_1"
            geometry={nodes.Cube1617_1.geometry}
            material={materials["Metal.014"]}
          />
        </group>
        <group
          name="tileSlopeLowHigh_teamRed"
          position={[-8.125, -1.023, -25.431]}
        >
          <mesh
            receiveShadow
            castShadow
            name="Cube1622"
            geometry={nodes.Cube1622.geometry}
            material={materials["Red.006"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cube1622_1"
            geometry={nodes.Cube1622_1.geometry}
            material={materials["Metal.017"]}
          />
        </group>
        <group
          name="tileSlopeLowMedium_teamRed"
          position={[-5.44, -1.023, -21.994]}
        >
          <mesh
            receiveShadow
            castShadow
            name="Cube1624"
            geometry={nodes.Cube1624.geometry}
            material={materials["Red.007"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cube1624_1"
            geometry={nodes.Cube1624_1.geometry}
            material={materials["Metal.019"]}
          />
        </group>
        <group
          name="tileSlopeLowMedium_forest"
          position={[-0.118, -1.023, -10.849]}
        >
          <mesh
            receiveShadow
            castShadow
            name="Cube1626"
            geometry={nodes.Cube1626.geometry}
            material={materials["Green.005"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cube1626_1"
            geometry={nodes.Cube1626_1.geometry}
            material={materials["BrownDark.012"]}
          />
        </group>
        <mesh
          receiveShadow
          castShadow
          name="tree_desert"
          geometry={nodes.tree_desert.geometry}
          material={materials.GreenDark}
          position={[1.723, -0.125, 1.288]}
          rotation={[0, 0.473, 0]}
        />
        <group name="tree_forest" position={[-1.828, -0.232, -2.041]}>
          <mesh
            receiveShadow
            castShadow
            name="Cylinder067"
            geometry={nodes.Cylinder067.geometry}
            material={materials["GreenDark.001"]}
          />
          <mesh
            receiveShadow
            castShadow
            name="Cylinder067_1"
            geometry={nodes.Cylinder067_1.geometry}
            material={materials["BrownDark.002"]}
          />
        </group>
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/playground.glb");
