"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import pkalast from "../../../public/background/pkalast.png";
import NavBar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import Starsbg from "../components/Starsbg";
import RenderModel from "../components/RenderModel";
import Astronaut from "../components/models/Little_mrastronaut";
import AboutDetail from "../components/about";


function Particle({ delay, x, size }) {
  return (
    <span
      className="particle"
      style={{
        left: `${x}%`,
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        animationDuration: `${8 + Math.random() * 12}s`,
      }}
    />
  );
}

function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} className="cursor-glow" />;
}

const particles = Array.from({ length: 28 }, () => ({
  delay: Math.random() * 6,
  x: Math.random() * 100,
  size: Math.random() * 3 + 1,
}));

export default function Home() {
  const [ready, setReady] = useState(false);
  const handleDone = useCallback(() => setReady(true), []);

  // Ref on the outermost scrollable container
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Model animates: slides right + rotates + fades slightly
  const modelX        = useTransform(scrollYProgress, [0, 0.55], ["0%",  "42%"]);
  const modelRotateY  = useTransform(scrollYProgress, [0, 0.55], [0,     28]);
  const modelOpacity  = useTransform(scrollYProgress, [0, 0.45], [1,     0.65]);
  const modelScale    = useTransform(scrollYProgress, [0, 0.55], [1,     0.88]);

  return (
    <>
      <style>{`
        :root {
          --space: #000814;
          --accent: #7dd3fc;
          --accent2: #818cf8;
          --glow: rgba(125,211,252,0.18);
        }

        .cursor-glow {
          position: fixed; top: 0; left: 0;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(125,211,252,0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          transition: transform 0.12s ease-out; will-change: transform;
        }

        .particle {
          position: fixed; border-radius: 50%;
          background: var(--accent); opacity: 0;
          animation: drift linear infinite;
          pointer-events: none;
          z-index: 0;
          box-shadow: 0 0 6px var(--accent);
        }
        @keyframes drift {
          0%   { transform: translateY(110vh) scale(0); opacity: 0; }
          10%  { opacity: 0.6; }
          90%  { opacity: 0.4; }
          100% { transform: translateY(-10vh) scale(1.4); opacity: 0; }
        }

        .scan-line {
          position: fixed; top: -2px; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          animation: scan 6s linear infinite;
          pointer-events: none;
          z-index: 2;
          opacity: 0.35;
        }
        @keyframes scan { to { top: 100vh; } }

        .h-rule {
          width: 0; height: 1px;
          background: linear-gradient(90deg, var(--accent), transparent);
          transition: width 1.2s cubic-bezier(.22,1,.36,1) 0.7s;
          pointer-events: none;
        }
        .page-ready .h-rule { width: 100%; }

        /* Give the 3D model wrapper perspective so rotateY looks 3D */
        .model-perspective {
          perspective: 1200px;
          perspective-origin: center center;
        }
      `}</style>

      <main
        ref={containerRef}
        className={`flex min-h-screen flex-col items-center justify-between relative overflow-x-hidden ${ready ? "page-ready" : ""}`}
      >
        <div className="relative min-h-screen w-screen overflow-x-hidden">
          {/* Decorative — pointer-events none, low z */}
          <CursorGlow />
          {particles.map((p, i) => <Particle key={i} {...p} />)}
          <div className="scan-line" />

          {/* Fixed background */}
          <div className="fixed inset-0 z-[-20]">
            <Starsbg />
            <Image
              src={pkalast}
              alt="background-image"
              layout="fill"
              className="object-cover object-center"
            />
          </div>

          {/* Scrollable content */}
          <div className="relative z-10">
            <NavBar />

            <div className="relative w-full h-screen">

              {/* ── 3D Model — scroll-animated ── */}
              <div className="absolute inset-0 model-perspective">
                <motion.div
                  className="w-full h-full"
                  style={{
                    x: modelX,
                    rotateY: modelRotateY,
                    opacity: modelOpacity,
                    scale: modelScale,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <RenderModel>
                    <Astronaut />
                  </RenderModel>
                </motion.div>
              </div>

              {/* ── Text overlay ── */}
              <div className="absolute w-full top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-0 text-center px-4">
                <motion.h1
                  className="font-bold text-5xl md:text-8xl text-[#7573a5]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  Tanisha Sonkar
                </motion.h1>

                <motion.p
                  className="mt-4 font-light text-foreground text-lg max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  An enthusiastic Electrical Engineering sophomore with a passion for
                  software development, actively expanding my skills in web and app development.
                </motion.p>

                {/* About section */}
                <div className="mt-6 md:mt-10 w-full">
                  <AboutDetail />
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}