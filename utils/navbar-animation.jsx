import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const navigationbar = () => {
    const mainbox = document.getElementById("mainbox")
    const navtext1 = document.getElementById("navtext1")
    const navtext2 = document.getElementById("navtext2")
    const navtext3 = document.getElementById("navtext3")
    const navtext4 = document.getElementById("navtext4")

    gsap.fromTo(mainbox, {
        yPercent: -100,
        opacity: 0,
    }, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
    }, "-=0.5")
   
   if (navtext1 && navtext2 && navtext3 && navtext4) {
        gsap.fromTo([navtext1, navtext2, navtext3, navtext4], {
            yPercent: -100,
            opacity: 0,
        },{
            yPercent: 0,
            opacity: 1,
            delay: .5,
            duration: 1,
            stagger: .2,
            ease: "power2.inOut"
        }, "-=0.8") 
   }
}