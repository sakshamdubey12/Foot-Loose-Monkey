// components/Button.js

import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Navbar from '@/components/home/Navbar';
export default function Mimicry() {
  return (
    <div className='bg-[#E0F7FA]'>
        <div className="bg-[#004873]">
            <Navbar/>
        </div>
      <h2 className="text-6xl text-center font-bold mb-20 my-8">Mimicry</h2>
      <div className="flex ml-14">
        <div>
          <div className="mt-8">
            <h3 className="text-3xl text-sky-700 font-bold">Unleash Your Inner Performer with Mimicry!</h3>
          <p className='text-2xl mt-16 mx-8'>Do you have a knack for imitating voices, sounds, or even your favorite characters? Join our Mimicry competition and show off your unique talent! Whether it's a famous celebrity, a cartoon character, or any funny sound, we want to see your best impersonations.</p>
          </div>
          <div className="mt-8">
            <p className="mt-16 text-2xl ">
            Mimicry is all about creativity, humor, and originality. This is your chance to make everyone laugh, impress the judges, and win exciting prizes. Don't miss out on this fun opportunity to showcase your talent!
            </p>

            <p className='mt-20 text-2xl'>Register today and let your voice be heard!</p>
            <button className="mt-8 ml-40 font-bold py-2 px-4 rounded">
              <Image
                src="/registerbtn.png"
                alt="Dancer"
                width={250}
                height={250}
              />
            </button>
          </div>
        </div>
        <Image
          src="/mimicry.png"
          alt="Dancer"
          width={600}
          height={600}
          className="-my-20"
        />
      
      </div>
      <div className="mt-8">
            <h3 className="text-3xl text-center font-bold">
              Our <span className="text-sky-700">Winners</span>
            </h3>
            <div className="flex mt-24 gap-14 justify-center">
              {/* Replace these divs with actual winner images and details */}
              <div className="bg-gray-200 h-32 w-32"></div>
              <div className="bg-gray-200 h-32 w-32"></div>
              <div className="bg-gray-200 h-32 w-32"></div>
              <div className="bg-gray-200 h-32 w-32"></div>
              <div className="bg-gray-200 h-32 w-32"></div>
            </div>
            <div className="flex justify-end mr-24">
              <button className="mt-4  py-2 px-4 rounded">
                <Image
                  src="/seeMore.png"
                  alt="Dancer"
                  width={150}
                  height={150}
                />
              </button>
            </div>
          </div>
          <footer className="bg-sky-900 text-white py-4 h-[230px] mt-11">
        <div className="container mx-auto text-center">
          <Image src="/logo.png" alt="Dancer" width={60} height={60} />
        </div>
      </footer>
    </div>
  );
}
