import React from 'react'
import Image from 'next/image'

const HeroImage = () => {
  return (
    <div className="heroImage">
      <div className='absolute top-0 left-0 right-0 bottom-0 block mobiles:h-min'>
        <video 
          className='block w-full h-full object-center object-fill mobiles:object-cover pointer-events-none' 
          src="/waves.mp4" 
          autoPlay 
          loop 
          muted
          playsInline
        />
      </div>
      <div className='contents'>
        <div className='block will-change-transform opacity-100 transform translate-y-6 mobiles:-translate-y-6 custom:flex-shrink-0 custom:flex-grow-[1] custom:basis-0 tab:h-[379px] custom:w-[1px] flex-none h-[605px] custom2:h-[187px] overflow-hidden relative w-full mobiles:w-[90%]'>
          <div className='block absolute top-0 right-0 bottom-0 left-0 [mask-image:linear-gradient(to_bottom,white_20%,white_80%,transparent)]'>
            <img className='block w-full h-full mobiles:h-min object-center-bottom object-contain mask-image-fade' src="/dashboard.png" alt="dashboard" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroImage


// import React from 'react'
// import Image from 'next/image'

// const HeroImage = () => {
//   return (
//     <div className="heroImage">
//       <div className='absolute top-0 left-0 right-0 bottom-0 block mobiles:h-min'>
//         <img className='block w-full h-full object-center-top object-cover mobiles:object-cover' src="/wave.png" alt="" />
//       </div>
//       <div className='contents'>
//         <div className='block will-change-transform opacity-100 transform translate-y-6 mobiles:-translate-y-6 custom:flex-shrink-0 custom:flex-grow-[0.9] custom:basis-0 custom:h-[379px] custom:w-[1px] flex-none h-[515px] mobiles:h-[187px] overflow-hidden relative w-full mobiles:w-[90%]'>
//           <div className='block absolute top-0 right-0 bottom-0 left-0'>
//             <img className='block w-full h-full mobiles:h-min object-center-bottom object-contain ' src="/dashboard.png" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroImage