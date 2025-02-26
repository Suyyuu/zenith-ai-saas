import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import { LuShapes } from "react-icons/lu";
import { PiPuzzlePiece } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSlack } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { PiPenNib } from "react-icons/pi";
import { IoDocumentsOutline } from "react-icons/io5";
import { RxCountdownTimer } from "react-icons/rx";



const FlyoutMenu = () => {
  return (
    <div className="justify-center tabPlus:flex items-center gap-5 text-[rgb(138,138,138)] text-[16px] navItems font-Satoshi font-semibold hidden">
      <FlyoutLink href="#" FlyoutContent={ProductContent}>
        <h3 className="arrowAnimate flex items-center gap-1">Product <IoChevronDown className="arrowDown font-black text-[16px]"/></h3>
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={CommunityContent}>
        <h3 className="arrowAnimate flex items-center gap-1">Community <IoChevronDown className="arrowDown font-black text-[16px]"/></h3>
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={ResourcesContent}>
        <h3 className="arrowAnimate flex items-center gap-1">Resources <IoChevronDown className="arrowDown font-black text-[16px]"/></h3>
      </FlyoutLink>
      <FlyoutLink href="/Contact">
        <h3 className="arrowAnimate flex items-center gap-1">Contact</h3>
      </FlyoutLink>
      <FlyoutLink href="/pricing">
        <h3 className="arrowAnimate flex items-center gap-1">Pricing</h3>
      </FlyoutLink>
      
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative">
        {children}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-15%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-10"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-7 top-0 h-4 w-4  -translate-y-1/2 rotate-45 bg-[#101010] border-t border-l border-[#2e3038]" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductContent = () => {
  return (
    <div className="w-full bg-[#101010] border-[1px] border-[#2e3038] rounded-[15px] p-3 shadow-xl flex flex-col gap-2">
        <Link href="/#about" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
            <FiActivity className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px]"/>
            <div className="navItem flex justify-between w-full gap-5 items-center">
                <div className="flex flex-col">
                    <h3 className=" text-[#9a9a9a] text-[16px]">About</h3>
                    <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">What's the hype about?</p>
                </div>
                <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
            </div>
        </Link>
        <Link href="/#capabilities" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
            <IoSpeedometerOutline className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px]"/>
            <div className="navItem flex justify-between w-full gap-5 items-center">
                <div className="flex flex-col">
                    <h3 className=" text-[#9a9a9a] text-[16px]">Capabilities</h3>
                    <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">What can we do?</p>
                </div>
                <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
            </div>
        </Link>
        <Link href="/#features" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
            <LuShapes className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px]"/>
            <div className="navItem flex justify-between w-full gap-5 items-center">
                <div className="flex flex-col">
                    <h3 className=" text-[#9a9a9a] text-[16px]">Features</h3>
                    <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">What sets us apart?</p>
                </div>
                <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
            </div>
        </Link>
        <Link href="/#testimonials" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
            <MdOutlineRateReview className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px]"/>
            <div className="navItem flex justify-between w-full gap-5 items-center">
                <div className="flex flex-col">
                    <h3 className=" text-[#9a9a9a] text-[16px]">Testimonials</h3>
                    <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">What our users say?</p>
                </div>
                <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
            </div>
        </Link>
        <Link href="/#" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
            <PiPuzzlePiece className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px]"/>
            <div className="navItem flex justify-between w-full gap-5 items-center">
                <div className="flex flex-col">
                    <h3 className=" text-[#9a9a9a] text-[16px]">Integrations</h3>
                    <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">What are possibilities?</p>
                </div>
                <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
            </div>
        </Link>
    </div>
  );
};

const CommunityContent = () => {
    return (
        <div className="w-full bg-[#101010] border-[1px] border-[#2e3038] rounded-[15px] p-3 shadow-xl flex flex-col gap-2">
            <Link href="#" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
                <FaXTwitter className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px]"/>
                <div className="navItem flex justify-between w-full gap-5 items-center">
                    <div className="flex flex-col">
                        <h3 className=" text-[#9a9a9a] text-[16px]">X.com</h3>
                        <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">Follow for our latest news</p>
                    </div>
                    <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
                </div>
            </Link>
            <Link href="#" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
                <FaLinkedin className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px]"/>
                <div className="navItem flex justify-between w-full gap-5 items-center">
                    <div className="flex flex-col">
                        <h3 className=" text-[#9a9a9a] text-[16px]">Linkedin</h3>
                        <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">Get Updates</p>
                    </div>
                    <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
                </div>
            </Link>
            <Link href="#" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
                <FaYoutube className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px]"/>
                <div className="navItem flex justify-between w-full gap-5 items-center">
                    <div className="flex flex-col">
                        <h3 className=" text-[#9a9a9a] text-[16px]">Youtube</h3>
                        <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">Subscribe for tutorials</p>
                    </div>
                    <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
                </div>
            </Link>
            <Link href="#" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
                <FaSlack className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px]"/>
                <div className="navItem flex justify-between w-full gap-5 items-center">
                    <div className="flex flex-col">
                        <h3 className=" text-[#9a9a9a] text-[16px]">Slack</h3>
                        <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">Join the conversation</p>
                    </div>
                    <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
                </div>
            </Link>
            <Link href="#" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
                <FaGithub className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px]"/>
                <div className="navItem flex justify-between w-full gap-5 items-center">
                    <div className="flex flex-col">
                        <h3 className=" text-[#9a9a9a] text-[16px]">Github</h3>
                        <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">Leave us a star</p>
                    </div>
                    <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
                </div>
            </Link>
            <Link href="#" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
                <FaDiscord className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px]"/>
                <div className="navItem flex justify-between w-full gap-5 items-center">
                    <div className="flex flex-col">
                        <h3 className=" text-[#9a9a9a] text-[16px]">Discord</h3>
                        <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">Join the community</p>
                    </div>
                    <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
                </div>
            </Link>
        </div>
    )
}

const ResourcesContent = () => {
    return (
        <div className="w-full bg-[#101010] border-[1px] border-[#2e3038] rounded-[15px] p-3 shadow-xl flex flex-col gap-2">
            <Link href="/" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
                <PiPenNib className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px]"/>
                <div className="navItem flex justify-between w-full gap-5 items-center">
                    <div className="flex flex-col">
                        <h3 className=" text-[#9a9a9a] text-[16px]">Blog</h3>
                        <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">Read our latest insights</p>
                    </div>
                    <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
                </div>
            </Link>
            <Link href="/" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
                <IoDocumentsOutline className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px]"/>
                <div className="navItem flex justify-between w-full gap-5 items-center">
                    <div className="flex flex-col">
                        <h3 className=" text-[#9a9a9a] text-[16px]">Docs</h3>
                        <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">Explore our tutorials</p>
                    </div>
                    <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
                </div>
            </Link>
            <Link href="/" className=" flex items-center gap-5 font-semibold hover:bg-[#16181d] transition-all duration-300 p-1 rounded-[15px]">
                <RxCountdownTimer className="bg-[#16181d] border-[1px] border-[#2e3038] text-[40px] p-2 rounded-[10px] -scale-y-[1]"/>
                <div className="navItem flex justify-between w-full gap-5 items-center">
                    <div className="flex flex-col">
                        <h3 className=" text-[#9a9a9a] text-[16px]">Changelog</h3>
                        <p className="text-[#797d86] text-[14px] font-extralight text-nowrap">See what's new</p>
                    </div>
                    <IoChevronForwardOutline className='text-[16px] font-light navArrow'/>
                </div>
            </Link>
        </div>
    )
}

export default FlyoutMenu;