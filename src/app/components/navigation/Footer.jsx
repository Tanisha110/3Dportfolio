import React from "react";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const BottomCredit = () => {
  return (
    <div className="w-full text-center text-xs py-3 text-foreground bg-background/20 backdrop-blur-sm fixed bottom-0 z-40">
      <div>
        © Tanisha 2025. All rights reserved.
      </div>
    </div>
  );
};

export default BottomCredit;
