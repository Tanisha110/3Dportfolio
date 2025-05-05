"use client"
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";

const Navigation = () => {

    const angleIncrement = 360 / BtnList.length;

    return (
        <div className="w-1/2 fixed h-screen flex items-center justify-center z-50 right-0" style={{
            transform: 'scale(1.0) translateX(-5px)',
        }}>
            <div className="flex items-center justify-center relative hover:pause animate-spin-slow group">
                {
                    BtnList.map((btn, index) => {

                        const angleRad = (index / BtnList.length) * 2 * Math.PI;
                        const radius = 'calc(20vw - 1rem)'; // simplified for readability
                        const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                        const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                        return <NavButton key={btn.label} x={x} y={y} {...btn} />
                    })
                }
            </div>
        </div>
    )
}

export default Navigation;
