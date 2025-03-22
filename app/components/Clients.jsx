import React from 'react'
import LogoCarousel from './LogoCarousel'

const Clients = () => {
  return (
    <div className='h-[auto] tabPlus:w-full w-full py-3 mobiles:mt-[50px] mobiles:text-center flex flex-col justify-center items-center gap-5 font-Satoshi tracking-tight mobiles:mb-[5px] '>
      <div className='w-full flex flex-col items-center justify-center'>
        <h4 className='text-[#f7f8f8] text-[21px] leading-6'>Trusted by over 1300 product teams across globe.</h4>
        <p className='text-[#8a8f98] text-[21px] mobiles:text-[16px]'>From pioneering startups and unicorns to industry-leading corporations.</p>
      </div>
      
      <div className='h-[full] tabPlus:w-[70%] w-[90%] mobiles:w-full flex justify-between'>

        <LogoCarousel />
        
      </div>
    </div>
  )
}

export default Clients