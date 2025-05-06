import React from "react";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const BottomCredit = () => {
  return (
    <div className="w-full text-center text-xs py-3 text-foreground bg-background/20 backdrop-blur-sm fixed bottom-0 z-40">
      <div>
      © 2025 Tanisha Sonkar • This site is currently under development. Some features may not be fully optimized for mobile devices yet.
      </div>
    </div>
  );
};

export default BottomCredit;
