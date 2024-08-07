"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';


const Talent = () => {
  const router = useRouter();
  const texts = ["Singing", "Dancing", "Mimicry", "Acting", "Poetry", "Drawing"];
  const handleNavigate=(text)=>{
    router.push(`/${text.toLowerCase()}`);
  }

  useEffect(() => {
    AOS.init({
      offset: 100, 
    });
  }, []);

  return (
    <div className='h-[729px] w-full bg-[#4B53FF] opacity-[80%]'>
      <h1 data-aos="zoom-out" className=' text-[40px] pt-14 text-center'>Showcase your <span className='text-[#01C4FA]'>Talent</span></h1>
      <div className="grid grid-cols-2 justify-items-center mt-16 gap-14">
        {texts.map((text, index) => (
          <>
          <div data-aos={index%2==0?"fade-right":"fade-left"} data-duration="800" key={index} onClick={() => handleNavigate(text)} className="relative w-[392px] h-[39px]">
            <Image src="/blue-button.png" width={292} height={63} layout="responsive" objectFit="cover"  />
            <p className="absolute inset-0 flex items-center justify-center text-white text-3xl top-1.5 mx-auto">{text}</p>
          </div>
        </>
        ))}
      </div>
      <h1 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0" className='text-[40px] pt-28 text-white text-center'>Enroll your child today to let their talent shine and be celebrated!</h1>
    </div>
  )
}

export default Talent
