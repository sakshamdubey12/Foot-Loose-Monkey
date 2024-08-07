"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="relative flex flex-col w-full h-[729px] bg-[#E5C3FF] opacity-[80%]">
      <Navbar />
      <div data-aos="zoom-in" className="mt-[87px] ml-20 absolute">
        <h1 className="text-4xl font-semibold">
          Foot <span className="text-[#01C4FA]"> Loose</span> Monkey
        </h1>
      </div>
      <div data-aos="zoom-out-left" data-aos-delay="1000">
        <p className="mt-16 ml-20 text-base text-[#01C4FA] font-semibold">
          Lights,Camera,talent. your videos is just a stage away !
        </p>
      </div>
      <div className="ml-20 mt-20 flex flex-row justify-between">
        <h1
          data-aos="fade-left"
          data-aos-delay="2000"
          className="pb-6 text-[25px] text-[#003470]"
        >
          Shows that We Accepted
        </h1>
      </div>
      <div className="flex flex-col w-[50%]">
        <p className="ml-20 font-semibold" data-aos="fade-right" data-aos-delay="3000"> 
          Welcome to Foot Loose Monkey, the ultimate kids' talent competition
          platform! Young stars aged 5 to 15 can showcase their talents in
          dancing, singing, acting, and more. Our mission is to provide a fun,
          encouraging environment where children can express their creativity,
          build confidence, and compete for exciting prizes. Join us in
          celebrating the vibrant talents of our young performers. Register
          today and start discovering hidden talents!
        </p>
        <Image
          data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-delay="4000"
          src="/register-hero.png"
          width={292}
          height={39}
          className="ml-44 mt-12"
        />
      </div>
      <Image
        data-aos="zoom-in"
        data-aos-delay="2000"
        src="/hero.png"
        width={731}
        height={480}
        className="absolute top-56 right-4"
      />
    </div>
  );
};

export default Hero;
