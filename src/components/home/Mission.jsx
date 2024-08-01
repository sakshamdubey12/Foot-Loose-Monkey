"use client"
import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Mission = () => {

  useEffect(() => {
    AOS.init({
      offset: 200, 
    });
  }, []);

  return (
    <div className=' w-full h-[729px]'>
      <div className='flex flex-row items-center'>
      <Image data-aos="zoom-in" data-aos-delay="1000" src="/mission.png" width={654} height={401} className='ml-[76px] mt-44'/>
      <div className='mx-16 pt-12'>
        <h1 data-aos="zoom-out" className='text-[35px] font-semibold mb-6'>Our Mission</h1>
        <p data-aos="fade-left" data-aos-delay="1000" className=''>Welcome to Foot Loose Monkey, where young stars shine bright! Our mission is to provide a fun, safe, and inspiring platform for children aged 6 to 10 to showcase their talents in singing, dancing, acting, mimicry, and more. At Foot Loose Monkey, we believe every child is unique and talented in their own way, and we are here to celebrate and nurture that talent. Join us in our exciting competitions, make new friends, and discover your amazing potential!</p>
        <Image data-aos="zoom-out" data-aos-duration="800" data-aos-delay="1000" src="/register-mission.png" width={292} height={39} className='mt-10'/>
      </div>
      </div>
    </div>
  )
}

export default Mission