import React from 'react'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <div className="h-full w-full bg-[#0a0a0a]">
        <div className="bg-transparent h-full w-full">
          <Navbar />
          <Pricing />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default page