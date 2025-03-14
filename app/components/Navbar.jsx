"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import FlyoutMenu from "./FlyoutMenu";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY,"change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 90) {
      setHidden(true);
    } else if (latest < 90) {
      setHidden(false)
    }
  });

  return (
    <>
      <motion.div 
      initial= { false }
      variants= {{
        visible: { x: "-50%", y: "0" },
        hidden : { y: "-150%", x: "-50%" },
      }} 
      animate={hidden ? "hidden" : "visible"}
      transition={{duration:0.35, ease: "easeInOut"}}
      className="fixed h-auto w-[85%] custom:w-full top-[34px] left-1/2 -translate-x-[50%] px-3 py-3 flex justify-between items-center z-[1000000] ">
        <div className="flex items-center justify-between gap-10 custom:gap-2">
          <a href="/">
            <img className="w-32 h-auto" src="/logo3.png" alt="Zen AI Logo" />
          </a>

          <FlyoutMenu />
          
        </div>
        
        <div className="tabPlus:flex items-center gap-2 hidden">
          <button className="px-2 py-2 text-[#8a8a8a] flex items-center gap-2 custom:hidden hover:text-[#ffffff]">
            <FaGithub className="text-[20px]" />
            <span className="text-[16px] ">9.81K</span>
          </button>

          <Link href="/signUp" className=" button text-[16px] px-[10px] py-[6px] outline outline-[.1px] outline-[#8a8a8a] rounded-xl font-host-grotesk text-[#dadada] before:bg-[#f4f4f4] ">Get Started</Link>
        </div>

        
        <IoMenu className="text-2xl text-[#ffffff] tabPlus:hidden border-2 border-red-500" />
        

      </motion.div>
      
    </>
  );
};

export default Navbar;