import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className= "min-h-[400vh]">
      <div className= "max-w-7xl mx-auto">
        <Navbar/>
        <Hero/>
        <div className= "mt-20">
          <Skills/>
        </div>
        
      </div>
    </div>
  );
}
