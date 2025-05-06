"use client"
import React from "react";
import Link from "next/link";
import { X } from "lucide-react";

const LeftIntroSec = () => {
  return (
    <div className="w-[55%] h-screen flex flex-col justify-center items-start px-16 z-10">
      {/* Heading */}
      <h1 className="text-7xl font-medium uppercase special-gothic text-white mb-6">
  Portfolio.
</h1>

      {/* Description */}
      <p className="text-lg font-normal bodoni-font text-white max-w-lg mb-10">
        Hi, I am Tanisha Sonkar! An aspiring software developer committed to creating user-centric applications and contributing to meaningful technical innovations.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <Link
          href="/about"
          className="px-8 py-3 bg-[#7573a5] text-white font-medium rounded-xl shadow hover:opacity-50"
        >
          Know More
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-black font-medium rounded-xl shadow hover:opacity-50"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default LeftIntroSec;
