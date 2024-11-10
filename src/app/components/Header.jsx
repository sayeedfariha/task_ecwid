"use client";
import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import Hamburger from "hamburger-react";

function Header() {
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

      <div className="flex xl:hidden">
        <Hamburger/>
      </div>
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
