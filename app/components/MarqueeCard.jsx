import React from 'react'

const MarqueeCard = () => {
  const clients = [
    {
      quote:
        "“We went from 2k MRR to 10k+ MRR by using data insights and heatmaps to optimise our user journey and conversion”",
      name: "Linus Reeds",
      title: "CEO at RapidX",
      img: "/client1.jpg",
    },
    {
      quote:
        "“I could focus on my startup and get live feedback from the community. Allowed me to scale upto $1k MRR in 3 weeks”",
      name: "Sasha Woods",
      title: "CTO at BritchTech",
      img: "/client2.jpg",
    },
    {
      quote:
        "“The deep insights we got from Zen1 - helped us get our app in the top 10 productiving apps on App Store”",
      name: "Helen Woodland",
      title: "Founder at Nobel",
      img: "/client3.jpeg",
    },
    {
      quote:
      "“We saw 20% more customer retention with the help of insights from Zen1. It has been an integral tool in our growth”",
      name: "Richard Mason",
      title: "CPO at IndieLaunch",
      img: "/client4.jpg",
    },
    {
      quote:
        "“Our process have been optimised by 15% overall - Gen1 has been the primary reason for us to achieve profitablility”",
      name: "Peter Hendricks",
      title: "CEO at TechFi",
      img: "/client5.jpg",
    },
    {
      quote:
        "“Got 18% Month-On-M growth with Gen1. Love the insights & how simple it is to set things up & get started in it - great UX”",
      name: "Matthew Peate",
      title: "CMO at ProGame",
      img: "/client6.jpg",
    },
    {
      quote:
        "“Got 18% Month-On-M growth with Gen1. Love the insights & how simple it is to set things up & get started in it - great UX”",
      name: "Gary Wilson",
      title: "CMO at Nexus Bank",
      img: "/client7.jpg",
    },
  ];
  
  return (
    <>
      {clients.map((client, index) => (
        <div key={index} className='w-[416px] h-[min] flex flex-shrink-0 flex-col gap-5 bg-[#0d0d0dcc] border-[1px] border-[#1a1a1a] rounded-[18px] p-[25px]'>
          <h6 className='text-[#aaaaaa] text-[18px]'>{client.quote}</h6>
          <div className='w-full h-[2px] bg-[#1a1a1a]'></div>
          <div className='flex justify-start items-center gap-3'>
            <img className='h-[60px] w-[60px] object-cover border-2 border-[#cacaca] rounded-full' src={client.img} alt="" />
            <div className='flex flex-col'>
              <h4 className='text-[16px] text-[#eaeaea] font-Satoshi'>{client.name}</h4>
              <p className='text-[12px] text-[#aaaaaa] font-Satoshi'>{client.title}</p>
            </div>
          </div>
        </div>
      ))}
    </>
    
  )
}

export default MarqueeCard