import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-[100%] h-full flex flex-col items-center gap-4 py-[100px] mobiles:py-[60px]"
    >
      <div className="w-[100%] h-full flex flex-col items-center gap-2 mobiles:w-[90%] mobiles:text-center">
        <h1 className="text-[48px] mobiles:text-[36px] leading-none font-light text-[#f4f4f4] tracking-tight font-host-grotesk">
          Supercharge Your Understanding
        </h1>
        <h1 className=" text-[48px] mobiles:text-[36px] leading-none font-light tracking-tight font-host-grotesk pb-2 bg-gradient-to-r from-[#5653ff] to-orange-500 bg-clip-text text-transparent">
          Of SaaS, E-Commerce, and Beyond
        </h1>
        <p className=" font-Satoshi font-normal text-center text-lg mobiles:text-[12px] mobiles:tracking-tight mobiles:w-[90%] mobiles:leading-normal text-[#ebebebcc]">
          Effortlessly integrate and analyze data from diverse platforms like
          CRM systems, user feedback,
          <br className="mobiles:hidden" /> website analytics, and more.
        </p>
      </div>

      <div className="w-[85%] custom:w-[70%] py-[60px] mx-auto flex mobiles:w-full mobiles:flex-col custom:flex-col custom:gap-5 gap-2 mobiles:gap-5">
        {/* First Feature */}

        <div className="w-full h-[auto] gap-8 flex flex-col mobiles:flex-col justify-between">
          <div className="w-full mobiles:w-full">
            <div className="w-full h-full relative flex">
              <img className="h-[210px] mx-auto" src="/f1.png" alt="" />
              <div className="circlePosition w-1/2 h-[70%] bg-[#31e3f061] rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-40%] translate-y-[-50%] blur-[68px]"></div>
            </div>
          </div>
          <div className=" w-full mobiles:w-full flex flex-col justify-center items-center gap-2 text-center">
            <h4 className="text-[#eaeaea] text-[24px] font-host-grotesk mobiles:w-full">
              Full-Spectrum Data Gathering
            </h4>
            <p className="text-[#8a8f98] text-[17px] text-pretty mobiles:text-[14px] leading-6 font-Satoshi w-[80%] mobiles:w-[90%] mobiles:m-auto">
              Simplify data collection from CRM, user insights, website
              analytics, and more. Our platform integrates effortlessly for a
              complete view of your operations.
            </p>
          </div>
        </div>

        {/* Second Feature */}

        <div className="w-full h-[auto] gap-8 flex flex-col mobiles:flex-col justify-between">
          <div className="w-full mobiles:w-full">
            <div className="w-full h-full relative flex">
              <img className="h-[210px] mx-auto" src="/f2.png" alt="" />
              <div className="circlePosition w-1/2 h-[80%] bg-[#4a56ff5a] rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-60%] translate-y-[-50%] blur-[76px]"></div>
            </div>
          </div>
          <div className="w-full mobiles:w-full flex flex-col justify-center items-center gap-2 text-center">
            <h4 className="text-[#eaeaea] text-[24px] font-host-grotesk mobiles:w-full">
              Next-Gen Data Visualization
            </h4>
            <p className="text-[#8a8f98] text-[17px] text-pretty mobiles:text-[14px] leading-6 font-Satoshi w-[80%] mobiles:w-[90%] mobiles:m-auto">
              Revolutionize analysis with intuitive tools. Interactive
              dashboards and reports help track trends, monitor performance, and
              make data-driven decisions.
            </p>
          </div>
        </div>

        {/* Third Feature */}

        <div className="w-full h-[auto] gap-8 flex flex-col mobiles:flex-col justify-between ">
          <div className="w-full mobiles:w-full ">
            <div className="w-full h-full relative flex ">
              <img className="h-[210px] mx-auto" src="/f3.png" alt="" />
              <div className="circlePosition w-1/2 h-[60%] bg-[#fb66394b] rounded-[100%] absolute z-1 top-[40%] left-[50%] translate-x-[-90%] translate-y-[-50%] blur-[66px]"></div>
            </div>
          </div>
          <div className="w-full mobiles:w-full flex flex-col justify-center items-center gap-2 text-center">
            <h4 className="text-[#eaeaea] text-[24px] font-host-grotesk mobiles:w-full">
              AI-Driven Behavior Analysis
            </h4>
            <p className="text-[#8a8f98] text-[17px] text-pretty mobiles:text-[14px] leading-6 font-Satoshi w-[80%] mobiles:w-[90%] mobiles:m-auto">
              Use behavioral data to identify trends, personalize interventions,
              and apply targeted strategies across customer interactions and
              employee performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
