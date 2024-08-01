
import Image from 'next/image'
import React from 'react'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';


const Certificate = () => {

  useEffect(() => {
    AOS.init({
      offset: 200, 
    });
  }, []);

  return (
    <div className='bg-white h-[545px] w-full'>
      <h1 data-aos="zoom-out" className='text-[40px] text-[#004873] text-center pt-16'>Certificate</h1>
      <div data-aos="fade-down" data-aos-dealy="500" className="flex flex-row gap-20 mt-10 justify-center">
        <Image src="/certificate-1.png" width={249} height={239}/>
        <Image src="/certificate-2.png" width={249} height={239}/>
        <Image src="/certificate-1.png" width={249} height={239}/>
        <Image src="/certificate-2.png" width={249} height={239}/>
      </div>
      <div className='flex gap-36'>
      <h1 data-aos="fade-right" data-aos-dealy="500" className='text-[25px] text-[#004873] text-center pt-16 ml-44'>Get your Certificate, Register and win your prize</h1>
      <Image data-aos="fade-left" data-aos-dealy="500" src="/register btn.png" width={292} height={29} className='text-center  mt-14'/>
      </div>
    </div>
  )
}

export default Certificate