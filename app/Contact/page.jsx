import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Page = () => {
  return (
    <>
      <div className="h-full w-full bg-[#0a0a0a]">
        <div className="bg-transparent h-full w-full">
          <Navbar />
          <Contact />
          <Footer />
          
        </div>
      </div>
    </>
  )
}

export default Page