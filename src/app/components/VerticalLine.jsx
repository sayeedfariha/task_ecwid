'use client'
import React from "react";
import { Marquee } from 'dynamic-marquee-react';

const brands = [
  { alt: "PayPal", imgSrc: "/assets/PayPal.png" },
  { alt: "Square", imgSrc: "/assets/Square.png" },
  { alt: "Stripe", imgSrc: "/assets/Stripe.png" },
  { alt: "Quickbooks ", imgSrc: "/assets/Quickbooks.png" },
  { alt: "Shipstation", imgSrc: "/assets/Shipstation.png" },
  { alt: "Kliken", imgSrc: "/assets/Kliken.png" },
  { alt: "Printful", imgSrc: "/assets/Printful.png" },
  { alt: "Marsello", imgSrc: "/assets/Marsello.png" },
  { alt: "Ominsend", imgSrc: "/assets/Ominsend.png" },
];

const VerticalLine = () => {
  return (
    <section className="bg-gradient-to-r from-[#e8d1f1] via-[#d1cbd1] to-[#eee1c4f3] text-center py-10 px-30 ">
      <h2 className="text-4xl text-gray-800 text-left p-8">
        Best partners by your side
      </h2>

      <div className=" w-full  mx-auto ">
        <Marquee rate={75}>
        
          {brands.map((partner, index) => (
            <div key={index} className="text-center m-4">
              <img
                src={partner.imgSrc}
                alt={partner.name}
                className="h-20 w-auto mx-4"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default VerticalLine;
