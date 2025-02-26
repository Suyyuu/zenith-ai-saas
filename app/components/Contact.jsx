"use client"

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import CardSlider from "./CardSlider";

const Contact = () => {
  const [error, setError] = useState("");

    const handleSubmit = (event) => {
      const name = document.getElementById('name');
      setError("");
      const email = document.getElementById('email');
      setError("");

      if (name.value.trim() === "") {
        setError("Please enter your name.");
        name.focus();
        event.preventDefault();
      }
  
      else if (!email.validity.valid || email.value.trim() === "") {
        setError("Please enter a valid email address.");
        email.focus();
        event.preventDefault();
      }
    };
  return (
    <div className="w-[100%] h-full pt-[160px]">
      <div className="max-w-[1216px] mx-auto p-5 flex gap-10 mobiles:flex-col">
        <div className="w-[50%] mobiles:w-full flex flex-col justify-between  pt-8">
          <div className=" flex flex-col max-w-[544px] mobiles:text-center mobiles:mx-auto">
            <h1 className="text-[56px] mobiles:text-[40px] text-[#ffffff] font-host-grotesk tracking-tight leading-none">
              Let's Connect
            </h1>
            <p className="text-[20px] mobiles:text-[16px] text-[#eaeaea] text-pretty font-Satoshi mt-4">
              We're happy to assist you with any questions about our technology,
              pricing plans, custom contract options, and migrations assistance.
            </p>

            <div className="flex items-center text-nowrap gap-3 mt-4 mobiles:flex-wrap mobiles:justify-center">
              <span className="flex items-center gap-2 text-[16px]"><img src="/certi1.svg" alt="" /><p className="text-[#c9cbcf]">SOC 2 <span className="text-[#61646b]">Certified</span></p></span>
              <span className="flex items-center gap-2 text-[16px]"><img src="/certi2.svg" alt="" /><p className="text-[#c9cbcf]">GDPR <span className="text-[#61646b]">Compliant</span></p></span>
              <span className="flex items-center gap-2 text-[16px]"><img src="/certi3.svg" alt="" /><p className="text-[#c9cbcf]">ISO 27001 <span className="text-[#61646b]">Compliant</span></p></span>
            </div>

            <Link href="#" className="meetingMicro mt-4 w-fit mobiles:w-full mobiles:justify-center flex items-center text-[#6353ff] hover:text-[#7e70fd] font-[600]"><p className="text-[18px]">Book a meeting directly</p> <IoIosArrowRoundForward className=" arrowMeeting text-[28px]" /> </Link>
          </div>
          
          <div className="w-full">
            <CardSlider />
          </div>
          
        </div>

        <div className="h-full w-[50%] mobiles:w-full ">
          <form onSubmit={handleSubmit} className="contactForm w-full flex flex-col gap-5 p-7 rounded-[15px] outline outline-1 outline-[#242628] bg-[#0a0a0c]">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-[#e4e5e7]">Your Name *</label>
              <input id="name" autoComplete="name" className='bg-[#0c0c0c] border border-[#242628] focus:border-[#6353ff] p-2 rounded-[5px] text-[#ffffff] w-[100%] mobiles:p-2 mobiles:border-[1px] mobiles:border-[#1a1a1a] mobiles:rounded-[10px] h-full font-Satoshi placeholder-[#61646b] pl-5 placeholder:font-semibold text-[16px] focus:outline-none placeholder:tracking-wide' placeholder='Suyash Kharade' />
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="name" type="text" className="text-[#e4e5e7]">Email *</label>
              <input id="email" autoComplete="email" type='email' className='bg-[#0c0c0c] border border-[#242628] focus:border-[#6353ff] p-2 rounded-[5px] text-[#ffffff] w-[100%] mobiles:p-2 mobiles:border-[1px] mobiles:border-[#1a1a1a] mobiles:rounded-[10px] h-full font-Satoshi placeholder-[#61646b] pl-5 placeholder:font-semibold text-[16px] focus:outline-none placeholder:tracking-wide' placeholder='info@MarkO.com' />
            </div>

            <div className="flex justify-start w-full gap-4 mobiles:flex-col">
              <div className="flex flex-col gap-1 basis-[55%]">
                <label htmlFor="Company Website" className="text-[#e4e5e7]">Company Website</label>
                <input id="website" autoComplete="website" className='bg-[#0c0c0c] border border-[#242628] focus:border-[#6353ff] p-2 rounded-[5px] text-[#ffffff] w-[100%] mobiles:p-2 mobiles:border-[1px] mobiles:border-[#1a1a1a] mobiles:rounded-[10px] h-full font-Satoshi placeholder-[#61646b] pl-5 placeholder:font-semibold text-[16px] focus:outline-none placeholder:tracking-wide' placeholder='https://acme.com' />
              </div>

              <div className="flex flex-col gap-1 flex-grow">
                <label htmlFor="comapany Size" className="text-[#e4e5e7]">Company Size *</label>
                <select 
                  id="companySize"
                  className='bg-[#0c0c0c] border border-[#242628] focus:border-[#6353ff] p-2 rounded-[5px] text-[#ffffff] w-[100%] mobiles:p-2 mobiles:border-[1px] mobiles:border-[#1a1a1a] mobiles:rounded-[10px] h-full font-host-grotesk placeholder-[#61646b] pl-5 placeholder:font-semibold text-[14px] focus:outline-none placeholder:tracking-wide'
                  required
                >
                  <option value=""></option>
                  <option value="1-20">1-19</option>
                  <option value="20-100">20-99</option>
                  <option value="100-500">100-499</option>
                  <option value="100-500">500-1000</option>
                  <option value=">500">&ge; 1000</option>
                </select>
              </div>

            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-[#e4e5e7]">Message *</label>
              <textarea
                id="message"
                className="min-h-[170px] bg-[#0c0c0c] border border-[#242628] focus:border-[#6353ff] p-2 rounded-[5px] text-[#ffffff] w-[100%] h-[150px] mobiles:h-[120px] font-Satoshi placeholder-[#61646b] pl-5 placeholder:font-semibold text-[16px] focus:outline-none placeholder:tracking-wide resize-y overflow-y-auto"
                placeholder="Type your message here..."
                required
              />
            </div>
            
            <div className="w-full flex items-center gap-4 mobiles:flex-col">
              <p className="text-[#afb1b6] basis-[65%]">By submitting you agree to the <span className="text-[#6070ff] cursor-pointer"> Terms of Service </span> and acknowledge the <span className="text-[#6070ff] cursor-pointer"> Privacy Policy</span>.</p>
              <button type="submit" className='flex-grow text-[#000000] font-semibold bg-[#6353ff] px-8 py-3 rounded-[50px] mobiles:w-full hover:bg-[#6070ff] transition-all duration-300'>
                  Submit
              </button>
            </div>
            
          </form>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
