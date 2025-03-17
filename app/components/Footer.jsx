import Link from 'next/link'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSlack } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full bg-[#0a0a0a] border-t border-[#232323] mt-10'>
      <div className='w-[80%] mx-auto mobiles:w-[95%] flex justify-between mobiles:flex-col mobiles:gap-5 px-2 py-8 mobiles:px-10 mobiles:items-start'>
        <div className='flex flex-col gap-5 justify-between'>
          <img className='w-[126px] h-auto -translate-x-5' src="logo3.png" alt="logo of zenith" />
          <div className='flex flex-col gap-4'>
            <h6 className='text-[14px] font-host-grotesk text-[#eaeaea]'>FOLLOW US</h6>
            <div className='flex gap-4 text-[#aaaaaa] cursor-pointer '>
                <span className='hover:text-[#fafafa] '><FaXTwitter className=" text-xl"/></span>
                <span className='hover:text-[#fafafa] '><FaLinkedin className=" text-xl"/></span>
                <span className='hover:text-[#fafafa] '><FaYoutube className=" text-xl "/></span>
                <span className='hover:text-[#fafafa] '><FaSlack className=" text-xl "/></span>
                <span className='hover:text-[#fafafa] '><FaGithub className=" text-xl "/></span>
                <span className='hover:text-[#fafafa] '><FaDiscord className=" text-xl "/></span>
            </div>
          </div>
          
        </div>

        <div className='w-fit mobiles:flex gap-20 custom:gap-7 tabPlus:flex'>

          <div className='flex gap-20 mobiles:gap-10 custom:gap-7 justify-start mobiles:flex-col '>

            <div className='flex flex-col'>
              <span className='text-[14px] font-host-grotesk text-[#eaeaea] font-semibold pb-4' >COMPANY</span>
              <Link href="#" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>About Us</Link>
              <Link href="#" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Privacy Policy</Link>
              <Link href="#" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Terms of Service</Link>
              <Link href="" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Careers</Link>
            </div>

            <div className='flex flex-col'>
              <span className='text-[14px] font-host-grotesk text-[#eaeaea] font-semibold pb-4' >PRODUCT</span>
              <Link href="/pricing" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Pricing</Link>
              <Link href="#" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Capabilities</Link>
              <Link href="#" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Testimonials</Link>
              <Link href="#" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Features</Link>
              <Link href="#" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Integrations</Link>
              <Link href="#" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Blogs</Link>
            </div>

          </div>

          <div className='flex gap-20 mobiles:gap-10 custom:gap-7 justify-start mobiles:flex-col'>

            <div className='flex flex-col'>
              <span className='text-[14px] font-host-grotesk text-[#eaeaea] font-semibold pb-4' >RESOURCES</span>
              <Link href="#" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Blogs</Link>
              <Link href="#" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Docs</Link>
              <Link href="#" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Changelog</Link>
            </div>

          </div>

        </div>

      </div>
      <div className='w-[80%] mx-auto mobiles:w-full flex justify-between items-center h-full pb-2 mobiles:flex-col-reverse border-t border-t-[#232323]'>
        <p className='text-[#61656b] text-[14px] font-Satoshi'>Copyright &#169; 2025 Zenith Labs, Inc.</p>
        <Link href="#" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Privacy Policy</Link>
        <Link href="#" className='text-[16px] text-[#aaaaaa] hover:text-[#fafafa] font-Satoshi'>Terms of Service</Link>
        <span className='flex items-center text-[#61656b] text-[14px] font-Satoshi'><img className=' w-16' src="/heart.svg" alt="" /><p className='text-nowrap -translate-x-2'> Made with Passion </p> </span>
      </div>
      
    </div>
  )
}

export default Footer