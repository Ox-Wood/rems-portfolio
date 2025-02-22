import gsap from "gsap";

export const toolsusedmarquee = () => {

   const tools1 = document.getElementById('tools1')
   const tools2 = document.getElementById('tools2')
   const tools3 = document.getElementById('tools3')
   const tools4 = document.getElementById('tools4')
   const tools5 = document.getElementById('tools5')
    
    gsap.to([tools1, tools2, tools3, tools4, tools5], {
        duration: 5,
        ease: "none",
        x: "+=500",
        modifiers: {
            x: gsap.utils.unitize( x => parseFloat(x) % 1000)
        },
        repeat: -1
    })

}