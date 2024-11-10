import React from "react";
import Image from "next/image";
import Hero from "../assets/Hero.png";
import HeroS from "../assets/HeroS.png";
import { ArrowRight } from 'lucide-react';

export default function PromoSection() {
  return (
    <section className="flex flex-col xl:flex-row h-auto xl:h-[100vh]">
      <div className="flex flex-col justify-center w-screen xl:w-[58vw] h-[65vh] xl:h-screen  text-section p-12">
        <h1 className="text-3xl xl:text-7xl font-bold text-gray-800 bold">
          MORE THAN JUST <br/> SELLING ONLINE
        </h1>
        <h2 className="text-3xl xl:text-7xl text-gray-500">
          LESS THAN YOU`&apos;`D <br />
          EXPECT TO PAY.
        </h2>
        <p className="text-2xl text-gray-600 my-6">
            Try for free for as long as you like. <br /> No transaction fees.
          </p>
          <button className="flex items-center justify-between bg-yellow-200 text-gray-900 font-medium rounded-full p-6 shadow hover:bg-yellow-300 text-2xl w-80 hover:w-96 ease-in duration-300">
            Get started for free <ArrowRight className="font-4xl" />
          </button>
          <p className="text-gray-600 my-6">No credit card required.</p>
      </div>

      <div className="w-screen h-[40vh] xl:h-screen xl:w-[42vw] relative overflow-hidden xl:overflow-visible bg-neutral-100">
        <Image
          src={Hero}
          alt="Hero Image"
          className="hidden xl:flex absolute -left-1 top-20 translate-x-24 xl:translate-x-20 translate-y-20 xl:translate-y-14 scale-[1.9] xl:scale-[1.6]"
        />
        <Image
          src={HeroS}
          alt="Hero Image"
          className="flex xl:hidden -translate-y-20 scale-[0.8]"
        />
      </div>
    </section>
  );
}
