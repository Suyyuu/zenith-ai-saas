import React from "react";

const About = () => {
  return (
    <div id="about" className="w-[100%] h-full flex flex-col items-center gap-4 py-[100px] mobiles:py-[60px]">
      <div className="w-[100%] h-full flex flex-col items-center gap-2 mobiles:w-[90%] mobiles:text-center">
        <h1 className="text-[48px] mobiles:text-[36px] leading-none font-light text-[#f4f4f4] tracking-tight font-host-grotesk">
          Supercharge Your Understanding
        </h1>
        <h1 className=" text-[48px] mobiles:text-[36px] leading-none font-light tracking-tight font-host-grotesk pb-2 bg-gradient-to-r from-[#5653ff] to-[#d252ff] bg-clip-text text-transparent">
          Of SaaS, E-Commerce, and Beyond
        </h1>
        <p className=" font-Satoshi font-normal text-center text-lg mobiles:text-[12px] mobiles:tracking-tight mobiles:w-[90%] mobiles:leading-normal text-[#ebebebcc]">
          Effortlessly integrate and analyze data from diverse platforms like
          CRM systems, user feedback,
          <br className="mobiles:hidden" /> website analytics, and more.
        </p>
      </div>

      <div className="w-[80%] py-[60px] mx-auto flex mobiles:w-full mobiles:flex-col gap-2 mobiles:gap-5">
        {/* First Feature */}

        <div className="w-full h-[auto] gap-8 flex flex-col mobiles:flex-col justify-between">
          <div className="w-full mobiles:w-full">
            <div className="w-full h-full relative flex">
              <img className="h-[210px] mx-auto" src="/f1.png" alt="" />
              <div className="circlePosition w-1/2 h-[70%] bg-[#5754ff33] rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-40%] translate-y-[-50%] blur-[68px]"></div>
            </div>
          </div>
          <div className=" w-full mobiles:w-full flex flex-col justify-center items-center gap-2 text-center">
            <h4 className="text-[#eaeaea] text-[24px] font-host-grotesk mobiles:w-full">
              Full-Spectrum Data Gathering
            </h4>
            <p className="text-[#8a8f98] text-[17px] mobiles:text-[12px] leading-6 font-Satoshi w-[80%] mobiles:w-[90%] mobiles:m-auto mobiles:text-center">
              Streamline data collection from CRM systems, user insights, website
              analytics, and other key sources. Our platform effortlessly
              integrates with your existing tools to deliver a complete view of
              your operations.
            </p>
          </div>
        </div>

        {/* Second Feature */}

        <div className="w-full h-[auto] gap-8 flex flex-col mobiles:flex-col justify-between">
          <div className="w-full mobiles:w-full">
            <div className="w-full h-full relative flex">
              <img className="h-[210px] mx-auto" src="/f2.png" alt="" />
              <div className="circlePosition w-1/2 h-[80%] bg-[#ce53ff33] rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-60%] translate-y-[-50%] blur-[76px]"></div>
            </div>
          </div>
          <div className="w-full mobiles:w-full flex flex-col justify-center items-center gap-2 text-center">
            <h4 className="text-[#eaeaea] text-[24px] font-host-grotesk mobiles:w-full">
              Next-Gen Data Visualization
            </h4>
            <p className="text-[#aaa] text-[12px] font-Satoshi w-[80%] mobiles:w-[90%] mobiles:m-auto mobiles:text-center">
              Revolutionize your data analysis with our user-friendly
              visualization tools. Our platform’s interactive dashboards and
              detailed reports help you visualize key trends, track performance,
              and make smarter, data-backed decisions.
            </p>
          </div>
          
        </div>

        {/* Third Feature */}

        <div className="w-full h-[auto] gap-8 flex flex-col mobiles:flex-col justify-between ">
          <div className="w-full mobiles:w-full ">
            <div className="w-full h-full relative flex ">
              <img className="h-[210px] mx-auto" src="/f3.png" alt="" />
              <div className="circlePosition w-1/2 h-[60%] bg-[#6653ff33] rounded-[100%] absolute z-1 top-[40%] left-[50%] translate-x-[-90%] translate-y-[-50%] blur-[66px]"></div>
            </div>
          </div>
          <div className="w-full mobiles:w-full flex flex-col justify-center items-center gap-2 text-center">
            <h4 className="text-[#eaeaea] text-[24px] font-host-grotesk mobiles:w-full">
              AI-Driven Behavior Analysis
            </h4>
            <p className="text-[#aaa] text-[12px] font-Satoshi w-[80%] mobiles:w-[90%] mobiles:m-auto mobiles:text-center">
              Utilize behavioral data analysis to assess trends, create
              personalized interventions, and apply targeted strategies across a
              range of applications, from customer interactions to employee
              performance in diverse settings.
            </p>
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default About;
