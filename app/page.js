import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroText from "./components/HeroText";
import Clients from "./components/Clients";
import About from "./components/About";
import BentoGrid from "./components/BentoGrid";
import Numbers from "./components/Numbers";
import Features from "./components/Features";
import MarqueeSection from "./components/MarqueeSection";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
      <div className="h-full w-full bg-[#000000] ">

        

        <div className="bg-transparent h-full w-full">

          {/* Gradient for Landing Section */}
        {/* <div className="circlePosition w-[590px] h-[400px] bg-[rgb(87,16,181)] rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[200px]">
          </div> */}

          <Navbar />
          <HeroText />
          <Clients />
          <About />
          <BentoGrid />
          <Numbers />
          <Features />
          <MarqueeSection />
          <Blogs />
          <Footer />
        </div>
      </div>
    </>
  );
}
