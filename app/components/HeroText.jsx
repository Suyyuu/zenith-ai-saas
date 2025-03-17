"use client"

import React, { useEffect, useState } from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineCalendarToday } from "react-icons/md";
import HeroImage from './HeroImage';
import Link from 'next/link';
import BlurReveal from './BlurRevealText';
import { motion } from 'framer-motion';

const HeroText = () => {
  const [isSet, setIsSet] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setIsSet(true);
    }, 10);

    return () => clearTimeout(timer2);
  })

  return (
    <>
      <div className="center w-[100%] h-full flex flex-col items-center gap-4 pt-[180px] mobiles:pt-32 pb-9 mobiles:pb-0">

          <motion.button className='text-[#8a8a8a] text-xs font-semibold px-5 py-2 rounded-full flex items-center gap-3 btnHoverEffect font-host-grotesk tracking-tight shadow-[0_0_0_1px_rgba(235,235,235,0.15)]'
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{
              opacity: isSet ? 1 : 0,
              filter: isSet ? 'blur(0)' : 'blur(20px)'
            }}
            transition={{
              opacity: { duration: .5 },
              filter: { duration: .5},
            }}
          
          >Product Update v1.2 <IoChevronForwardOutline className='text-base font-semibold'/></motion.button>

          <div className="heroText mobiles:w-[70%] mobiles:text-center flex flex-col items-center">
            <BlurReveal className="text-center">
            <h1 className=' tabPlus:text-[64px] text-[36px] leading-none font-host-grotesk font-light text-[#f4f4f4] tracking-tight heroLine '>Centralize & Unite Your Team</h1>
            <h1 className=' tabPlus:text-[64px] text-[36px] leading-none font-host-grotesk font-light tracking-tight pb-2 bg-gradient-to-r from-[#5653ff] to-orange-500 bg-clip-text text-transparent'>Amplify Your Productivity</h1>
            <p className='font-Satoshi font-normal text-center tabPlus:text-lg text-[12px] text-[#ebebebcc]'> A single platform for project management, team collaboration, product analysis, and scaling</p>
            </BlurReveal>
            {/* Buttons Start From Here */}

            <motion.div className='mt-5 flex mobiles:flex-col items-center gap-3'
            initial={{ opacity: 0, y: 10, filter: 'blur(20px)' }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              y: isLoaded ? 0 : 10,
              filter: isLoaded ? 'blur(0)' : 'blur(20px)'
            }}
            transition={{
              opacity: { duration: 1 },
              y: { duration: .5 }
            }}
            >

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

            </motion.div>

          </div>

          {/* Image Start Here */} 
          <HeroImage />       
      </div>
      
    </>
  )
}

export default HeroText