"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Authentication = () => {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    const email = document.getElementById('email');
    setError("");

    if (!email.validity.valid || email.value.trim() === "") {
      setError("Please enter a valid email address.");
      email.focus();
      event.preventDefault();
    }
  };
  return (
    <div className=" w-[100%] h-screen flex items-center">
      <div className='authImage w-[560px] custom:w-[400px] h-full border-r border-r-[#252525]  mobiles:hidden'>
        <h3 className='text-[36px] custom:text-[24px] custom:leading-7 text-[#dedede] font-host-grotesk font-bold w-[375px] custom:w-[210] h-full ml-[150px] flex items-center py-[20px] tracking-normal leading-[45px]'>Scale faster with AI <br />Try it risk-free today.</h3>
      </div>

      <div className='bg-[#0a0a0a] w-full h-full relative flex justify-center items-center '>

        <Link className='absolute top-5 right-5' href="/">
          <button className=' button group bg-[Transparent] outline outline-[1px] outline-[#4e4e4e5f] text-base mobiles:text-[12px] font-Satoshi font-semibold px-8 py-2 rounded-full text-[#dadada] before:bg-[#f4f4f4] flex items-center'>
            <span className="transition-transform transform group-hover:-translate-x-3 duration-500">
              Home
            </span>
            <IoIosArrowRoundBack size={30} className='absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'/> 
          </button>
        </Link>

        <div className=' absolute text-[#95979e] flex gap-2 bottom-10 '>
          <span className='hover:text-[#e5e5e7] cursor-pointer'>Terms of use</span>
          <span className='cursor-default'>|</span>
          <span className='hover:text-[#e5e5e7] cursor-pointer'>Privacy policy</span>
        </div>

        <div className='authCard p-10 w-[500px] h-[500px] custom2:w-full flex flex-col justify-around rounded-[15px] outline outline-[0.5px] outline-[#4e4e4e5f]'>
          <h3 className='text-[34px] text-[#ffffff] font-semibold font-host-grotesk mobiles:text-[24px]'>Create new account</h3>
        
          <div className='w-full flex flex-col'>
            <p className='text-[#ffffff] text-[16px] font-Satoshi pb-2 mobiles:text-[14px]'>Email</p>
            <form onSubmit={handleSubmit} className=' w-[100%] h-full flex flex-col gap-5 items-center mobiles:flex-col mobiles:gap-5 '>
                <input id="email" type='email' className='bg-[#0c0c0c] text-[#999999] rounded-[4px] py-5 outline outline-[1px] outline-[#232323] w-[100%] mobiles:p-2 mobiles:border-[1px] mobiles:border-[#1a1a1a] h-full font-Satoshi placeholder-[#999999] pl-5 placeholder:font-light text-[14px] focus:outline-[#ffffff26]' placeholder='name@work-email.com' />

                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                <button type="submit" className='text-[#ffffff] mobiles:text-[14px] font-semibold bg-[#6353ff] w-full px-8 py-3 rounded-full mobiles:w-full hover:bg-[#333333d9] transition-all duration-300'>
                    Create Account
                </button>
                
            </form>

            <div className='w-full h-full flex items-center py-5'>
              <span className='h-[1px] w-full bg-[#ffffff]'></span>
              <h6 className='px-5 text-[#999999]'>OR</h6>
              <span className='h-[1px] w-full bg-[#ffffff]'></span>
            </div>

            <div className='w-full flex justify-between gap-5 mobiles:flex-col'>
              <Link className='flex items-center justify-center text-nowrap gap-3 bg-[#0b0c0e] text-[#ffffff] text-[16px] p-3 outline outline-[1px] outline-[#232323] hover:outline-[#ffffff26] rounded-[4px] font-Satoshi' href="#" > <FaGoogle className='text-[20px] mobiles:text-[18px]' /> <p className='text-[16px] mobiles:text-[14px]'> Sign up with Google </p></Link>
              <Link className='flex items-center justify-center text-nowrap gap-3 bg-[#0b0c0e] text-[#ffffff] text-[16px] p-3 outline outline-[1px] outline-[#232323] hover:outline-[#ffffff26] rounded-[4px] font-Satoshi' href="#" > <FaGithub className='text-[20px] mobiles:text-[18px]' /> <p className='text-[16px] mobiles:text-[14px]'> Sign up with GitHub </p></Link>
            </div>
          </div>
          <p className='text-[#95979e] text-[16px]'>Already have an account? <span className='text-[#e5e5e7] hover:text-[#ffffff] text-[16px] cursor-pointer'>Sign In</span></p>
        </div>

      </div>
    </div>
  )
}

export default Authentication