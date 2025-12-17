import Header from "@/components/layouts/Header";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import Research from "@/components/sections/Research";
import Image from "next/image";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Capabilities/>
        <Solutions/>
        <Research/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
