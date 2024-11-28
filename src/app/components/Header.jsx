"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-white w-screen h-16 sticky top-0 flex items-center justify-between gap-10 px-8 xl:px-20 z-[1000]">
      <Link href="#" className="flex items-center">
        <Image
          src={logo}
          alt="ecwid-Logo"
          height={100}
          width={100}
          className="h-auto w-20"
        />
      </Link>

      <button className="flex xl:hidden" onClick={mobileNav}>
        <Hamburger />
      </button>

      {isOpen && (
        <div className={`absolute top-16 right-0 h-screen w-3/4 bg-white shadow-md z-[999] transform transition-transform duration-600 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
          <ul className="flex flex-col p-8 text-neutral-600">
            <li className="border-b-2 border-neutral-200 py-4">Sell</li>
            <li className="border-b-2 border-neutral-200 py-4">Simplify</li>
            <li className="border-b-2 border-neutral-200 py-4">Grow</li>
            <li className="border-b-2 border-neutral-200 py-4">Resources</li>
            <li className="border-b-2 border-neutral-200 py-4">Pricing</li>
          </ul>

          <div className="flex flex-col items-center gap-2 w-full">
            <button className="border-none bg-black text-white px-6 py-2 rounded-md">
              Get started for Free
            </button>
            <button className="border-none px-6 py-2">
              Login
            </button>
          </div>
        </div>
      )}

      <div className="w-full hidden xl:flex items-center justify-between">
        <div className="logo flex items-center gap-10">
          <ul className="flex gap-10">
            <li>Sell</li>
            <li>Simplify</li>
            <li>Grow</li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <ul className="flex gap-10">
            <li>Resources</li>
            <li>Pricing</li>
            <li>login</li>
          </ul>
          <span className="h-8 bg-grey border-l-2 border-neutral-300"></span>
          <button className="border-none bg-black text-white px-4 py-1 rounded-md">
            Get started for Free
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
