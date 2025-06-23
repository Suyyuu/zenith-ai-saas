import React from 'react'
import Authentication from '../components/Authentication'

const page = () => {
  return (
    <>
      <div className="h-full w-full bg-[#0a0a0a]">
        <div className="bg-transparent h-full w-full">
          <Authentication />
        </div>
      </div>
    </>
  )
}

export default page