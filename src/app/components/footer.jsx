import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/ecwid-logo.png';
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row ">
       
        <div className="flex-shrink-0 ">
          <Link href="/" className="flex items-center mb-6">
            <Image 
            src={logo} 
            alt="Ecwid Logo" 
            width={100} height={100} />
            <span className=" text-lg font-semibold text-gray-800 "></span>
          </Link>
          <ul className="space-y-4 text-gray-600 ">
            <li><Link href="#">Sell online</Link></li>
            <li><Link href="#">Business solutions</Link></li>
            <li><Link href="#">Technology solutions</Link></li>
            <li><Link href="#">For individuals</Link></li>
            <li><Link href="#">Ecwid</Link></li>
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Resources</Link></li>
            <li><Link href="#">Latest blog</Link></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:ml-16 border-t">
     
          <div>
            <h6 className="font-serif text-gray-400 mb-8 gap-8  text-center text-6xl">Sell online</h6>
            <ul className="space-y-2 text-gray-600">
              <li className='text-gray-400'><Link href="https://www.ecwid.com/sell">Sell Everywhere</Link></li>
              <li className='text-gray-400' ><Link href="https://www.ecwid.com/website">Sell on Website</Link></li>
              <li className='text-gray-400'><Link href="https://www.ecwid.com/social-selling">Sell on Social Media</Link></li>
              <li className='text-gray-400'><Link href="https://www.ecwid.com/instagram">Sell on Instagram</Link></li>
              <li className='text-gray-400'><Link href="https://www.ecwid.com/tiktok">Sell on TikTok</Link></li>
            </ul>
          </div>

          <div>
            
            <ul className="space-y-2 text-gray-600 ">
              <li className='text-gray-400'><Link href="https://www.ecwid.com/facebook">Sell on Facebook</Link></li>
              <li className='text-gray-400'><Link href="https://www.ecwid.com/google">Sell on Google</Link></li>
              <li className='text-gray-400'><Link href="https://www.ecwid.com/marketplaces">Sell on Marketplaces</Link></li>
              <li className='text-gray-400'><Link href="https://www.ecwid.com/whatsapp">Sell on WhatsApp</Link></li>
              <li className='text-gray-400'><Link href="https://www.ecwid.com/pinterest">Sell on Pinterest</Link></li>
            </ul>
          </div>

          <div>
            
            <ul className="space-y-2 text-gray-600">
              <li className='text-gray-400'><Link href="https://www.ecwid.com/snapchat">Sell on Snapchat</Link></li>
              <li className='text-gray-400'><Link href="https://www.ecwid.com/youtube">Sell on YouTube</Link></li>
              <li className='text-gray-400'><Link href="https://www.ecwid.com/mobile">Sell on Mobile (ShopApp)</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" mx-auto mt-10 flex flex-col lg:flex-row items-end justify-between  border-gray-300 pt-8">
        <div className="flex">
        <FaFacebook />

        </div>

      </div>
    </div>
  );
}

