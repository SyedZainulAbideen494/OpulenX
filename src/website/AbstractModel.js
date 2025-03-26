import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const AbstractModel = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Sphere args={[1, 100, 100]} ref={meshRef} scale={2}>
      <MeshDistortMaterial distort={0.6} speed={2} color="white" />
    </Sphere>
  );
};

export default AbstractModel;
