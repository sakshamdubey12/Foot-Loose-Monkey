"use client";
import About from "@/components/home/About";
import Certificate from "@/components/home/Certificate";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import Talent from "@/components/home/Talent";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import { Clapperboard } from "lucide-react";
// ..

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="overflow-x-hidden">
    <Hero/>
    <Mission/>
    <Talent/>
    <Certificate/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  );
}
