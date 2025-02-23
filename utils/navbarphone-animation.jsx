import gsap from "gsap";

export const navbarphoneanimation = () => {

    const navbarmenu = document.getElementById("navbarphone-menu")

    gsap.to(navbarmenu, {
        right: 0,
        duration: 2,
        ease: "power2.inOut"
    })

}

export const navbarphoneanimationopen = () => {

    const navbarmenu = document.getElementById("navbarphone-menu")
    const navtext1 = document.getElementById('navtext1')
    const navtext2 = document.getElementById('navtext2')
    const navtext3 = document.getElementById('navtext3')
    const navtext4 = document.getElementById('navtext4')
    const phonenavbar =  document.getElementById('phone-navclose')

    gsap.to(navbarmenu, {
        right: 0,
        duration: 1,
        ease: "power2.inOut"
    })

    gsap.fromTo([phonenavbar,navtext1,navtext2,navtext3,navtext4], {
        xPercent: -100,
        opacity: 0,
    }, {
        xPercent: 0,
        opacity: 1,
        stagger: .2,
        duration: 1,
        ease: "power2.inOut"
    })

  }

export const navbarphoneanimationclose = () => {

    const navbarmenu = document.getElementById("navbarphone-menu")

    gsap.to(navbarmenu, {
        right: -510,
        duration: 1,
        ease: "power2.inOut"
    })

  }