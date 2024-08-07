"use client";
import Image from "next/image";
import React from "react";
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const About = () => {
  const texts = ["Singing", "Dancing", "Acting", "Mimicry"];4

  useEffect(() => {
    AOS.init({
      offset: 200, 
    });
  }, []);

  return (
    <div className="bg-[#ACFF9F] opacity-[80%] h-[2500px] w-full relative">
      <Image data-aos="fade-up" data-aos-delay="500" src="/bg.png" layout="fill" objectFit="cover" className="z-1 "/>
      <h1 data-aos="fade-up" className="text-[40px] text-[#474FFF] text-center pt-14">About</h1>
      <div data-aos="fade-down" data-aos-delay="1000" className="ml-20 mt-12">
        <h1 className="text-3xl font-semibold">
          Welcome to Foot Loose Monkey!
        </h1>
        <p className="mt-6 text-lg font-semibold">
          At Foot Loose Monkey, we believe in the incredible potential of every
          child. Our platform is dedicated to uncovering and nurturing young
          talents in the most engaging and fun way possible. Here's everything
          you need to know about us:{" "}
        </p>
      </div>
      <div data-aos="fade-down" data-aos-delay="1200" className="ml-20 mt-12">
        <h1 className="text-3xl font-semibold">Our Mission</h1>
        <p className="mt-6 text-lg font-semibold">
          Our mission is simple yet powerful: To provide a stage for young stars
          to shine. We aim to create a supportive and inspiring environment
          where children aged 6 to 12 can showcase their talents, build
          confidence, and experience the joy of performing.
        </p>
      </div>
      <div className="mt-12">
        <h1 data-aos="zoom-out" data-aos-delay="1500" className="text-3xl font-semibold text-center">What We Offer</h1>
        <p data-aos="fade-down" data-aos-delay="1600" className="mt-6 text-lg font-semibold text-center">
          Foot Loose Monkey is an ultimate kids' talent competition platform
          that focuses on four major categories:
        </p>
      </div>
      <div className="flex flex-row items-center mt-16 gap-14 justify-center">
        {texts.map((text,key)=>(
          <div data-aos={key<=1?"fade-right":"fade-left"} data-aos-delay="1700" className="flex justify-center items-center rounded-full bg-[#004873] w-[266px] h-[45px]">
            <p className="text-white text-lg">{text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-52 mt-[34px]">
      {texts.filter(text => text === "Dancing" || text === "Acting").map((text,key)=>(
          <div data-aos={key%2==0?"fade-right":"fade-left"} data-aos-delay="1700" className="flex justify-center items-center rounded-full bg-[#004873] w-[266px] h-[45px]">
            <p className="text-white text-lg">{text}</p>
          </div>
        ))}
      </div>
      <p data-aos="fade-down"  className="text-center mt-9 font-semibold text-lg">
        Children can express their creativity through these varied forms of art
        and compete for exciting prizes.
      </p>
      <div className="ml-20 mt-14">
        <h1 data-aos="zoom-out-left" data-aos-delay="1800" data-aos-duration="800" className="text-3xl font-semibold">Why Choose Us?</h1>
        <div className="flex">
        <div className="w-[862px] mx-16 mt-6 text-lg font-semibold">
        <ul data-aos="fade-right" data-aos-delay="2200" className="list-disc">
          <li className="mt-10 ">
            Fun and Encouraging Atmosphere: Our platform is designed to be a fun
            and encouraging space where children can freely express their
            talents without any pressure.
            </li>
            <li className="mt-10">
              Skill Development: Participants receive valuable feedback from
              experienced judges, helping them to refine their skills and grow
              as performers.
            </li>
            <li className="mt-10">
              Inclusive and Diverse: We welcome children from all backgrounds
              and abilities, fostering a spirit of inclusivity and celebration
              of diversity.
            </li>
            <li className="mt-10">
              Exciting Prizes: Participants stand a chance to win fantastic
              prizes that acknowledge and reward their efforts and talents.
            </li>
          
        </ul>
        </div>
        <Image data-aos="fade-left" data-aos-delay="2200" src="/offer-img.png" width={282} height={324}/>
        </div>
      </div>

      <div className="ml-20 mt-14">
        <div className="flex">
        <Image data-aos="fade-right"  src="/how-it-work-img.png" width={444} height={291}/>
        <div className="w-[862px] mx-16 mt-6 text-lg font-semibold">
        <h1 data-aos="zoom-out"  className="text-3xl font-semibold">How It Works?</h1>
        <ul data-aos="fade-left" className="b">
          <li className="mt-10 ">
            1. Register: Sign up on our platform with a simple registration process.
            </li>
            <li className="mt-10">
              2. Prepare: Practice and perfect your performance.
            </li>
            <li className="mt-10">
              3. Record: Create a video of your performance, ranging from 60 to 90 seconds
            </li>
            <li className="mt-10">
              4. Submit: Upload your video and join the competition.
            </li>
          
        </ul>
        </div>
        </div>
      </div>

      <div className="ml-20 mt-16">
        <h1 data-aos="zoom-out" className="text-3xl font-semibold">Age Categories</h1>
        <div className="flex">
        <div className="w-[862px] mx-16 mt-6 text-lg font-semibold">
        <ul data-aos="fade-right" className="list-disc">
        We have structured the competition to be fair and age-appropriate. The age ranges are divided into:
          <li className="mt-10 ">
            6 to 10 years
            </li>
            <li className="mt-10">
              10 to 15 years
            </li>
            <li className="mt-10">
              15 to 20 years
            </li>         
        </ul>
        </div>
        <Image data-aos="fade-left" src="/age-category.png" width={663} height={235} className="pr-8"/>
        </div>
      </div>

        <div className="flex mt-20">
          <Image data-aos="fade-right" src="/join-us.png" width={399} height={292} className="ml-32"/>
          <div className="flex-col ml-32">
            <h1 data-aos="zoom-out" className="text-3xl text-[#003470] font-semibold">Join Us</h1>
            <p data-aos="fade-left"  className="mt-6 font-semibold">At Foot Loose Monkey, every child is a star. We invite you to join us in this exciting journey of discovering and celebrating young talents. Let your child's imagination and creativity soar as they step into the spotlight! </p>
            <Image data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" src="/register-btn.png" width={292} height={39} className="ml-72 mt-9"/>
          </div>
        </div>

    </div>
  );
};

export default About;
