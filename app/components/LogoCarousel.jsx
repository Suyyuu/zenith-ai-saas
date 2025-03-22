'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const logos = [
  '/c19.svg', '/c2.svg', '/c3.svg', '/c4.svg', 
  '/c5.svg', '/c6.svg', '/c7.svg', '/c8.svg', 
  '/c9.svg', '/c10.svg', '/c11.svg', '/c12.svg', 
  '/c13.svg', '/c14.svg', '/c15.svg', '/c16.svg', 
  '/c17.svg', '/c18.svg'
];

const LogoCarousel = () => {
  const [currentLogos, setCurrentLogos] = useState(logos.slice(0, 6));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogos((prev) => {
        const nextIndex = (logos.indexOf(prev[0]) + 6) % logos.length;
        return logos.slice(nextIndex, nextIndex + 6);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[200px] flex justify-center items-center pointer-events-none">
      <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-1">
        {currentLogos.map((logo, index) => (
          <div key={index} className="relative w-auto h-auto">
            <AnimatePresence>
              <motion.div
                key={logo}
                className="absolute inset-0 flex justify-center items-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  filter: 'blur(0)',
                  transition: { duration: 0.5 },
                }}
                exit={{
                  scale: 0,
                  opacity: 1,
                  filter: 'blur(15px)',
                  transition: { duration: .5 },
                }}
              >
                <Image
                  src={logo}
                  alt="Logo"
                  layout="intrinsic"
                  width={140} 
                  height={140} 
                  className='mobiles:h-[90px] mobiles:w-[90px]'
                />
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
