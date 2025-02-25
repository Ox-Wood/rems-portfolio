"use client"
import gsap from "gsap"

let NavBar = 0

export const MobileNavBarMenu = () => {
    
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