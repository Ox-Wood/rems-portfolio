"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'

const MobileModernNavBar = () => {

    let NavBar = 0

    const MobileNavBarMenu = () => {
        
        const mobilenavbarcontainer = document.getElementById('Mobile-Navbar-Container');
        const naburger1 = document.getElementById('nav-burger1')
        const naburger2 = document.getElementById('nav-burger2')
        const naburger3 = document.getElementById('nav-burger3')
    
        if (NavBar === 0 ) {
            gsap.to(mobilenavbarcontainer, {
                right: "0px",
                duration: 1,
                ease: "power2.inOut"
            })
    
            gsap.to(naburger2, {
                xPercent: 105,
                duration: 1,
                ease: "power2.inOut"
            })
    
            gsap.to(naburger1, {
                yPercent: 300,
                rotateZ: 45,
                duration: 1,
                ease: "power2.inOut"
            })
    
            gsap.to(naburger3, {
                yPercent: -300,
                rotateZ: -45,
                duration: 1,
                ease: "power2.inOut"
            })
    
            return NavBar = 1
        }
    
        if (NavBar === 1) {
            gsap.to(mobilenavbarcontainer, {
                right: "-14rem",
                duration: 1,
                ease: "power2.inOut"
            })
    
            gsap.to(naburger2, {
                xPercent: 0,
                duration: 1,
                ease: "power2.inOut"
            })
            
            gsap.to(naburger1, {
                yPercent: 0,
                rotateZ: 0,
                duration: 1,
                ease: "power2.inOut"
            })
    
            gsap.to(naburger3, {
                yPercent: 0,
                rotateZ: 0,
                duration: 1,
                ease: "power2.inOut"
            })
    
            return NavBar = 0
        }
      }

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