"use client"
import { HeroPageAnimation, HeroTextAnimation } from '@/utils/heropage-animation'
import React, { useEffect } from 'react'
import Image from 'next/image'

const HeroPage = () => {

  useEffect(() => {
    HeroPageAnimation()
    HeroTextAnimation()
  }, [])

  return (
    <main className='w-full h-[65vh] max-sm:h-[70vh] flex max-sm:flex-col relative overflow-hidden' >
        <div className='w-[60vw] max-sm:w-full h-full flex items-center justify-end max-sm:justify-center'>
          <div id='me-protrait' className='w-[30vw] max-sm:w-[70vw] max-sm:h-[40vh] max-sm:absolute top-16'>
              <Image 
                src={"/img/me-profile.png"}
                alt='my portrait'
                width={480}
                height={480}
              />
          </div>
        </div>
        <div className='w-full h-full max-sm:h-[30vh] flex flex-col justify-center max-sm:items-center'>
              <div className='overflow-x-hidden mb-2 max-sm:flex justify-center max-sm:mt-10 max-sm:h-[7vh] max-sm:w-[25vw]'>
                <div id='name' className='w-[15vw] h-[10vh] max-sm:w-[25vw] max-sm:h-[5vh] flex justify-center items-center rounded-r-full rounded-bl-full bg-[#ff4655]' >
                  <h1 className='text-2xl max-sm:text-sm text-white' >Hi! I'm Rem</h1>
                </div>
              </div>
              <div className='overflow-hidden h-[160px] max-sm:flex justify-center' >
                  <h1 id='niche' className='text-9xl max-sm:text-6xl font-Anton text-[#ff4655]' >Graphic Designer</h1>
              </div>
        </div>
        <div className='absolute w-[screen] h-[65vh] max-sm:w-[200vw] -z-10 opacity-15'>
            <video autoPlay playsInline loop muted preload='none'>
                <source src='/video/whitebg.mp4' type='video/mp4'/>
            </video>
        </div>
    </main>
  )
}

export default HeroPage