"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const Blogs = () => {
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
    <div className='w-full pt-[10px] pb-[20px] flex flex-col items-center relative overflow-hidden'>
        
        <div className='flex flex-col'>
            <h4 className='font-Satoshi font-normal tabPlus:pb-3 text-center text-[18px] mobiles:text-[12px] mobiles:w-[90%] m-auto text-[#aaaaaa] tabPlus:leading-5'>Inside Zen1.</h4>
            <h2 className=' text-center text-[48px] mobiles:text-[30px] leading-none font-light pb-2 text-[#eaeaea] tracking-tight font-host-grotesk'>Insights & Stories</h2>
        </div>
        <div className='w-[85%] flex gap-5 py-9 mobiles:flex-col'>
            <Link href="/blogs" className='h-[full] w-full rounded-[15px] p-4 flex flex-col gap-3 border-[1px] border-[#1a1a1a] bg-[#000000] cursor-pointer'>
                <img className='rounded-[10px]' src="/blog1.jpg" alt="" />
                <h6 className='font-Satoshi text-[18px] text-[#eaeaea]'>The Role of Product Analytics in enhancing UX</h6>
                <p className='font-Satoshi text-[12px] text-[#aaaaaa]'>Apr 8, 2022</p>
            </Link>
            <Link href="/blogs" className='h-[full] w-full rounded-[15px] p-4 flex flex-col gap-3 border-[1px] border-[#1a1a1a] bg-[#000000] cursor-pointer'>
                <img className='rounded-[10px]' src="/blog2.jpg" alt="" />
                <h6 className='font-Satoshi text-[18px] text-[#eaeaea]'>How to Implement Product Analytics Strategy</h6>
                <p className='font-Satoshi text-[12px] text-[#aaaaaa]'>Mar 15, 2022</p>
            </Link>
            <Link href="/blogs" className='h-[full] w-full rounded-[15px] p-4 flex flex-col gap-3 border-[1px] border-[#1a1a1a] bg-[#000000] cursor-pointer'>
                <img className='rounded-[10px]' src="/blog3.jpg" alt="" />
                <h6 className='font-Satoshi text-[18px] text-[#eaeaea]'>Unveiling Insights for Better Decision-Making</h6>
                <p className='font-Satoshi text-[12px] text-[#aaaaaa]'>Apr 8, 2022</p>
            </Link>
        </div>
        
        <div className='w-[80%] bg-[#101010] border-[1px] border-[#1a1a1a] flex justify-between items-center px-28 py-[50px] rounded-[12px] mobiles:flex-col mobiles:w-full mobiles:px-1 mobiles:gap-5'>
            <div className='flex flex-col mobiles:w-full items-center'>
                <h3 className='text-[24px] text-[#eaeaea] font-host-grotesk'>Subscribe to our list</h3>
                <span className='text-[14px] text-[#aaaaaa] font-Satoshi font-medium'>Stay up to date with the industry trends.</span>
                <span className='text-[14px] text-[#aaaaaa] font-Satoshi font-medium'>Don’t worry we won’t spam.</span>
            </div>

            <div className='inputBox flex w-[50%] h-[64px] py-2 pl-2 pr-2 flex-col items-start gap-[10px] bg-[#0c0c0c] border-[1px] rounded-[10px] border-[#1a1a1a] mobiles:w-[90%] mobiles:h-full mobiles:p-1 '>
                <form onSubmit={handleSubmit} className='innerBox w-[100%] h-full flex items-center mobiles:flex-col mobiles:gap-3 '>
                    <input id="email" type='email' className='bg-[#0c0c0c] text-[#999999] w-[100%] mobiles:p-2 mobiles:border-[1px] mobiles:border-[#1a1a1a] mobiles:rounded-[10px] h-full font-Satoshi placeholder-[#999999] pl-5 placeholder:font-light text-[14px] focus:outline-none' placeholder='Enter Your Email' />
                    
                    <button type="submit" className='text-[#ffffff] font-semibold bg-[#6353ff] px-8 py-3 rounded-[10px] mobiles:w-full hover:bg-[#333333d9] transition-all duration-300'>
                        Subscribe
                    </button>
                    
                </form>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

        </div>
    </div>
  )
}

export default Blogs