import React from 'react'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'

const page = () => {
  return (
    <>
      <div className="h-full w-full bg-[#0a0a0a]">
        <div className="bg-transparent h-full w-full">
          <Navbar />
          <Pricing />
        </div>
      </div>
    </>
  )
}

export default page