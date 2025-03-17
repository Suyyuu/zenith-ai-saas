import React from 'react'

const Clients = () => {
  return (
    <div className='h-[auto] tabPlus:w-full w-full py-3 mobiles:py-0 flex flex-col justify-center items-center font-Satoshi tracking-tight border border-red-200'>
      <h4 className='text-[#f7f8f8] text-[21px] leading-6'>Trusted by over 1300 product teams across globe.</h4>
      <p className='text-[#8a8f98] text-[21px]'>From pioneering startups and unicorns to industry-leading corporations.</p>

      <div className='tabPlus:h-[38px] tabPlus:w-[70%] w-[90%] h-[full] flex justify-between'>
        <img className=' tabPlus:w-32 sm:w-28 w-16 h-full object-contain object-center' src="/c1.svg" alt="" />
        <img className=' tabPlus:w-40 sm:w-32 w-20 h-full object-contain object-center' src="/c2.svg" alt="" />
        <img className=' tabPlus:w-32 sm:w-28 w-16 h-full object-contain object-center' src="/c3.svg" alt="" />
        <img className=' tabPlus:w-32 sm:w-28 w-16 h-full object-contain object-center' src="/c4.svg" alt="" />
      </div>
    </div>
  )
}

export default Clients