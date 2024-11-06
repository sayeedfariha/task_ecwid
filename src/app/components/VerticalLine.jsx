'use client'
import React from "react";
import { Marquee } from 'dynamic-marquee-react';
import Link from "next/link";

const brands = [
  { name: "MARSEMELLO", imgSrc: "/images/marsemello.png" },
  { name: "Stipe", imgSrc: "/images/stipe.png" },
  { name: "ShipStation", imgSrc: "/images/shipstation.png" },
  { name: "Omnisend", imgSrc: "/images/omnisend.png" },
  { name: "Kliken", imgSrc: "/images/kliken.png" },
  { name: "PRINTFUL", imgSrc: "/images/printful.png" },
  { name: "Square", imgSrc: "/images/square.png" },
  { name: "INTUIT QUICKBOOKS", imgSrc: "/images/quickbooks.png" },
  { name: "PayPal", imgSrc: "/images/paypal.png" }
];

const VerticalLine = () => {
  return (
    <section className="bg-gradient-to-r from-[#e8d1f1] via-[#d1cbd1] to-[#eee1c4f3] text-center py-20 px-30 ">
      <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-left">
        Best partners by your side
      </h2>

      <div className=" w-full  mx-auto ">
        <Marquee upDown>
        
          {brands.map((partner, index) => (
            <div key={index} className="text-center m-4">
              {/* <img
                src={partner.imgSrc}
                alt={partner.name}
                className="h-16 w-auto mx-auto"
              /> */}
              <h1 className="text-xl font-medium text-gray-500 mt-2 mx-6">
                {partner.name}
              </h1>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default VerticalLine;
