// src/components/header/navBar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { HeaderProps } from "@/types/header/header";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const NavBar = ({ headerTitle, headerLogo, headerOptions }: HeaderProps) => {
  //useState management
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  //set of variables
  const imageSize = 50;
  const logoUrl = headerLogo[0]?.url;
  const logoName = headerLogo[0]?.name;

  return (
    <div className="p-4 flex justify-between bg-black/40 relative z-50">
      <div className="flex items-center gap-4 w-[50%] ">
        <Image
          src={logoUrl}
          alt={logoName}
          className=""
          width={imageSize}
          height={imageSize}
          priority
        />
        <h1 className="text-white font-bold">{headerTitle.toUpperCase()}</h1>
      </div>
      {/* hamburguer button */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* navBar - visible at desktop*/}
      <nav className="hidden lg:flex gap-6 items-center">
        {headerOptions.map((option, index) => (
          <Link
            key={index}
            href={`#${option.toLowerCase()}`}
            className="font-bebas text-white lg:text-2xl"
          >
            {option.toUpperCase()}
          </Link>
        ))}
      </nav>

      {/* mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-black/60 p-4 flex flex-col gap-4 lg:hidden"
        >
          <div className="absolute top-full left-0 w-full bg-black/60 p-4 flex flex-col gap-4 lg:hidden">
            {headerOptions.map((option, index) => (
              <Link
                key={index}
                href={`#${option.toLowerCase()}`}
                className="text-white font-bebas text-xl"
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {option.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
