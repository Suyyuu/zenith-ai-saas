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
