"use client"

import Image from "next/image";
import React, { useState } from "react";
import { MdAddTask } from "react-icons/md";
import { BiCopy } from "react-icons/bi";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { PiMicrophone } from "react-icons/pi";


const BentoGrid = () => {
  // bg-custom-gradient bg-custom-gradient-size
  const [activeVariant, setActiveVariant] = useState(1); // Default to variant 1

  const handleButtonClick = (variantNumber) => {
    setActiveVariant(variantNumber);
  };
  return (
    <div id="capabilities" className="w-full flex flex-col gap-12 pb-20">
      <div className="  w-[80%] mobiles:w-[90%] custom:w-[90%] max-w-[1080px] mx-auto grid grid-cols-12 grid-rows-8 border-2 border-[#ffffff0d]">
        {/* Card1 */}

        <div className=" col-span-6 row-span-2 mobiles:col-span-12 mobiles:row-span-1 mobiles:p-4 py-12 px-14 font-host-grotesk border-2 border-[#ffffff0d] ">
          <h4 className="text-[#f7f8f8] text-[24px] mobiles:text-[17px] leading-7 pb-1 font-medium">
            Manage projects end-to-end
          </h4>
          <p className="text-[#8a8f98] text-[17px] mobiles:text-[12px] leading-6 pb-8 text-balance">
            Consolidate specs, milestones, tasks, and other documentation in one
            centralized location.
          </p>

          <div
            className="[mask-image:linear-gradient(to_bottom,white_20%,white_60%,transparent)] w-full overflow-hidden rounded-[10px]"
            style={{
              background:
                "linear-gradient(134deg, hsla(0, 0%, 100%, .08), hsla(0, 0%, 100%, .02), hsla(0, 0%, 100%, 0) 55%)",
            }}
          >
            <img
              className="[mask-image:linear-gradient(to_right,white_20%,white_40%,transparent)]"
              src="/b1.png"
              alt=""
            />
          </div>
        </div>

        {/* card 2 */}

        <div className="col-span-6 row-span-2 mobiles:col-span-12 mobiles:row-span-1 mobiles:p-4 mobiles:overflow-hidden py-12 px-14 font-host-grotesk border-2 border-[#ffffff0d] ">
          <h4 className="text-[#f7f8f8] text-[24px] mobiles:text-[17px] leading-7 pb-1 font-medium">
            Project updates
          </h4>
          <p className="text-[#8a8f98] text-[17px] mobiles:text-[12px] leading-6 pb-8 text-balance">
            Communicate progress and project health with built-in project
            updates.
          </p>
          <div className="relative w-full h-80">
            <div className="absolute top-10 bg-[#10101044] grayscale scale-[1] mobiles:scale-[.8] backdrop-blur-[20px] rounded-[20px] [mask-image:linear-gradient(to_right,white_20%,white_70%,transparent)] -skew-y-12 skew-x-1 translate-x-0 translate-y-0 hover:grayscale-0 hover:-translate-y-6 transition-all duration-300 ease-in">
              <img
                className="w-full h-full backdrop-blur-[20px] "
                src="/card3.png"
                alt="cardImage"
              />
            </div>
            <div className="absolute top-10 bg-[#10101044] grayscale scale-[1] mobiles:scale-[.8] backdrop-blur-[20px] rounded-[20px] [mask-image:linear-gradient(to_right,white_20%,white_70%,transparent)] -skew-y-12 skew-x-1 translate-x-10 translate-y-10 hover:grayscale-0 hover:translate-y-4 transition-all duration-300 ease-in">
              <img
                className="w-full h-full backdrop-blur-[20px]"
                src="/card2.png"
                alt="cardImage"
              />
            </div>
            <div className="absolute top-10 bg-[#10101044] scale-[1] mobiles:scale-[.8] backdrop-blur-[20px] rounded-[20px] [mask-image:linear-gradient(to_right,white_20%,white_70%,transparent)] -skew-y-12 skew-x-1 translate-x-20 translate-y-20 hover:grayscale-0 hover:translate-y-14 transition-all duration-300 ease-in">
              <img
                className="w-full h-full backdrop-blur-[20px]"
                src="/card1.png"
                alt="cardImage"
              />
            </div>
          </div>
        </div>

        {/* card 3 */}

        <div className=" col-span-6 row-span-2 mobiles:col-span-12 mobiles:row-span-1 mobiles:p-4 py-12 px-14 font-host-grotesk border-2 border-[#ffffff0d] ">
          <h4 className="text-[#f7f8f8] text-[24px] mobiles:text-[17px] leading-7 pb-1 font-medium">
            Manage projects end-to-end
          </h4>
          <p className="text-[#8a8f98] text-[17px] mobiles:text-[12px] leading-6 pb-8 text-balance">
            Consolidate specs, milestones, tasks, and other documentation in one
            centralized location.
          </p>

          <div
            className="[mask-image:linear-gradient(to_bottom,white_20%,white_60%,transparent)] w-full overflow-hidden rounded-[10px]"
            style={{
              background:
                "linear-gradient(134deg, hsla(0, 0%, 100%, .08), hsla(0, 0%, 100%, .02), hsla(0, 0%, 100%, 0) 55%)",
            }}
          >
            <img
              className="[mask-image:linear-gradient(to_right,white_20%,white_40%,transparent)]"
              src="/b2.png"
              alt=""
            />
          </div>
        </div>

        {/* card 4 */}

        <div className=" col-span-6 row-span-2 mobiles:col-span-12 mobiles:row-span-1 mobiles:p-4 py-12 px-14 font-host-grotesk border-2 border-[#ffffff0d]">
          <h4 className="text-[#f7f8f8] text-[24px] mobiles:text-[17px] leading-7 pb-1 font-medium">
            Streamline Task Management
          </h4>
          <p className="text-[#8a8f98] text-[17px] mobiles:text-[12px] leading-6 pb-8 text-balance">
            Effectively review, prioritize, and delegate unplanned work for
            optimal Workflow
          </p>

          <div
            className=" relative [mask-image:linear-gradient(to_bottom,white_20%,white_70%,transparent)] w-full overflow-hidden rounded-[10px]"
            style={{
              background:
                "linear-gradient(134deg, hsla(0, 0%, 100%, .08), hsla(0, 0%, 100%, .02), hsla(0, 0%, 100%, 0) 85%)",
            }}
          >
            <img
              className="[mask-image:linear-gradient(to_right,white_20%,white_50%,transparent)]"
              src="/b3.png"
              alt=""
            />

            <div className=" absolute z-100000 bg-[#212121] cursor-default font-host-grotesk min-w-[180px] mobiles:min-w-[150px] top-[103px] mobiles:top-[90px] left-[10rem] mobiles:left-[140px] rounded-[10px] p-1 border  border-[#ffffff2a]">
              <div className="flex justify-start items-center gap-2 text-[#8a8f98] hover:text-[#f7f8f8] hover:bg-[#ffffff28] text-[14px] mobiles:text-[10px] rounded-[5px] px-1 py-[6px]">
                <MdAddTask className="text-[19px] mobiles:text-[14px]" />
                <span>Accept</span>
              </div>
              <div className="flex justify-start items-center gap-2 text-[#8a8f98] hover:text-[#f7f8f8] hover:bg-[#ffffff28] text-[14px] mobiles:text-[10px] rounded-[5px] px-1 py-[6px]">
                <BiCopy className="text-[19px] mobiles:text-[14px]" />
                <span>Mark as duplicate</span>
              </div>
              <div className="flex justify-start items-center gap-2 text-[#8a8f98] hover:text-[#f7f8f8] hover:bg-[#ffffff28] text-[14px] mobiles:text-[10px] rounded-[5px] px-1 py-[6px]">
                <MdOutlineCancelPresentation className="text-[19px] mobiles:text-[14px]" />
                <span>Decline</span>
              </div>
            </div>
          </div>
        </div>

        {/* card 5 */}

        <div className="col-span-12 row-span-2 py-12 px-14 mobiles:p-4 mobiles:h-full mobiles:overflow-hidden font-host-grotesk border-2 border-[#ffffff0d]">
          <div className="w-full flex mobiles:flex-col mobiles:gap-10 justify-between">
            <div className="flex flex-col gap-3 mt-[64px] mobiles:mt-0">
              <h4 className="text-[24px] mobiles:text-[17px] tracking-tighter leading-8 text-[#f7f7f8]">
              Conceptualize and define <br className="mobiles:hidden" /> your next solution
              </h4>
              <div className="flex flex-col leading-tight">
                <button
                  className={`flex justify-start items-center gap-3 text-[17px] mobiles:text-[14px] text-[#f7f7f8] `}
                  onClick={() => handleButtonClick(1)}
                >
                  <span className={`text-[30px] mobiles:text-[22px] font-bold ${activeVariant === 1 ? 'text-green-500' : ''}`}>|</span>
                  <span>Collaborative workspaces</span>
                </button>
                <button
                  className={`flex justify-start items-center gap-3 text-[17px] mobiles:text-[14px] text-[#f7f7f8] `}
                  onClick={() => handleButtonClick(2)}
                >
                  <span className={`text-[30px] mobiles:text-[22px] font-bold ${activeVariant === 2 ? 'text-green-500' : ''}`}>|</span>
                  <span>Contextual remarks</span>
                </button>
                <button
                  className={`flex justify-start items-center gap-3 text-[17px] mobiles:text-[14px] text-[#f7f7f8] `}
                  onClick={() => handleButtonClick(3)}
                >
                  <span className={`text-[30px] mobiles:text-[22px] font-bold ${activeVariant === 3 ? 'text-green-500' : ''}`}>|</span>
                  <span>Text-activated issue creation</span>
                </button>
              </div>
            </div>

            <div className="[mask-image:linear-gradient(to_bottom,white_20%,white_80%,transparent)] w-[516px] h-[474px] mobiles:w-[360px] overflow-hidden rounded-[10px] bg-productTab bg-cover bg-no-repeat flex flex-col">
              {/* variant 1 */}
              {activeVariant === 1 && (
                <div className="max-w-[360px] mobiles:w-[280px] mx-auto mt-[100px] flex flex-col gap-4">
                  <HiUsers className="w-[36px] h-[36px] rounded-[8px] p-1 bg-[#68cc5833] text-[#2c901c]" />
                  <span className="text-[17px] text-[#f7f8f8]"><span className="bg-[#68cc5833] border border-[#2c901c] rounded-l-[4px]">Collaborate on</span> ideas</span>
                  <span className="text-[15px] text-[#8a8f98] leading-6 tracking-tight">
                    Write down product ideas and work together on feature specs in realtime, multiplayer project documents. Add **style** and ##structure with rich-text formatting options.
                  </span>
                  <img src="/blankText.svg" alt="" />
                </div>
              )}

              {/* variant 2 */}
              {activeVariant === 2 && (
                <div className="max-w-[360px] mobiles:w-[280px] mx-auto mt-[100px] flex flex-col gap-4">
                  <HiOutlineChatBubbleOvalLeft className="w-[36px] h-[36px] rounded-[8px] p-1 bg-[#68cc5833] text-[#2c901c]" />
                  <span className="text-[17px] text-[#f7f8f8]"><span className="bg-[#68cc5833] border border-[#2c901c] rounded-l-[4px]">work on</span> ideas</span>
                  <span className="text-[15px] text-[#8a8f98] leading-6 tracking-tight">
                    Write down product ideas and work together on feature specs in realtime, multiplayer project documents. Add **style** and ##structure with rich-text formatting options.
                  </span>
                  <img src="/blankText.svg" alt="" />
                </div>
              )}

              {/* variant 3 */}
              {activeVariant === 3 && (
                <div className="max-w-[360px] mobiles:w-[280px] mx-auto mt-[100px] flex flex-col gap-4">
                  <MdFormatListBulletedAdd className="w-[36px] h-[36px] rounded-[8px] p-1 bg-[#68cc5833] text-[#2c901c]" />
                  <span className="text-[17px] text-[#f7f8f8]"><span className="bg-[#68cc5833] border border-[#2c901c] rounded-l-[4px]">Think on</span> ideas</span>
                  <span className="text-[15px] text-[#8a8f98] leading-6 tracking-tight">
                    Write down product ideas and work together on feature specs in realtime, multiplayer project documents. Add **style** and ##structure with rich-text formatting options.
                  </span>
                  <img src="/blankText.svg" alt="" />
                </div>
              )}
            </div>
            <div className="hidden mobiles:flex flex-col gap-3">
              <h4 className="text-[24px] text-[#f7f8f8]">Instant Access to Expertise</h4>
              <h6 className="bg-[#3e484c52] text-[17px] text-[#f7f8f895]">Documents provide a platform for sharing resources with team, collaborating on strategies, storing meeting notes, and assigning tasks.</h6>
            </div>
            
          </div>
        </div>

        {/* card 6 */}

        <div className="col-span-4 row-span-2 py-2 px-4 mobiles:col-span-12 mobiles:row-span-1 mobiles:p-4 mobiles:h-full mobiles:overflow-hidden font-host-grotesk border-2 border-[#ffffff0d]">

          <div className="w-full h-full">
            <div className=" h-full flex flex-col justify-around text-center parentStack rounded-[10px]">
              <div className=" relative h-[full] w-full px-10 py-28 mobiles:pl-6 flex justify-center items-center flex-row-reverse">
                <img className=" cursor1 absolute top-8 left-12 h-[40px] w-auto" src="/cursor1.png" alt="cursor" />
                <img className=" cursor2 absolute top-12 left-48 h-[40px] w-auto" src="/cursor2.png" alt="cursor" />
                <img className=" cursor3 absolute bottom-16 left-2 h-[40px] w-auto" src="/cursor3.png" alt="cursor" />

                <div className="relative h-[80px] w-[80px]">
                  <div className="hide absolute h-[70px] w-[70px] p-2 rounded-full bg-[#212121] text-[#f7f8f8] flex justify-center items-center text-[32px] -mr-6 z-1 scale-100 transition-all duration-1000"><BsThreeDots /></div>
                  <img className="Show absolute h-full w-full p-2 bg-[#000000] border-[1px] border-[#30b990] rounded-full object-cover -mr-6" src="/c26.jpeg" alt="profilePic" />
                </div>

                <img className="h-[80px] w-[80px] p-2 bg-[#000000] border-[1px] border-[#3f95ff] rounded-full object-cover -mr-6" src="/c24.jpeg" alt="Image" />
                <img className="h-[80px] w-[80px] p-2 bg-[#000000] border-[1px] border-[#7155ff] rounded-full object-cover -mr-6" src="/c21.jpeg" alt="Image" />
                <img className="h-[80px] w-[80px] p-2 bg-[#000000] border-[1px] border-[#ff4bac] rounded-full object-cover -mr-6" src="/c23.jpeg" alt="Image" />
              </div>

              <div className="flex flex-col text-center">
                <h4 className="text-[24px] text-[#f7f8f8] px-2">Growth in sync.</h4>
                <p className="text-[17px] text-[#f7f8f895] px-2">Collaborate with your team in real time to create, analyze, and scale your product for massive growth.</p>
              </div>
            </div>
          </div>

        </div>

        {/* card 7 */}

        <div className="col-span-4 row-span-2 py-2 px-4 mobiles:col-span-12 mobiles:row-span-1 mobiles:p-4 mobiles:h-full mobiles:overflow-hidden font-host-grotesk border-2 border-[#ffffff0d]">
          <div className="w-full h-full flex flex-col justify-around">

            <div className="w-[90%] mx-auto border border-[#232323] rounded-[10px] flex flex-col py-5 gap-5 overflow-hidden [mask-image:linear-gradient(to_right,white_20%,white_80%,transparent)]"
              style={{
                background:
                  "linear-gradient(134deg, hsla(0, 0%, 100%, .08), hsla(0, 0%, 100%, .02), hsla(0, 0%, 100%, 0) 55%)",
              }}>
              <div className="ml-11 w-full">
                <img src="/todo1.png" alt="todo1" />
              </div>
              <div className="w-full">
                <img src="/todo2.png" alt="todo2" />
              </div>
              <div className=" w-full ml-7">
                <img src="/todo3.png" alt="todo3" />
              </div>
            </div>

            <div className="flex flex-col text-center">
              <h4 className="text-[24px] text-[#f7f8f8] leading-tight px-2 text-balance">Create and organize tasks</h4>
              <p className="text-[17px] text-[#f7f8f895] px-2">schedule your events, manage your tasks and prioritize your to-dos with ease.</p>
            </div>

          </div>
          
        </div>

        {/* card 8 */}

        <div className="col-span-4 row-span-2 py-2 px-4 mobiles:col-span-12 mobiles:row-span-1 mobiles:p-4 mobiles:h-full mobiles:overflow-hidden font-host-grotesk border-2 border-[#ffffff0d]">
          <div className="w-full h-full rounded-[10px] flex flex-col justify-around mobiles:gap-3 items-center micWork overflow-hidden cursor-default">
            <div className="relative micContainer w-fit rounded-full border-b-[rgba(176,214,255,0.8)]">
              <div id="circle1" className=" absolute h-full w-full border border-[rgba(176,214,255,0.8)] rounded-full scale-[5]"></div>
              <div id="circle2" className=" absolute h-full w-full border border-[rgba(176,214,255,0.8)] rounded-full scale-150"></div>
              <div id="circle3" className=" absolute h-full w-full border border-[rgba(176,214,255,0.8)] rounded-full scale-150"></div>
              <PiMicrophone id="micIcon" className="text-[96px] p-4 text-[#f7f8f895] bg-[#101010] rounded-full border-t border-l border-r border-b-4 border-[#ffffff] " />
            </div>
            
            <div className="w-full px-7">
              <img src="/messageCard.png" alt="" />
            </div>

            <div className="flex flex-col text-center">
              <h4 className="text-[24px] text-[#f7f8f8] leading-tight px-2">Connect in an instant.</h4>
              <p className="text-[17px] text-[#f7f8f895] px-2">Stay in the loop with your team, set milestones, track progress, and get real-time updates.</p>
            </div>

              {/* <div className="w-full leading-tight flex ">
                <div className="flex flex-col w-full items-center gap-2">
                  <RiLayoutMasonryFill className="text-[28px] text-[#b0d6ffcc]" />
                  <h6 className="text-[14px] text-[#f7f8f890]">Customize Workspace</h6>
                </div>
                <div className="flex flex-col w-full items-center gap-2">
                  <FaVideo className="text-[28px] text-[#b0d6ffcc]" />
                  <h6 className="text-[14px] text-[#f7f8f890]">FaceTime & Audio Calls</h6>
                </div>
                <div className="flex flex-col w-full items-center gap-2">
                  <BsPersonFillAdd className="text-[28px] text-[#b0d6ffcc]" />
                  <h6 className="text-[14px] text-[#f7f8f890]">Add people, Build Network</h6>
                </div>
              </div> */}
          
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default BentoGrid;
