import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/ecwid-logo.png";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import {
  FaBloggerB,
  FaMicrophone,
  FaPinterest,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import AppStore from "../../../public/assets/AppStore.png";
import GooglePlay from "../../../public/assets/GooglePlay.png";

const links = [
  { href: "https://www.ecwid.com/sell", text: "Sell Everywhere" },
  { href: "https://www.ecwid.com/website", text: "Sell on Website" },
  {
    href: "https://www.ecwid.com/social-selling",
    text: "Sell on Social Media",
  },
  { href: "https://www.ecwid.com/instagram", text: "Sell on Instagram" },
  { href: "https://www.ecwid.com/tiktok", text: "Sell on TikTok" },
  { href: "https://www.ecwid.com/facebook", text: "Sell on Facebook" },
  { href: "https://www.ecwid.com/google", text: "Sell on Google" },
  { href: "https://www.ecwid.com/marketplaces", text: "Sell on Marketplaces" },
  { href: "https://www.ecwid.com/whatsapp", text: "Sell on WhatsApp" },
  { href: "https://www.ecwid.com/pinterest", text: "Sell on Pinterest" },
  { href: "https://www.ecwid.com/snapchat", text: "Sell on Snapchat" },
  { href: "https://www.ecwid.com/youtube", text: "Sell on YouTube" },
  { href: "https://www.ecwid.com/mobile", text: "Sell on Mobile (ShopApp)" },
];

export default function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="container flex flex-col lg:flex-row">
        <div className="bg-neutral-300 px-20 py-14">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Ecwid Logo"
              width={200}
              height={200}
              className="w-32 h-auto"
            />
            <span className=" text-lg font-semibold text-gray-800 "></span>
          </Link>
          <ul className="space-y-4 text-gray-600 ">
            <li>
              <Link href="#">Sell online</Link>
            </li>
            <li>
              <Link href="#">Business solutions</Link>
            </li>
            <li>
              <Link href="#">Technology solutions</Link>
            </li>
            <li>
              <Link href="#">For individuals</Link>
            </li>
            <li>
              <Link href="#">Ecwid</Link>
            </li>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Resources</Link>
            </li>
            <li>
              <Link href="#">Latest blog</Link>
            </li>
          </ul>
        </div>

        <div className="hidden xl:flex">
          <div className="flex flex-col items-start p-10">
            <h3 className=" text-gray-500 mb-8 gap-8  text-center text-3xl ">
              Sell online
            </h3>
            <ul
              className="grid grid-cols-3 grid-rows-5 grid-flow-col gap-6 text-gray-500 border-t
            pt-10"
            >
              {links.map((link, index) => (
                <li key={index} className="text-gray-500">
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center xl:items-end border-gray-300 gap-4 w-screen p-12">
        <div className="flex text-2xl gap-4">
          <FaBloggerB />
          <FaMicrophone />
          <FaPinterest />
          <FaFacebook />
          <FaXTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>

        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-end gap-2 w-full">
          <span className="flex items-center relative">
            <input type="text" placeholder="Search" className="w-60 bg-white p-2 rounded-md border-2 border-neutral-400" />
            <IoSearch className="absolute right-3 text-neutral-400 cursor-pointer"/>
          </span>
          <div className="xl flex gap-2">
            <Image src={AppStore} alt="Download" className="w-28 xl:w-40 h-auto" />
            <Image src={GooglePlay} alt="Download" className="w-28 xl:w-40 h-auto" />
          </div>
        </div>

      </div>
    </div>
  );
}
