"use client"
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#F8FFDA] w-full h-[550px]'>
      <div className='grid grid-cols-4 pt-20 justify-center items-center ml-36'>
        <div className="flex flex-col">
          <Image src="/logo.png" width={90} height={90} className='pt-5'/>
          <h1 className='bg-black text-white pt-3 pl-2 mt-5 w-48 text-xs h-10'>Participate The Competition</h1>
          <p className='pt-5'>Call Sales <br />1234567890</p>
        </div>

        <div className="flex flex-col">
          <h1 className='font-semibold text-lg'>Quick Links</h1>
          <h1 className='pt-5'>Home</h1>
          <h1 className='pt-5'>Competition</h1>
          <h1 className='pt-5'>Registration</h1>
          <h1 className='pt-5'>About Us</h1>
          <h1 className='pt-5'>Jump to top</h1>
        </div>

        <div className="flex flex-col">
          <h1 className='font-semibold text-lg'>Our Competition</h1>
          <h1 className='pt-5'>Dancing</h1>
          <h1 className='pt-5'>Singing</h1>
          <h1 className='pt-5'>Drawing</h1>
          <h1 className='pt-5'>Mimicry</h1>
          <h1 className='pt-5'>Poetry</h1>
        </div>

        <div className="flex flex-col">
          <h1 className='font-semibold text-lg'>About</h1>
          <h1 className='pt-5'>Company</h1>
          <h1 className='pt-5'>Privacy Policy</h1>
          <h1 className='pt-5'>Cookie Policy</h1>
          <div className='flex flex-col mt-5'>
          <h1>Connect with us</h1>
          <div className="flex ">
            <Image src="/fb.png" width={40} height={40}/>
            <Image src="/linkedin.png" width={40} height={40}/>
            <Image src="/insta.png" width={40} height={40}/>
            <Image src="/yt.png" width={40} height={40}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer