"use client"
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import clsx from "clsx";
import { Environment } from "@react-three/drei";

const RenderModel = ({children, className}) => {

    return (
       <Canvas
       className={clsx("w-screen h-screen -z-80 relative", className)}
       >
         <Suspense fallback={null}>
            {children}
         </Suspense>
         <Environment preset="dawn"/>
       </Canvas>
    )
}

export default RenderModel