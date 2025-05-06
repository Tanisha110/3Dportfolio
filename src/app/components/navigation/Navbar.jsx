"use client";

import React, { useState } from "react";
import {
  Home,
  Linkedin,
  User,
  Phone,
  Github,
  NotebookText,
  Palette,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { icon: <Home className="w-6 h-6" />, label: "Home", link: "/" },
  { icon: <User className="w-6 h-6" />, label: "About", link: "/about" },
  { icon: <Palette className="w-6 h-6" />, label: "Projects", link: "/projects" },
  { icon: <NotebookText className="w-6 h-6" />, label: "Resume", link: "/resume.pdf", newTab: true },
  { icon: <Github className="w-6 h-6" />, label: "GitHub", link: "https://github.com/Tanisha110", newTab: true },
  { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", link: "https://www.linkedin.com/in/tanisha-sonkar-19a489289", newTab: true },
  { icon: <Phone className="w-6 h-6" />, label: "Contact", link: "/contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop & Mobile Top Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/30 backdrop-blur-md flex justify-around px-4 py-3 md:flex">
        {/* Desktop nav: visible on md+ */}
        <div className="hidden md:flex w-full justify-around">
          {navItems.map(({ icon, label, link, newTab }, idx) => (
            <Link
              key={idx}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="flex flex-col items-center justify-center text-foreground hover:text-accent transition-colors duration-200"
            >
              {icon}
              <span className="text-xs mt-1">{label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <div className="flex w-full justify-end md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-background/30 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden shadow-lg pt-16 px-6`}
      >
        {navItems.map(({ icon, label, link, newTab }, idx) => (
          <Link
            key={idx}
            href={link}
            target={newTab ? "_blank" : "_self"}
            className="flex items-center space-x-3 py-3 text-foreground hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavBar;
