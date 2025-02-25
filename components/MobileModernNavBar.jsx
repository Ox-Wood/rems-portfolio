"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { MobileNavBarMenu } from '@/utils/mobile-modern-navbar-animation'

const MobileModernNavBar = () => {

   MobileNavBarMenu()

  return (
    <header className='overflow-hidden'>
        <div className='w-[200px] h-[55px] relative'>
            <div onClick={MobileNavBarMenu} className='bg-[#09122C] w-[50px] h-[50px] rounded-xl absolute right-0 flex justify-center items-center'>
                <div className='flex flex-col justify-evenly items-center w-[30px] h-[35px] overflow-hidden'>
                    <div id='nav-burger1' className='w-[30px] h-[3px] bg-white' ></div>
                    <div id='nav-burger2' className='w-[30px] h-[3px] bg-white' ></div>
                    <div id='nav-burger3' className='w-[30px] h-[3px] bg-white' ></div>
                </div>
            </div>
        </div>
        <nav id='Mobile-Navbar-Container' className='w-[200px] h-[300px] overflow-hidden rounded-l-3xl rounded-br-3xl relative -right-56'>
            <div className='bg-[#09122C] w-[200px] h-[300px] flex flex-col justify-evenly items-center text-white'>
                <a href="/">home</a>
                <a href="#">niche</a>
                <a href="/RecentWorks">works</a>
                <a href="#">contact me</a>
            </div>
        </nav>
    </header>
  )
}

export default MobileModernNavBar