import React from 'react'
import Image from 'next/image'
import Hero from '../assets/Hero.png'

export default function PromoSection() {
  return (
    <section className='flex flex-col xl:flex-row h-[100vh]'>

      <div className='w-[58vw] text-section'>
        <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4 p-6 ">
          MORE THAN JUST <br/>
          SELLING ONLINE 
          <br></br>
          </h1>
          <h2 className="text-5xl font-bold text-gray-500 mb-6 p-8">
          LESS THAN YOU'D <br />
          EXPECT TO PAY.
          <p className="text-lg text-gray-600 mb-6">
          Try for free for as long as you like. <br /> No transaction fees.
        </p>
        
        <button className="bg-yellow-200 text-gray-900 font-medium  rounded-3xl p-6 shadow hover:bg-yellow-300 text-2xl">
          Get started for free
        </button>
       
        </h2>
      </div>


      <div className='w-[42vw] bg-neutral-100 relative'>
        <Image src={Hero} alt='Hero Image' className='absolute -left-2 top-20 translate-x-20 translate-y-14 scale-[1.6]'/>
      </div>

    </section>
  )
}
