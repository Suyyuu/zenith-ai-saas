import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Page = () => {
  return (
    <>
      <div className="h-full w-full bg-[#0a0a0a]">

        

        <div className="bg-transparent h-full w-full">

          {/* Gradient for Landing Section */}
        {/* <div className="circlePosition w-[590px] h-[400px] bg-[rgb(87,16,181)] rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[200px]">
          </div> */}

          <Navbar />
          <Contact />
          <Footer />
          
        </div>
      </div>
    </>
  )
}

export default Page