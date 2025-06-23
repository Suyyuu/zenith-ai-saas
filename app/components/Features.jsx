import React from "react";
import { PiUsersThree } from "react-icons/pi";
import { PiLock } from "react-icons/pi";
import { PiChartDonutFill } from "react-icons/pi";
import { PiTimerFill } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { PiIntersectSquareFill } from "react-icons/pi";
import { RiChatSearchFill } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { PiLinkFill } from "react-icons/pi";
import { PiDownloadFill } from "react-icons/pi";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { FaVideo } from "react-icons/fa6";
import { BsPersonFillAdd } from "react-icons/bs";

const Features = () => {
  return (
    <div id="features" className="w-full pt-[80px] pb-[40px]">
      <div className="w-full h-full flex md:flex-row flex-col md:gap-3 justify-center mobiles:text-center">
        <h1 className="text-[48px] mobiles:text-[30px] leading-none font-light pb-2 text-[#f4f4f4] tracking-tight font-host-grotesk">
          Next-Gen Features
        </h1>
        <h1 className="text-[48px] mobiles:text-[30px] font-host-grotesk leading-none font-light pb-2 tracking-tight bg-gradient-to-r from-[#5653ff] to-[#f97316] bg-clip-text text-transparent">
          for Scaling
        </h1>
      </div>
      <p className="font-Satoshi font-normal text-center text-[18px] mobiles:text-[14px] mobiles:w-[90%] mx-auto text-[#ffffff80] tabPlus:leading-5">
      Leverage AI-powered features to effortlessly gather and analyze data from CRM,<br className="mobiles:hidden"/> user feedback, web analytics and more.
      </p>

      <div id="featureContainer" className="w-[80%] mx-auto grid grid-cols-12 grid-rows-3 mobiles:grid-cols-6 mobiles:grid-rows-6 gap-10 mobiles:gap-5 pt-16">

          <div className=" col-span-3 row-span-1 flex flex-col w-full items-start gap-2">
            <RiLayoutMasonryFill className="text-[50px] mobiles:text-[30px] text-[#b0d6ffcc]" />
            <h6 className="text-[24px] text-[#f4f4f4]">Customize <br /> Workspace</h6>
            <p className="text-[#95979e] text-[15px]">Tailor your workspace to fit your team's unique workflows and needs.</p>
          </div>
          <div className="col-span-3 row-span-1 flex flex-col w-full items-start gap-2">
            <FaVideo className="text-[50px] mobiles:text-[30px] text-[#b0d6ffcc]" />
            <h6 className="text-[24px] text-[#f4f4f4]">HD FaceTime <br /> & Audio Calls</h6>
            <p className="text-[#95979e] text-[15px]">Stay connected with high-quality FaceTime and audio calls for better collaboration.</p>
          </div>
          <div className="col-span-3 row-span-1 flex flex-col w-full items-start gap-2">
            <PiChartDonutFill className="text-[50px] mobiles:text-[30px] text-[#b0d6ffcc]" />
            <h6 className="text-[24px] text-[#f4f4f4]">Track your <br /> progress</h6>
            <p className="text-[#95979e] text-[15px]">Visualize your team's journey and measure progress with detailed insights.</p>
          </div>
          <div className="col-span-3 row-span-1 flex flex-col w-full items-start gap-2">
            <BsPersonFillAdd className="text-[50px] mobiles:text-[30px] text-[#b0d6ffcc]" />
            <h6 className="text-[24px] text-[#f4f4f4]">Add people, Build Network</h6>
            <p className="text-[#95979e] text-[15px]">Effortlessly add new team members and build a robust, collaborative network.</p>
          </div>
          <div className="col-span-3 row-span-1 flex flex-col w-full items-start gap-2">
            <PiIntersectSquareFill className="text-[50px] mobiles:text-[30px] text-[#b0d6ffcc]" />
            <h6 className="text-[24px] text-[#f4f4f4]">Cross-tracking and Integrations</h6>
            <p className="text-[#95979e] text-[15px]">Streamline your workflow with cross-platform tracking and seamless integrations.</p>
          </div>
          <div className="col-span-3 row-span-1 flex flex-col w-full items-start gap-2">
            <PiCertificateFill className="text-[50px] mobiles:text-[30px] text-[#b0d6ffcc]" />
            <h6 className="text-[24px] text-[#f4f4f4]">Certified <br /> Analytics Tool</h6>
            <p className="text-[#95979e] text-[15px]">Make informed decisions with a certified analytics tool designed for accuracy and reliability.</p>
          </div>
          <div className="col-span-3 row-span-1 flex flex-col w-full items-start gap-2">
            <RiNotificationBadgeFill className="text-[50px] mobiles:text-[30px] text-[#b0d6ffcc]" />
            <h6 className="text-[24px] text-[#f4f4f4]">Real-Time <br /> Notifications</h6>
            <p className="text-[#95979e] text-[15px]">Receive real-time alerts to never miss a critical update or opportunity.</p>
          </div>
          <div className="col-span-3 row-span-1 flex flex-col w-full items-start gap-2">
            <GoGoal className="text-[50px] mobiles:text-[30px] text-[#b0d6ffcc]" />
            <h6 className="text-[24px] text-[#f4f4f4]">MileStone Migration & Target Tracking</h6>
            <p className="text-[#95979e] text-[15px]">Monitor your journey as you move through milestones and track key targets along the way.</p>
          </div>
          <div className="col-span-3 row-span-1 flex flex-col w-full items-start gap-2">
            <PiTimerFill className="text-[50px] mobiles:text-[30px] text-[#b0d6ffcc]" />
            <h6 className="text-[24px] text-[#f4f4f4]">Session Tracking & Pomodoro</h6>
            <p className="text-[#95979e] text-[15px]">Enhance your productivity with session tracking and Pomodoro sessions for deep focus.</p>
          </div>
          <div className="col-span-3 row-span-1 flex flex-col w-full items-start gap-2">
            <RiChatSearchFill className="text-[50px] mobiles:text-[30px] text-[#b0d6ffcc]" />
            <h6 className="text-[24px] text-[#f4f4f4]">24x7 Support <br /> for Lifetime</h6>
            <p className="text-[#95979e] text-[15px]">Receive constant assistance with 24/7 support, available for the lifetime of your plan.</p>
          </div>
          <div className="col-span-3 row-span-1 flex flex-col w-full items-start gap-2">
            <PiLinkFill className="text-[50px] mobiles:text-[30px] text-[#b0d6ffcc]" />
            <h6 className="text-[24px] text-[#f4f4f4]">Link & Sync Your Ecosystem Effortlessly</h6>
            <p className="text-[#95979e] text-[15px]">Effortlessly link and synchronize data across all your systems for real-time updates.</p>
          </div>
          <div className="col-span-3 row-span-1 flex flex-col w-full items-start gap-2">
            <PiDownloadFill className="text-[50px] mobiles:text-[30px] text-[#b0d6ffcc]" />
            <h6 className="text-[24px] text-[#f4f4f4]">Access & Quickly Export Reports</h6>
            <p className="text-[#95979e] text-[15px]">Instantly & Effortlessly retrieve and export reports for quick insights and decision-making.</p>
          </div>              

      </div>
      
      
    </div>
  );
};

export default Features;
