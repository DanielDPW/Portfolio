import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className= "min-h-screen">
      <div className= "max-w-7xl mx-auto">
        <Navbar/>
        <Hero/>
        <div className= "mt-20">
          <Skills/>
        </div>
        <div className= "mt-20">
          <Projects/>
        </div>
      </div>
    </div>
  );
}
