'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Uranus(props) {
  const { nodes, materials } = useGLTF('models/uranus-transformed.glb');
  const groupRef = useRef();

  // Mobile-responsive scale state
  const [scale, setScale] = useState(0.004); // default for desktop

  useEffect(() => {
    const updateScale = () => {
      const isMobile = window.innerWidth < 768;
      setScale(isMobile ? 0.0030 : 0.004);
    };

    updateScale(); // set initial scale
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Rotation animation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.01;
    }
  });

  return (
    <group {...props} ref={groupRef} dispose={null} scale={0.004}>
      <mesh
        name="0"
        castShadow
        receiveShadow
        geometry={nodes['0'].geometry}
        material={materials.uranus1_A}
        rotation={[Math.PI / 2, -1.435, -Math.PI]}
        scale={0.01}
      />
      <mesh
        name="uranus2_A_uranus2_A_0"
        castShadow
        receiveShadow
        geometry={nodes.uranus2_A_uranus2_A_0.geometry}
        material={materials.uranus2_A}
        position={[0, -0.001, 0]}
        rotation={[Math.PI / 2, -1.435, -Math.PI]}
        scale={0.006}
      />
      <mesh
        name="uranus2_A_uranus2_B_0"
        castShadow
        receiveShadow
        geometry={nodes.uranus2_A_uranus2_B_0.geometry}
        material={materials.uranus2_B}
        position={[0, -0.001, 0]}
        rotation={[Math.PI / 2, -1.435, -Math.PI]}
        scale={0.006}
      />
      <mesh
        name="miranda_miranda_0"
        castShadow
        receiveShadow
        geometry={nodes.miranda_miranda_0.geometry}
        material={materials.miranda}
        position={[115.917, 546.628, 2532.998]}
        rotation={[2.418, 1.52, -2.631]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload('models/uranus-transformed.glb');
