"use client"
import React from 'react'
import { useEffect } from 'react'
import { navigationbar } from '@/utils/navbar-animation'
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { navbarphoneanimationclose, navbarphoneanimationopen } from '@/utils/navbarphone-animation';
import gsap from "gsap";

const NavBar = () => {

    useEffect(() => {
        navigationbar()
        navbarphoneanimationopen()
        navbarphoneanimationclose()
    }, [])

  return (
    <main>
        <div onClick={navbarphoneanimationopen} className='w-[50px] h-[50px] xl:opacity-0 xl:z-0 cursor-pointer top-2 right-2 bg-[#09122C] z-10 rounded-xl absolute flex justify-center items-center text-white'><RxHamburgerMenu /></div>
        <header id='navbarphone-menu' className='w-full h-24 flex justify-center xl:items-center bg-[#09122C] max-sm:w-screen max-sm:fixed max-sm:h-screen max-sm:-right-[520px] z-10' >
          <nav id='mainbox' className='px-[5px] py-[5px] flex items-center justify-center max-sm:flex-col xl:border-b border-white'>
              <div id='phone-navclose' onClick={navbarphoneanimationclose} className='text-white cursor-pointer flex items-center justify-center max-sm:w-screen max-sm:h-[8vh] xl:-top-96 xl:absolute' ><RxCross1 /></div>
              <div className='w-[40vw] py-[10px] text-white flex justify-evenly items-center max-sm:w-screen max-sm:flex-col max-sm:h-[30vh]'>
                <a id='navtext1' className='px-9 py-3 uppercase text-sm' href="/">home</a>
                <a id='navtext2' className='px-9 py-3 uppercase text-sm' href="#">niche</a>
                <a id='navtext3' className='px-9 py-3 uppercase text-sm' href="/RecentWorks">works</a>
                <a id='navtext4' className='px-9 py-3 uppercase text-sm' href="#">contact me</a>
              </div>
          </nav>
        </header>
    </main>
  )
}

export default NavBar