"use client";
import React, { useEffect, useState } from "react";

const createStar = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 15}s` 
});

const Starsbg = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const addStarsPeriodically = () => {
      setStars((prev) => {
        if (prev.length >= 25) return prev;
        return [...prev, createStar()];
      });
    };

    const interval = setInterval(addStarsPeriodically, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white w-[2px] h-[2px]"
          style={{
            top: star.top,
            left: star.left,
            animation: `move ${star.animationDuration} infinite alternate`
          }}
        />
      ))}
    </div>
  );
};

export default Starsbg;
