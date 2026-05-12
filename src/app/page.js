"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import pkalast from "../../public/background/pkalast.png";
import NavBar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import LeftIntroSec from "./components/LeftIntroSec";
import Navigation from "./components/navigation";
import ClientOnly from "./components/ClientOnly";

const Starsbg = dynamic(() => import("./components/Starsbg"), { ssr: false });
const RenderModel = dynamic(() => import("./components/RenderModel"), { ssr: false });
const Uranus = dynamic(
  () => import("./components/models/Uranus").then((m) => m.Uranus),
  { ssr: false }
);

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

function IntroOverlay({ onDone }) {
  useEffect(() => {
    const t = setTimeout(() => {
      onDone();
    }, 1400);

    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="intro-overlay">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="intro-bar"
          style={{ animationDelay: `${i * 0.08}s` }}
        />
      ))}
    </div>
  );
}

const particles = Array.from({ length: 28 }, () => ({
  delay: Math.random() * 6,
  x: Math.random() * 100,
  size: Math.random() * 3 + 1,
}));

export default function Home() {
  const [ready, setReady] = useState(false);
  const handleDone = useCallback(() => setReady(true), []);

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
          /* z-index 1 — below navbar (50) and navigation (40) */
          z-index: 1;
          transition: transform 0.12s ease-out; will-change: transform;
        }

        .particle {
          position: fixed; border-radius: 50%;
          background: var(--accent); opacity: 0;
          animation: drift linear infinite;
          pointer-events: none;
          z-index: 0; /* below everything interactive */
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
          z-index: 2; /* above particles, below everything else */
          opacity: 0.35;
        }
        @keyframes scan { to { top: 100vh; } }

        .intro-overlay {
          position: fixed; inset: 0;
          z-index: 9999; pointer-events: none;
          transition: opacity 0.3s ease;
        }
      
        .intro-bar {
          position: absolute; left: 0; right: 0; height: 20%;
          background: #000814; transform-origin: top center;
          animation: barWipe 0.6s cubic-bezier(.76,0,.24,1) forwards;
        }
        .intro-bar:nth-child(1) { top:  0%; }
        .intro-bar:nth-child(2) { top: 20%; }
        .intro-bar:nth-child(3) { top: 40%; }
        .intro-bar:nth-child(4) { top: 60%; }
        .intro-bar:nth-child(5) { top: 80%; }
        @keyframes barWipe { 0% { transform: scaleY(1); } 100% { transform: scaleY(0); } }

        .page-ready .hero-left   { animation: slideUp   0.9s 0.05s cubic-bezier(.22,1,.36,1) both; }
        .page-ready .hero-right  { animation: slideUp   0.9s 0.2s  cubic-bezier(.22,1,.36,1) both; }
        .page-ready .nav-anim    { animation: slideDown 0.7s 0s    cubic-bezier(.22,1,.36,1) both; }
        .page-ready .footer-anim { animation: slideUp   0.7s 0.3s  cubic-bezier(.22,1,.36,1) both; }
        @keyframes slideUp   { from { opacity:0; transform:translateY(40px);  } to { opacity:1; transform:none; } }
        @keyframes slideDown { from { opacity:0; transform:translateY(-24px); } to { opacity:1; transform:none; } }

        /* Orbit rings — pointer-events off so they never block clicks */
        .orbit-ring {
          position: absolute; inset: -12%; border-radius: 50%;
          border: 1px solid rgba(125,211,252,0.15);
          box-shadow: 0 0 40px rgba(125,211,252,0.08) inset;
          animation: spin 24s linear infinite;
          pointer-events: none; /* ← critical */
          z-index: 0;
        }
        .orbit-ring::before {
          content: ''; position: absolute;
          top: -3px; left: 50%; width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); box-shadow: 0 0 12px var(--accent);
          transform: translateX(-50%);
        }
        .orbit-ring-2 {
          animation-duration: 40s; animation-direction: reverse;
          border-color: rgba(129,140,248,0.12); inset: -24%;
        }
        .orbit-ring-2::before { background: var(--accent2); box-shadow: 0 0 12px var(--accent2); }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Pulse aura — pointer-events off */
        .pulse-aura {
          position: absolute; inset: 0; border-radius: 50%;
          animation: pulseAura 4s ease-in-out infinite;
          pointer-events: none; /* ← critical */
          z-index: 0;
        }
        @keyframes pulseAura {
          0%,100% { box-shadow: 0 0 0   0   rgba(125,211,252,0); }
          50%     { box-shadow: 0 0 80px 20px rgba(125,211,252,0.07); }
        }

        /* Corner brackets — pointer-events off */
        .corner-bracket {
          position: fixed; width: 60px; height: 60px;
          pointer-events: none; /* ← critical */
          z-index: 3; opacity: 0;
          transition: opacity 0.6s ease 1.2s;
        }
        .page-ready .corner-bracket { opacity: 0.4; }
        .corner-bracket::before, .corner-bracket::after {
          content: ''; position: absolute; background: var(--accent);
        }
        .corner-bracket::before { top:0; left:0; width:2px; height:100%; }
        .corner-bracket::after  { top:0; left:0; width:100%; height:2px; }
        .corner-bracket.tr { top:16px; right:16px; transform: rotate(90deg); }
        .corner-bracket.bl { bottom:16px; left:16px; transform: rotate(270deg); }
        .corner-bracket.br { bottom:16px; right:16px; transform: rotate(180deg); }
        .corner-bracket.tl { top:16px; left:16px; }

        .h-rule {
          width: 0; height: 1px;
          background: linear-gradient(90deg, var(--accent), transparent);
          transition: width 1.2s cubic-bezier(.22,1,.36,1) 0.7s;
          pointer-events: none;
        }
        .page-ready .h-rule { width: 100%; }
      `}</style>

      <IntroOverlay onDone={handleDone} />

      <main className={`flex min-h-screen flex-col items-center justify-between relative overflow-x-hidden ${ready ? "page-ready" : ""}`}>

        {/* Corner brackets */}
        <div className="corner-bracket tl" />
        <div className="corner-bracket tr" />
        <div className="corner-bracket bl" />
        <div className="corner-bracket br" />

        {/* Decorative only — pointer-events none, low z */}
        <CursorGlow />
        {particles.map((p, i) => <Particle key={i} {...p} />)}
        <div className="scan-line" />

        {/* Fixed background */}
        <div className="fixed inset-0 z-[-20]">
          <ClientOnly><Starsbg /></ClientOnly>
          <Image src={pkalast} alt="background-image" fill className="object-cover object-center" />
        </div>
        <div className="pointer-events-none fixed inset-0 z-[-1]"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,8,20,0.7) 100%)" }}
        />

        {/* ── NavBar — highest interactive z ── */}
        <div className="nav-anim w-full relative z-50">
          <NavBar />
        </div>

        {/* ── Navigation (floating buttons) — high z, above hero content ── */}
        <div className="hidden lg:block fixed top-1/5 right-1/4 -translate-x-1/3 -translate-y-1/2 z-40">
          <Navigation />
        </div>

        <div className="h-rule w-full" />

        {/* ── Hero layout ── */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between">

          {/* Left text — z-10, below navigation */}
          <div className="hero-left w-full lg:w-[55%] h-[50vh] lg:h-screen flex items-center justify-start z-10">
            <LeftIntroSec />
          </div>

          {/* Right model — z-10, orbit/aura are pointer-events:none so buttons show through */}
          <div className="hero-right w-full lg:w-1/2 h-[50vh] lg:h-screen flex flex-col items-center justify-center relative z-10">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="orbit-ring" />
              <div className="orbit-ring orbit-ring-2" />
              <div className="pulse-aura" />
              <ClientOnly>
                <RenderModel>
                  <Uranus />
                </RenderModel>
              </ClientOnly>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="footer-anim w-full relative z-10">
          <Footer />
        </div>

      </main>
    </>
  );
}