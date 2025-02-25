"use client"
import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'

const ModernNavBar = () => {

    function ModernNavBarAnimation () {

        const navstick1 = document.getElementById('navbar-stick1')
        const navstick2 = document.getElementById('navbar-stick2')
        const navstick3 = document.getElementById('navbar-stick3')
        const navbarcloser = document.getElementById('navbar-closer')
        const navbarmenu = document.getElementById('navbar-menu')
        const navbarmenucntnr = document.getElementById('navbar-menu-container')
    
        gsap.to(navstick2, {
            xPercent: 110,
            duration: .5,
            ease: "power2.inOut"
        })

        gsap.to(navstick1, {
            yPercent: 330,
            rotateZ: 45,
            duration: 1,
            ease: "power2.inOut"
        })

        gsap.to(navstick3, {
            yPercent: -330,
            rotateZ: -45,
            duration: 1,
            ease: "power2.inOut"
        })

        gsap.to(navbarcloser, {
            left: 20,
            duration: 1,
            ease: "power2.inOut"
        })
        
        gsap.to(navbarmenu, {
            yPercent: 132,
            duration: .5,
            ease: "power2.inOut"
        })

        gsap.to(navbarmenucntnr, {
            height: "40vh",
            duration: .2,
            ease: "power2.inOut"
        })
    }

    function ModernNavBarAnimationCloser () {
        
        const navstick1 = document.getElementById('navbar-stick1')
        const navstick2 = document.getElementById('navbar-stick2')
        const navstick3 = document.getElementById('navbar-stick3')
        const navbarcloser = document.getElementById('navbar-closer')
        const navbarmenu = document.getElementById('navbar-menu')
        const navbarmenucntnr = document.getElementById('navbar-menu-container')

        gsap.to(navbarcloser, {
            left: -40,
            duration: 1,
            ease: "power2.inOut"
        })

        gsap.to(navstick2, {
            xPercent: 0,
            duration: 1,
            ease: "power2.inOut"
        })

        gsap.to(navstick1, {
            yPercent: 0,
            rotateZ: 0,
            duration: 1,
            ease: "power2.inOut"
        })

        gsap.to(navstick3, {
            yPercent: 0,
            rotateZ: 0,
            duration: 1,
            ease: "power2.inOut"
        })
        
        gsap.to(navbarmenu, {
            yPercent: -200,
            duration: 1,
            ease: "power2.inOut"
        })

        gsap.to(navbarmenucntnr, {
            height: 0,
            duration: 1,
            ease: "power2.inOut"
        })
    }

  return (
    <header className='absolute top-5 right-5 z-50' >
        <div className='bg-[#09122C] rounded-3xl flex items-center overflow-hidden relative'>
            <div onClick={ModernNavBarAnimation} className='w-[30px] h-[30px] mx-5 max-sm:my-3 flex flex-col justify-around overflow-hidden cursor-pointer' >
                <div id='navbar-stick1' className='w-[30px] h-[3px] rounded-full bg-white'></div>
                <div id='navbar-stick2' className='w-[30px] h-[3px] rounded-full bg-white'></div>
                <div id='navbar-stick3' className='w-[30px] h-[3px] rounded-full bg-white'></div>
            </div>
            <div onClick={ModernNavBarAnimationCloser} id='navbar-closer' className='w-[30px] h-[30px] absolute -left-10 cursor-pointer' ></div>
            <h1 className='py-5 text-white max-sm:absolute max-sm:-z-50' >what's more about me</h1>
        </div>
        <div id='navbar-menu-container' className='overflow-hidden relative w-[17vw]'>
            <div id='navbar-menu' className='w-[17vw] h-[40vh] absolute -top-96 bg-[#09122C]/30 backdrop-blur-md border-2 flex flex-col justify-evenly items-center border-white rounded-3xl text-white' > 
                <a id='navtext1' className='px-9 py-3 uppercase text-sm rounded-full hover:bg-black duration-200' href="/">home</a>
                <a id='navtext2' className='px-9 py-3 uppercase text-sm rounded-full hover:bg-black duration-200' href="#">niche</a>
                <a id='navtext3' className='px-9 py-3 uppercase text-sm rounded-full hover:bg-black duration-200' href="/RecentWorks">works</a>
                <a id='navtext4' className='px-9 py-3 uppercase text-sm rounded-full hover:bg-black duration-200' href="#">contact me</a>
            </div>
        </div>
    </header>
  )
}

export default ModernNavBar