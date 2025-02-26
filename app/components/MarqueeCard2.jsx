import React from "react";

const MarqueeCard2 = () => {
  const clients = [
    {
      quote:
        "“Using detailed data insights, directly resulted in a 4x increase in conversions within two months.”",
      name: "Barlo Cartel",
      title: "CEO at Citadel Group Inc.",
      img: "/c21.jpeg",
    },
    {
      quote:
        "“we’ve retained a substantial portion of our customer base and consistently saw a 25% increase in user growth each quarter”",
      name: "Bianca Jester",
      title: "CTO at Norton Labs",
      img: "/c22.jpeg",
    },
    {
      quote:
        "“Behavioral analysis and user engagement insights from Zenith Labs had a huge impact, driving a 40% boost in sales.”",
      name: "Mellisa Strahovski",
      title: "Co-Founder at Miss-Bliss",
      img: "/c23.jpeg",
    },
    {
      quote:
        "“Using the full suite of Zenith Labs, we streamlined our operations and saw a 35% increase in overall productivity.”",
      name: "Kim Yon Seol",
      title: "CEO at Project Kache",
      img: "/c24.jpeg",
    },
    {
      quote:
        "“By integrating AI data visualization, we were able to reduce production errors, improve efficiency across the board.”",
      name: "Sarah Vivaldi",
      title: "CEO at Krion Robotics Inc.",
      img: "/c25.jpeg",
    },
    {
      quote:
        "“With product insights from Zen1 AI, we increased user engagement by 40% and boosted revenue by 25%.”",
      name: "Claudio Weber",
      title: "CMO at Weber AND Weber",
      img: "/c26.jpeg",
    },
    {
      quote:
        "“Thanks to it's Startup Special plan, we scaled our operations quickly and increased our user base by 50% within 3 months.”",
      name: "Lyra Straton",
      title: "Founder at Her Choice",
      img: "/c27.jpeg",
    },
  ];

  return (
    <>
      {clients.map((client, index) => (
        <div
          key={index}
          className="w-[416px] h-[min] flex flex-shrink-0 flex-col gap-5 bg-[#0d0d0dcc] border-[1px] border-[#1a1a1a] rounded-[18px] p-[25px]"
        >
          <h6 className="text-[#aaaaaa] text-[18px]">{client.quote}</h6>
          <div className="w-full h-[2px] bg-[#1a1a1a]"></div>
          <div className="flex justify-start items-center gap-3">
            <img
              className="h-[60px] w-[60px] object-cover border-2 border-[#cacaca] rounded-full"
              src={client.img}
              alt=""
            />
            <div className="flex flex-col">
              <h4 className="text-[16px] text-[#eaeaea] font-Satoshi">
                {client.name}
              </h4>
              <p className="text-[12px] text-[#aaaaaa] font-Satoshi">
                {client.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MarqueeCard2;
