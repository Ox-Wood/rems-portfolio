import gsap from "gsap";

export const navbarphoneanimation = () => {

    const navbarmenu = document.getElementById("navbarphone-menu")

    gsap.to(navbarmenu, {
        right: 0,
        duration: 2,
        ease: "power2.inOut"
    })

}