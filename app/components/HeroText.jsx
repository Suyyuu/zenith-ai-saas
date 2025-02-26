import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineCalendarToday } from "react-icons/md";
import HeroImage from './HeroImage';
import Link from 'next/link';
import BlurReveal from './BlurRevealText';

const HeroText = () => {
  return (
    <>
      <div className="center w-[100%] h-full flex flex-col items-center gap-4 pt-[180px] mobiles:pt-32 pb-9 mobiles:pb-0">

          <button className='text-[#8a8a8a] text-xs font-semibold px-5 py-2 rounded-full flex items-center gap-3 btnHoverEffect font-host-grotesk tracking-tight shadow-[0_0_0_1px_rgba(235,235,235,0.15)]'>Product Update v1.2 <IoChevronForwardOutline className='text-base font-semibold'/></button>

          <div className="heroText mobiles:w-[70%] mobiles:text-center flex flex-col items-center">
            <BlurReveal className="text-center">
            <h1 className=' tabPlus:text-[64px] text-[36px] leading-none font-host-grotesk font-light text-[#f4f4f4] tracking-tight heroLine '>Unlock Product Insights</h1>
            <h1 className=' tabPlus:text-[64px] text-[36px] leading-none font-host-grotesk font-light tracking-tight pb-2 bg-gradient-to-r from-[#5653ff] to-orange-500 bg-clip-text text-transparent'>Make Better Decisions</h1>
            <p className='font-Satoshi font-normal text-center tabPlus:text-lg text-[12px] text-[#ebebebcc]'>Transform Your Data into Meaningful Insights with AI-Driven Analytics.</p>
            </BlurReveal>
            {/* Buttons Start From Here */}

            <div className='mt-5 flex mobiles:flex-col items-center gap-3'>

              <Link href="#about" className=' button group bg-[#5653ff] text-base mobiles:text-[12px] font-Satoshi font-medium px-10 py-3 rounded-full text-[#dadada] before:bg-[#f4f4f4] flex items-center'>
                <span className="transition-transform transform group-hover:-translate-x-3 duration-500">
                  Know More
                </span>
                <IoIosArrowRoundForward size={30} className='absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'/> 
              </Link>

              <Link href="/pricing" className=' button group outline outline-[.1px] outline-[#8a8a8a] text-base mobiles:text-[12px] font-Satoshi font-medium px-10 mobiles:px-9 py-3 rounded-full text-[#dadada] before:bg-[#f4f4f4] flex items-center'>
                <span className="transition-transform transform group-hover:-translate-x-3 duration-500">
                  Try It Free
                </span>
                <MdOutlineCalendarToday size={18} className='absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200' /> 
              </Link>

            </div>

          </div>

          {/* Image Start Here */} 
          <HeroImage />       
      </div>
      
    </>
  )
}

export default HeroText