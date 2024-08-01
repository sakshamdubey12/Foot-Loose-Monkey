"use client"
import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() => {
    AOS.init({
      offset: 200, 
    });
  }, []);


  return (
    <div className='bg-white flex flex-col items-center w-full mb-7 mt-20'>
      <h1 data-aos="zoom-out" data-aos-duration="800" className='text-3xl text-[#003470] font-semibold'>Contact Us</h1>
      <p data-aos="fade-down" data-aos-delay="500" data-aos-duration="800" className='text-lg mt-3 font-semibold'>For more information or any queries, feel free to reach out to us at:</p>
      <div className="flex flex-row mt-10 gap-96">
        <div className="flex flex-col items-center">
          <Image data-aos="zoom-out-right" data-aos-delay="800" src="/call-logo.png" width={57} height={52.11}/>
          <p data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-offset="0" data-aos-delay="1000" className='mt-5 text-lg font-semibold'>+91 1234567890</p>
        </div>
        <div className="flex flex-col items-center">
          <Image data-aos="zoom-out" data-aos-delay="800" src="/message-logo.png" width={81} height={52.11}/>
          <p data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-offset="0" data-aos-delay="1000" className='mt-5 text-lg font-semibold'>footloosemonkey@gmail.com</p>
        </div>
        <div className="flex flex-col items-center">
          <Image data-aos="zoom-out-left" data-aos-delay="800" src="/insta-logo.png" width={57} height={52.11}/>
          <p data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-offset="0" data-aos-delay="1000" className='mt-5 text-lg font-semibold'>@footloosemonkey</p>
        </div>
      </div>
    </div>
  )
}

export default Contact