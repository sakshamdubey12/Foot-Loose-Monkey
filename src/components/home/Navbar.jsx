import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='bg-inherit'>
        <div className='flex flex-row items-center justify-between w-full'>
            <Image src="/logo.png" width={45} height={45} className='ml-6 my-[14px]'/>
            <div className='flex flex-row items-center gap-12 mr-12'>
                <h1 className='text-xl font-semibold'>Home</h1>
                <h1 className='text-xl font-semibold'>Competition</h1>
                <h1 className='text-xl font-semibold'>Register</h1>
                <h1 className='text-xl font-semibold'>About Us</h1>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar