import React from 'react';
import Link from 'next/link';



function Header() {
  return (
    <header className="bg-slate-100 w-full h-16 sticky top-0 flex items-center justify-between border-b border-slate-200 shadow px-20">

    <div className="logo flex items-center gap-10">
    <a href="#" className="text-2xl font-semibold text-gray-800">Ecwid</a>
    
    
    
        <h1 className="logo flex items-center"></h1>
       
        <ul className="flex gap-10 ">
            <li >Sell</li>
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
        <button className="border-none bg-black text-white px-4 py-1 rounded-md">Get started for Free</button>
    </div>

  </header>
  )
}

export default Header
