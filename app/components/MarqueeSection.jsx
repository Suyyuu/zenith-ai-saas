"use client"

import React from 'react'
import MarqueeCard from './MarqueeCard'
import { motion } from 'framer-motion'
import MarqueeCard2 from './MarqueeCard2'


const MarqueeSection = () => {
  return (
    <div id='testimonials' className='w-full pt-[40px] flex flex-col'>
        <div className="w-full h-full flex md:flex-row justify-center mobiles:text-center text-center">
            <h1 className="text-[48px] mobiles:text-[30px] leading-tight font-light pb-2 text-[#f4f4f4] tracking-tight font-host-grotesk">
                Data Insights Loved by<br/>over <span className='text-[48px] mobiles:text-[30px] leading-none font-host-grotesk font-light pb-2 tracking-tight bg-gradient-to-r from-[#5653ff] via-[#1f037d] to-[#f97316] bg-clip-text text-transparent'>500+ Top Brands</span>
            </h1>
        </div>

        {/* [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] */}

        <div className='w-full h-full overflow-hidden relative py-24 flex flex-col gap-5 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]'>
          <div className='flex gap-5 overflow-hidden'>
            <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className='h-full flex flex-shrink-0 gap-5 antialiased'>
                <MarqueeCard />
            </motion.div>
            <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className='h-full flex flex-shrink-0 gap-5 antialiased'>
                <MarqueeCard />
            </motion.div>
          </div>

          <div className='flex gap-5 overflow-hidden'>
            <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className='h-full flex flex-shrink-0 gap-5 antialiased'>
                <MarqueeCard2 />
            </motion.div>
            <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className='h-full flex flex-shrink-0 gap-5 antialiased'>
                <MarqueeCard2 />
            </motion.div>
          </div>
          
        </div>
        
        
    </div>
  )
}

export default MarqueeSection