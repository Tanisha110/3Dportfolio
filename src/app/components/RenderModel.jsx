"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";

export default function RenderModel({ children }) {
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        {children}
        <Environment preset="dawn" />
      </Canvas>
    </Suspense>
  );
}

