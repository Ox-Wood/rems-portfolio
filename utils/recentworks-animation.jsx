import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


export const cardMouseEnter1 = () => {
    
   const cardContainer = document.getElementById("card-container1")
   const cardBtn = document.getElementById("card-btn1")

   gsap.to(cardContainer, {
      rotateX: 50,
      rotateY: -18.5,
      skewX:15,
      duration: 0.4,
      ease: "power2.out",
   })

   
   gsap.to(cardBtn, {
      yPercent: -10,
      duration: .5,
      opacity: 1,
      ease: "power2.out",
   })
}

export  const cardMouseLeave1 = () => {

   const cardContainer = document.getElementById("card-container1")
   const cardBtn = document.getElementById("card-btn1")

   gsap.to(cardContainer, {      
       rotateX: 0,
       rotateY: 0,
       skewX: 0,
       duration: 0.4,
       ease: "power2.out",
  })

  gsap.to(cardBtn, {
      yPercent: 0,
      duration: .5,
      opacity: 0
   })
}

export const cardMouseEnter2 = () => {
    
    const cardContainer = document.getElementById("card-container2")
    const cardBtn = document.getElementById("card-btn2")

       gsap.to(cardContainer, {
         rotateX: 50,
         rotateY: -18.5,
         skewX:15,
         duration: 0.4,
         ease: "power2.out",
   })
   
   gsap.to(cardBtn, {
      yPercent: -10,
      duration: .5,
      opacity: 1,
      ease: "power2.out",
   })
}

export  const cardMouseLeave2 = () => {

   const cardContainer = document.getElementById("card-container2")
   const cardBtn = document.getElementById("card-btn2")

    gsap.to(cardContainer, {      
       rotateX: 0,
       rotateY: 0,
       skewX: 0,
       duration: 0.4,
       ease: "power2.out",
   })

   gsap.to(cardBtn, {
      yPercent: 0,
      duration: .5,
      opacity: 0
   })
}

export const cardMouseEnter3 = () => {
    
      const cardContainer = document.getElementById("card-container3")
      const cardBtn = document.getElementById("card-btn3")
      gsap.to(cardContainer, {
         rotateX: 50,
         rotateY: -18.5,
         skewX:15,
         duration: 0.4,
         ease: "power2.out",
   })

   gsap.to(cardBtn, {
      yPercent: -10,
      duration: .5,
      opacity: 1,
      ease: "power2.out",
   })
}

export  const cardMouseLeave3 = () => {

   const cardContainer = document.getElementById("card-container3")
   const cardBtn = document.getElementById("card-btn3")
   gsap.to(cardContainer, {      
       rotateX: 0,
       rotateY: 0,
       skewX: 0,
       duration: 0.4,
       ease: "power2.out",
  })

  gsap.to(cardBtn, {
      yPercent: 0,
      duration: .5,
      opacity: 0
   })
}

export const cardMouseEnter4 = () => {
   
   const cardContainer = document.getElementById("card-container4")
   const cardBtn = document.getElementById("card-btn4")
      gsap.to(cardContainer, {
         rotateX: 50,
         rotateY: -18.5,
         skewX:15,
         duration: 0.4,
         ease: "power2.out",
  })
  
  gsap.to(cardBtn, {
      yPercent: -10,
      duration: .5,
      opacity: 1,
      ease: "power2.out",
   })
}

export  const cardMouseLeave4 = () => {

  const cardContainer = document.getElementById("card-container4")
  const cardBtn = document.getElementById("card-btn4")
   gsap.to(cardContainer, {      
       rotateX: 0,
       rotateY: 0,
       skewX: 0,
       duration: 0.4,
       ease: "power2.out",
  })

  gsap.to(cardBtn, {
      yPercent: 0,
      duration: .5,
      opacity: 0
   })
}

export const headeranimation = () => {

   const headertitle = document.getElementById('header-title')
   const headerlink = document.getElementById('header-link')
   const header = document.getElementById('header')
   const card1 = document.getElementById("card1")
   const card2 = document.getElementById("card2")
   const card3 = document.getElementById("card3")
   const card4 = document.getElementById("card4")

   gsap.registerPlugin(ScrollTrigger)

   gsap.fromTo(headertitle, {
      xPercent: -100,
      opacity: 0,
   }, {
      opacity: 1,
      xPercent: 0,
      ease: "power2.inOut",
      duration: 1,
      scrollTrigger: {
         trigger: header,
         start: 'top 500px'
      }
   })

   gsap.fromTo(headerlink, {
      xPercent: 100,
      opacity: 0,
   }, {
      opacity: 1,
      xPercent: 0,
      ease: "power2.inOut",
      duration: 1,
      scrollTrigger: {
         trigger: header,
         start: 'top 500px'
      }
   })

   gsap.fromTo([card1, card2, card3 ,card4], {
      yPercent: 100,
      opacity: 0
   }, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power2.inOut",
      duration: 1,
      scrollTrigger: {
         trigger: header,
         start: 'top 500px'
      }
   })
}