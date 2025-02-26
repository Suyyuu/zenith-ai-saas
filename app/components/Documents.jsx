import React from 'react'
import { IoSearch } from "react-icons/io5";

const Documents = () => {
  return (
    <>
        <div className='w-full h-screen'>
            <div className='bg-[#08090a] w-[280px] h-full top-0 left-0 bottom-0 flex flex-col text-[#8a8f98] px-[24px] pt-[24px] border'>
                <div className='flex flex-col gap-5 cursor-pointer'>
                    <div className='flex items-center justify-start gap-5'>
                        <a href="/">
                            <img className="w-28 h-auto shadow-[1px_0_0_0px_rgba(235,235,235,0.15)] pr-2" src="/zen.png" alt="Zen AI Logo" />
                        </a>
                        <a href="/docs" className=' text-[#8a8f98] font-[600] hover:text-[#ffffff]'>Docs</a>
                    </div>
                    <div className='w-full bg-[#1c1c1f] flex justify-between items-center pl-3 p-2 rounded-[7px] shadow-[0_0_0_1px_rgba(235,235,235,0.15)]'>
                        <IoSearch className='text-[20px]' />
                        <button type='search' className='text-[#999999] bg-[#1c1c1f]  w-[100%] mobiles:p-2 mobiles:rounded-[10px] h-full font-Satoshi text-[14px]' placeholder='Search docs'>Search docs</button>
                        <span className='bg-[#28282c] text-[10px] text-[#ffffff] px-2 py-1 rounded-[5px] mr-1'>Ctrl</span>
                        <span className='bg-[#28282c] text-[10px] text-[#ffffff] px-2 py-1 rounded-[5px]'>K</span>
                    </div>

                </div>
                
            </div>
        </div>

    </>
  )
}

export default Documents