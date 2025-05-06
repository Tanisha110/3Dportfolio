"use client";
import React from "react";
import Link from "next/link";

const LeftIntroSec = () => {
  return (
    <div className="w-full md:w-[55%] h-screen flex flex-col justify-center items-start px-6 md:px-16 z-10">
      {/* Heading */}
      <h1 className="text-4xl md:text-7xl font-medium uppercase special-gothic text-white mb-4 md:mb-6">
        Portfolio.
      </h1>

      {/* Description */}
      <p className="text-base md:text-lg font-normal bodoni-font text-white max-w-md md:max-w-lg mb-6 md:mb-10">
        Hi, I am Tanisha Sonkar! An aspiring software developer committed to
        creating user-centric applications and contributing to meaningful
        technical innovations.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <Link
          href="/about"
          className="px-6 py-2 md:px-8 md:py-3 bg-[#7573a5] text-white font-medium rounded-xl shadow hover:opacity-50 text-center"
        >
          Know More
        </Link>
        <Link
          href="/contact"
          className="px-6 py-2 md:px-8 md:py-3 bg-white text-black font-medium rounded-xl shadow hover:opacity-50 text-center"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default LeftIntroSec;
