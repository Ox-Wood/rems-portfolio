import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const recentproject = () => {

    const recentprjctMain = document.getElementById("recentprjct-main")
    const recentprjctTitle = document.getElementById("recentprjct-title")
    const recentprjctSubTitle = document.getElementById("recentprjct-sub-title")
    const recentprjctDesc = document.getElementById("recentprjct-desc")
    const recentprjctTools1 = document.getElementById("recentprjct-tools1")
    const recentprjctTools2 = document.getElementById("recentprjct-tools2")
    const recentprjctTools3 = document.getElementById("recentprjct-tools3")
    const recentprjctLink = document.getElementById("recentprjct-link")
    const recentprjctVideo = document.getElementById("recentprjct-video")
    const recentprjctLine = document.getElementById("recentprjct-line")
    const recentprjctLine2 = document.getElementById("recentprjct-line2")

    gsap.registerPlugin(ScrollTrigger)    

    gsap.fromTo([recentprjctTitle, recentprjctSubTitle, recentprjctDesc], {
        xPercent: -50,
        opacity: 0,
    }, {
        xPercent: 0,
        opacity: 1,
        duration: 2,
        stagger: .2,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: recentprjctMain,
            start: 'top 500px',
        }
    })

    gsap.fromTo([recentprjctTools1,recentprjctTools2,recentprjctTools3, recentprjctLink],{
        yPercent: -100,
        opacity: 0,
    }, {
        yPercent: 0,
        opacity: 1,
        duration: 2,
        stagger: .2,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: recentprjctMain,
            start: 'top 500px',
        }
    })

    gsap.fromTo([recentprjctLine, recentprjctLine2],{
        xPercent: -50,
        opacity: 0,
    }, {
        xPercent: 0,
        opacity: 1,
        duration: 2,
        stagger: .3,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: recentprjctMain,
            start: 'top 500px',
        }
    })

    gsap.fromTo(recentprjctVideo, {
        xPercent: 100,
        opacity: 0
    }, {
        xPercent: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: recentprjctMain,
             start: 'top 500px'
        }
    })
}