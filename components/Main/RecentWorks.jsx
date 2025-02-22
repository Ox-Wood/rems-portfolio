"use client"
import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { useEffect } from 'react';
import Image from 'next/image';
import { cardMouseEnter1, cardMouseLeave1, cardMouseEnter2, cardMouseLeave2, cardMouseEnter3, cardMouseLeave3, cardMouseEnter4, cardMouseLeave4, headeranimation } from '@/utils/recentworks-animation';

const RecentWorks = () => {

  useEffect (() => {
    cardMouseEnter1()
    cardMouseLeave1()
    cardMouseEnter2()
    cardMouseLeave2()
    cardMouseEnter3()
    cardMouseLeave3()
    cardMouseEnter4()
    cardMouseLeave4()
    headeranimation()
  }, [])

  return (
    <main id='header' className='w-full h-[75vh] max-sm:h-[75vh] bg-[#F8F5E9] flex justify-center items-center overflow-hidden'>
        <div  className='w-[90vw] h-[50vh] flex flex-col justify-center items-center'>
            <div className='w-full max-sm:w-[80vw] flex justify-between mb-5 max-sm:mb-2' >
                <h1 id='header-title' className='font-[Anton] text-5xl uppercase max-sm:text-2xl' >THE LATEST WORKS</h1>
                <a id='header-link' href="#" className='flex justify-center items-center max-sm:text-sm'>go to recent works<BiSolidRightTopArrowCircle className='ml-1' color='#D84040' /></a>
            </div>
            <div className='w-[90vw] max-sm:w-[70vw] grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-2'>
                <div id='card1' onMouseEnter={cardMouseEnter1} onMouseLeave={cardMouseLeave1} className='w-[18vw] h-[50vh] max-sm:w-[34vw] max-sm:h-[30vh] relative justify-self-center'>
                    {/** Other Details */}
                    <div id='card-btn1' className='w-full h-full flex flex-col justify-center items-center absolute z-20 opacity-0'>
                      <div className='border-2 border-gray-400 bg-white/50 backdrop-blur-sm  w-[15vw] h-[25vh] max-sm:w-[30vw] max-sm:h-[15vh] rounded-r-3xl rounded-bl-3xl '>  </div>
                      <div className='w-[15vw]  mt-3' ><a target='_' href="https://www.facebook.com/share/v/12DxQs4cKx7/" className='px-5 py-2 bg-[#D84040] max-sm:text-[8px] text-sm text-white rounded-r-full rounded-bl-full'>visit site</a></div>
                    </div>
                    {/** Contents */}
                    <div id='card-container1' className='w-full h-full rounded-xl overflow-hidden flex justify-center items-center' >
                        <div className='w-full h-full rounded-md bg-[url("/latest-works/2.png")] bg-cover bg-center'></div>
                    </div>
                </div>
                <div id='card2' onMouseEnter={cardMouseEnter2} onMouseLeave={cardMouseLeave2} className='w-[18vw] h-[50vh] max-sm:w-[34vw] max-sm:h-[30vh] relative justify-self-center'>
                    {/** Other Details */}
                    <div id='card-btn2' className='w-full h-full flex flex-col justify-center items-center absolute z-10 opacity-0'>
                      <div className='border-2 border-gray-400 bg-white/50 backdrop-blur-sm  w-[15vw] h-[25vh] max-sm:w-[30vw] max-sm:h-[15vh] rounded-r-3xl rounded-bl-3xl '>  </div>
                      <div className='w-[15vw]  mt-3' ><a target='_' href="https://www.facebook.com/share/1EqP6Zqd6J/" className='px-5 py-2 bg-[#D84040] max-sm:text-[8px] text-sm text-white rounded-r-full rounded-bl-full'>visit site</a></div>
                    </div>
                    {/** Contents */}
                    <div id='card-container2' className='w-full h-full rounded-xl overflow-hidden flex justify-center items-center' >
                        <div className='w-full h-full rounded-md bg-[url("/latest-works/3.png")] bg-cover bg-center'></div>
                    </div>
                </div>
                <div id='card3' onMouseEnter={cardMouseEnter3} onMouseLeave={cardMouseLeave3} className='w-[18vw] h-[50vh] max-sm:w-[34vw] max-sm:h-[30vh] relative justify-self-center'>
                    {/** Other Details */}
                    <div id='card-btn3' className='w-full h-full flex flex-col justify-center items-center absolute z-10 opacity-0'>
                      <div className='border-2 border-gray-400 bg-white/50 backdrop-blur-sm  w-[15vw] h-[25vh] max-sm:w-[30vw] max-sm:h-[15vh] rounded-r-3xl rounded-bl-3xl '>  </div>
                      <div className='w-[15vw]  mt-3' ><a target='_' href="https://www.facebook.com/share/18ddFhwKnT/" className='px-5 py-2 bg-[#D84040] max-sm:text-[8px] text-sm text-white rounded-r-full rounded-bl-full'>visit site</a></div>
                    </div>
                    {/** Contents */}
                    <div id='card-container3' className='w-full h-full rounded-xl overflow-hidden flex justify-center items-center' >
                      <div className='w-full h-full rounded-md bg-[url("/latest-works/12.png")] bg-cover bg-center'></div>
                    </div>
                </div>
                <div id='card4' onMouseEnter={cardMouseEnter4} onMouseLeave={cardMouseLeave4} className='w-[18vw] h-[50vh] max-sm:w-[34vw] max-sm:h-[30vh] relative justify-self-center'>
                    {/** Other Details */}
                    <div id='card-btn4' className='w-full h-full flex flex-col justify-center items-center absolute z-10 opacity-0'>
                       <div className='border-2 border-gray-400 bg-white/50 backdrop-blur-sm  w-[15vw] h-[25vh] max-sm:w-[30vw] max-sm:h-[15vh] rounded-r-3xl rounded-bl-3xl '>  </div>
                       <div className='w-[15vw]  mt-3' ><a target='_' href="https://www.facebook.com/share/1Gyr8AgM1W/" className='px-5 py-2 bg-[#D84040] max-sm:text-[8px] text-sm text-white rounded-r-full rounded-bl-full'>visit site</a></div>
                    </div>
                    {/** Contents */}
                    <div id='card-container4' className='w-full h-full rounded-xl overflow-hidden flex justify-center items-center' >
                      <div className='w-full h-full rounded-md bg-[url("/latest-works/4.jpg")] bg-cover bg-center'></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default RecentWorks