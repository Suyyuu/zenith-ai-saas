import React from "react";

const Numbers = () => {
  return (
    <div className="tabPlus:w-full tab:w-[90%] tab:mx-auto overflow-hidden py-5 mobiles:pt-[20px]">
      <div className="w-[80%] mobiles:w-full mobiles:px-5 mx-auto ">
        <div className="flex mobiles:flex-col justify-between items-end mobiles:items-start ">
          <div className="flex flex-col gap-3 mobiles:gap-2 ">
            <span className="flex items-center gap-3">
              <span className="w-[18px] h-[10px] rounded-[10px] bg-[#763fff]"></span>
              <span className="text-[#d0d6e0] text-[18px] mobiles:text-[12px] font-Satoshi">
                Trusted by the best
              </span>
            </span>
            <div className="flex flex-col w-fit">
              <h1 className="text-[48px] mobiles:text-[30px] text-[#f7f8f8] font-host-grotesk leading-none font-light pb-2 tracking-tight">
                Hence, We are
              </h1>
              <h1 className="text-[48px] mobiles:text-[30px] font-host-grotesk leading-none font-light pb-2 tracking-tight bg-gradient-to-r from-[#5653ff] to-[#f97316] bg-clip-text text-transparent">
                Growing Like Crazy
              </h1>
            </div>
          </div>

          <p className="text-[#8a8f98] text-[18px] mobiles:text-[14px] font-Satoshi max-w-96 mobiles:max-w-full">
            Our Numbers don't lie. We are helping businesses reach their
            potential and also break through the bounds to reach newer heights.
          </p>
        </div>

        <div className="w-full flex tabPlus:flex-row tabPlus:justify-between 4k:flex-row 4k:justify-between 4k:py-10 flex-col tab:flex-row tab:justify-between tabPlus:py-10 gap-5 mobiles:pt-4">
          <div className="flex flex-col items-center max-w-[454px] numberCard p-5">
            <h2 className="text-[#eaeaea] text-[48px] mobiles:text-[30px] font-host-grotesk">
              $7.8M
            </h2>
            <p className="text-[#ffffff] font-Satoshi text-[18px] mobiles:text-[12px]">
              Raised by Startups
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[454px] numberCard  p-5">
            <h2 className="text-[#eaeaea] text-[48px] mobiles:text-[30px] font-host-grotesk">
              500+
            </h2>
            <p className="text-[#ffffff] font-Satoshi text-[18px] mobiles:text-[12px]">
              Companies Love Us
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[454px] numberCard  p-5">
            <h2 className="text-[#eaeaea] text-[48px] mobiles:text-[30px] font-host-grotesk">
              10k+
            </h2>
            <p className="text-[#ffffff] font-Satoshi text-[18px] mobiles:text-[12px]">
              Products Analyzed
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[454px] numberCard  p-5">
            <h2 className="text-[#eaeaea] text-[48px] mobiles:text-[30px] font-host-grotesk">
              {">"}100%
            </h2>
            <p className="text-[#ffffff] font-Satoshi text-[18px] mobiles:text-[12px]">
              year-on-year growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
