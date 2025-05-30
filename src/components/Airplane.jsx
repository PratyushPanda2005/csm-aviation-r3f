/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Airplane(props) {
  const { nodes, materials } = useGLTF("/models/Airplane.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Airplane1.geometry}
        material={materials.lambert4SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheel4.geometry}
        material={materials.lambert4SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheel3.geometry}
        material={materials.lambert4SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheel6.geometry}
        material={materials.lambert4SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheel5.geometry}
        material={materials.lambert4SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheel2.geometry}
        material={materials.lambert4SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheel1.geometry}
        material={materials.lambert4SG}
      />
    </group>
  );
}

useGLTF.preload("/models/Airplane.glb");
