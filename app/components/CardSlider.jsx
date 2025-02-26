'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cards = [
  { id: 1, title: '5x faster to spin up', desc: 'environments via branching', imageSrc: "/slider1.svg" },
  { id: 2, title: '300k+ databases', desc: 'managed by 1 engineer', imageSrc: "/slider2.svg" },
  { id: 3, title: 'Seamless Integration', desc: 'across multiple platforms', imageSrc: "/slider3.svg" },
  { id: 4, title: 'AI-powered insights', desc: 'for data-driven decisions that drive growth', imageSrc: "/slider4.svg" },
];

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % cards.length;
          setActiveIndex(newIndex);
          return newIndex;
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    if (index !== currentIndex) {
      isAnimatingRef.current = true;
      setCurrentIndex(index);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      isAnimatingRef.current = false;
    }, 700);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      let newIndex = currentIndex;
      if (diff > 50) {
        newIndex = (currentIndex + 1) % cards.length;
      } else if (diff < -50) {
        newIndex = (currentIndex - 1 + cards.length) % cards.length;
      }
      if (newIndex !== currentIndex) {
        isAnimatingRef.current = true;
        setCurrentIndex(newIndex);
        setActiveIndex(newIndex);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative w-full max-w-2xl mx-auto overflow-hidden -left-2 py-6 [mask-image:linear-gradient(to_right,white_20%,white_70%,transparent)]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="flex px-2 gap-4 transition-transform duration-700" 
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
      >
        {cards.map((card) => (
          <motion.div key={card.id} 
            className="sliderCard outline outline-[0.5px] outline-[#242628] hover:outline-[#6353ff80] 
            w-[calc(50%-8px)] min-w-[calc(50%-8px)] bg-[#0a0a0c] p-5 rounded-lg shadow-lg transition-opacity 
            opacity-100 cursor-pointer flex flex-col gap-10 justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className=" text-[20px] text-white font-semibold">
              {card.title} <span className="text-[#94979e] text-[20px]">{card.desc}</span>
            </p>
            <img src={card.imageSrc} alt={card.desc} className="w-fit h-6 object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-0 left-2 flex space-x-2 mt-4">
        {cards.map((_, index) => (
          <motion.div key={index} 
            className="h-[3px] w-[59px] bg-[#18191b] rounded-full cursor-pointer overflow-hidden"
            onClick={() => handleIndicatorClick(index)}
          >
            <motion.div 
              className="h-full bg-[#242628]"
              initial={{ width: '0%' }}
              animate={index === activeIndex ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: index === activeIndex ? 4 : 0, ease: 'linear' }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
