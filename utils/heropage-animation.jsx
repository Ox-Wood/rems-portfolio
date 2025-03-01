import gsap from "gsap";

export const HeroPageAnimation = () => {
    
    const myportrait = document.getElementById('me-protrait')

    gsap.fromTo(myportrait, {
        xPercent: -20,
        opacity: 0
    },{
        xPercent: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut"
    })

}

export const HeroTextAnimation = () => {

    const name = document.getElementById('name')
    const niche = document.getElementById('niche')
  
    gsap.fromTo(name, {
        xPercent: -90,
        opacity: 0,
    }, {
        xPercent: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut"
    })
    gsap.fromTo(niche, {
        yPercent: -140,
        opacity: 0,
    }, {
        yPercent: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut"
    })
}