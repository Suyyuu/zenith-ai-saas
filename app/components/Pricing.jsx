import React from 'react'
import { IoCopyOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { BsClock } from "react-icons/bs";
import { TfiArrowsCorner } from "react-icons/tfi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GrCheckmark } from "react-icons/gr";
import Link from 'next/link';

const Pricing = () => {
  return (
    <div className="w-[100%] h-full flex flex-col items-center gap-24 pt-[150px] pb-[40px] mobiles:pt-[120px] mobiles:pb-[40px] mobiles:gap-10">
      <div className="w-[100%] h-full flex flex-col items-center mobiles:w-[90%] mobiles:text-center">
        <h1 className="text-[48px] mobiles:text-[36px] leading-none font-light text-[#f4f4f4] tracking-tight font-host-grotesk">
          Plans that
        </h1>
        <h1 className=" text-[48px] mobiles:text-[36px] leading-none font-light tracking-tight font-host-grotesk pb-2 bg-gradient-to-r from-[#5653ff] to-[#d252ff] bg-clip-text text-transparent">
          scale with you.
        </h1>
        <p className=" font-Satoshi font-normal text-center text-lg mobiles:text-[12px] mobiles:tracking-tight mobiles:w-[90%] mobiles:leading-normal text-[#ebebebcc]">
        Start free. Unlock premium features, advanced security, and 
          <br className="mobiles:hidden" /> unlimited potential with an upgrade.
        </p>
      </div>

      {/* Pricing Cards Start*/}


      <div className='w-[90%] text-[#ffffff] flex gap-5 mobiles:flex-col mobiles:w-[90%]'>
        <div className='p-5 bg-[#121313] w-[25%] flex flex-col gap-3 rounded-[15px] mobiles:w-full mobiles:m-auto'>
          <h4 className='text-[20px] font-host-grotesk'>Free Plan</h4>
          <div className='flex flex-col'>
          <p className='text-[14px] text-[#797d86] invisible mobiles:hidden'>From</p>
            <h1 className='text-[40px] font-host-grotesk'>$0<span className='text-[18px] text-[#eaeaea80]'>/month</span></h1>
          </div>
          <Link href="/signUp" className='bg-[#242628] text-[18px] py-[10px] flex justify-center w-full hover:bg-[#494b50] transition-all duration-300 rounded-[50px]'>Start for free</Link>
          <p className='text-[#949793] text-[16px]'>To Start your project, no credit card required.</p>

          <hr className='w-full border-dashed' />

          <ul className='flex flex-col gap-3 py-3'>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><IoCopyOutline /> 10 Projects <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GoDatabase /> 2.5 GB storage</li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><BsClock /> 150 <span className='text-[#6353ff]'>compute hours</span></li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><TfiArrowsCorner className='transform rotate-90' /> Autoscaling Upto 2 CU <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
          </ul>

          <hr className='w-full border-dashed' />

          <ul className='flex flex-col gap-3 py-3'>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GrCheckmark /> Built-in high availability</li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GrCheckmark /> Community Support</li>
          </ul>
        </div>

        {/* Launch Plan */}

        <div className='p-5 bg-[#000000] w-[25%] flex flex-col gap-3 rounded-[15px] relative border-[1px] border-[#6353ff] mobiles:w-full mobiles:m-auto'>
          <p className='absolute top-6 right-5 text-[14px] text-[#797d86] font-host-grotesk'>Pay via <a href="#" className='underline underline-offset-2 hover:no-underline hover:text-[#eaeaea]'>AWS</a></p>
          <h4 className='text-[20px] font-host-grotesk text-[#6353ff]'>Launch</h4>
          <div className='flex flex-col'>
            <p className='text-[14px] text-[#797d86]'>From</p>
            <h1 className='text-[40px] font-host-grotesk'>$19<span className='text-[18px] text-[#797d86]'>/month</span></h1>
          </div>
          <Link href="/signUp" className='bg-[#6353ff] text-[18px] py-[10px] w-full flex justify-center hover:bg-[#6070ff] transition-all duration-300 rounded-[50px] text-[#0a0a0a] font-semibold'>Get started</Link>
          <p className='text-[#949793] text-[16px]'>Resources, support, and features to make your launch.</p>

          <hr className='w-full border-dashed' />

          <ul className='flex flex-col gap-3 py-3'>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><IoCopyOutline className='text-[#6353ff]' /> 100 Projects <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GoDatabase className='text-[#6353ff]' /> 10 GB storage <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><BsClock className='text-[#6353ff]' /> 300 <span className='text-[#6353ff]'>compute hours</span> <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><TfiArrowsCorner className='transform rotate-90 text-[#6353ff]' /> Autoscaling Upto 4 CU <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
          </ul>

          <hr className='w-full border-dashed' />

          <ul className='flex flex-col gap-3 py-3'>
            <p className='text-[15px] font-Satoshi'>Everything in Free, plus...</p>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GrCheckmark className='text-[#6353ff]' /> Organization accounts</li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GrCheckmark className='text-[#6353ff]' /> Standard Support</li>
          </ul>
        </div>

        {/* Scale Plan */}

        <div className='p-5 bg-[#121313] w-[25%] flex flex-col gap-3 rounded-[15px] relative mobiles:w-full mobiles:m-auto'>
          <p className='absolute top-6 right-5 text-[14px] text-[#797d86] font-host-grotesk'>Pay via <a href="#" className='underline underline-offset-2 hover:no-underline hover:text-[#eaeaea]'>AWS</a> or <a href="#" className='underline underline-offset-2 hover:no-underline hover:text-[#eaeaea]'>Azure</a></p>
          <h4 className='text-[20px] font-host-grotesk'>Scale</h4>
          <div className='flex flex-col'>
            <p className='text-[14px] text-[#797d86]'>From</p>
            <h1 className='text-[40px] font-host-grotesk'>$69<span className='text-[18px] text-[#797d86]'>/month</span></h1>
          </div>
          <Link href="/signUp" className='bg-[#242628] text-[18px] py-[10px] w-full flex justify-center hover:bg-[#494b50] transition-all duration-300 rounded-[50px]'>Get started</Link>
          <p className='text-[#949793] text-[16px]'>Increased capacity and advanced features for scaling production.</p>

          <hr className='w-full border-dashed' />

          <ul className='flex flex-col gap-3 py-3'>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><IoCopyOutline /> 1000 Projects <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GoDatabase /> 50 GB storage <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><BsClock /> 750 <span className='text-[#6353ff]'>compute hours</span> <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><TfiArrowsCorner className='transform rotate-90' /> Autoscaling Upto 8 CU <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
          </ul>

          <hr className='w-full border-dashed' />

          <ul className='flex flex-col gap-3 py-3'>
            <p className='text-[15px] font-Satoshi'>Everything in Launch, plus...</p>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GrCheckmark /> IP Allow Rules</li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GrCheckmark /> Datadog integration</li>
          </ul>
        </div>

        {/* Business Plan */}

        <div className='p-5 bg-[#121313] w-[25%] flex flex-col gap-3 rounded-[15px] relative mobiles:w-full mobiles:m-auto'>
          <p className='absolute top-6 right-5 text-[14px] text-[#797d86] font-host-grotesk'>Pay via <a href="#" className='underline underline-offset-2 hover:no-underline hover:text-[#eaeaea]'>AWS</a></p>
          <h4 className='text-[20px] font-host-grotesk'>Business</h4>
          <div className='flex flex-col'>
            <p className='text-[14px] text-[#797d86]'>From</p>
            <h1 className='text-[40px] font-host-grotesk'>$700<span className='text-[18px] text-[#797d86]'>/month</span></h1>
          </div>
          <Link href="/signUp" className='bg-[#242628] text-[18px] py-[10px] w-full flex justify-center hover:bg-[#494b50] transition-all duration-300 rounded-[50px]'>Get started</Link>
          <p className='text-[#949793] text-[16px]'>For demanding workloads, with best security and compliance.</p>

          <hr className='w-full border-dashed' />

          <ul className='flex flex-col gap-3 py-3'>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><IoCopyOutline /> 5000 Projects <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GoDatabase /> 500 GB storage <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><BsClock /> 1000 <span className='text-[#6353ff]'>compute hours</span> <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><TfiArrowsCorner className='transform rotate-90' /> Autoscaling Upto 16+ CU <AiOutlineInfoCircle className='text-[18px] cursor-pointer' /></li>
          </ul>

          <hr className='w-full border-dashed' />

          <ul className='flex flex-col gap-3 py-3'>
          <p className='text-[15px] font-Satoshi'>Everything in Scale, plus...</p>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GrCheckmark /> Compliance (SOC 2, ISO)</li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GrCheckmark /> Priority Support</li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GrCheckmark /> Advanced security features</li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GrCheckmark /> Migration assistance</li>
            <li className='flex items-center gap-2 text-[15px] font-Satoshi'><GrCheckmark /> Private Link</li>
          </ul>
        </div>

      </div>

      <div className='w-[45%] bg-[#121313] mobiles:w-[90%] m-auto flex justify-between items-center mobiles:flex-col mobiles:gap-2 mobiles:text-center p-5 rounded-[15px]'>
        <div className='flex flex-col '>
          <h4 className='text-[20px] text-[#ffffff] font-Satoshi'>Custom Enterprise Plans</h4>
          <p className='text-[16px] text-[#94979e] font-satoshi'>Connect with our team for higher resource limits,<br /> dedicated requirements, annual contracts, and more.</p>
        </div>
        <Link href="/Contact" className='py-[10px] px-9 bg-[#6353ff] hover:bg-[#6070ff] flex justify-center transition-all duration-300 text-nowrap rounded-[50px] font-Satoshi font-semibold'>Talk to Us</Link>
      </div>
    </div>
  )
}

export default Pricing