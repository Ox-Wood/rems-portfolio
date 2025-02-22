"use client"
import React from 'react'
import Image from 'next/image'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { useEffect } from 'react';
import { recentproject } from '@/utils/recentproject-animation';

const RecentVideoProjects = () => {

    useEffect(() => {
        recentproject()
    },[])

  return (
    <main id='recentprjct-main' className='w-full h-[70vh] bg-[#ff4655] flex justify-center items-center'>
        <div className='w-[90vw] h-[60vh] grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2'>
            {/** description */}
            <div className='w-[45vw] h-[60vh] max-sm:h-[30vh] max-sm:w-[90vw] flex flex-col xl:justify-center'>
                <div>
                    <h1 id='recentprjct-title' className='font-[Anton] max-sm:text-4xl text-8xl text-[#09122C]' >LATEST VIDEO EDIT</h1>
                    <div id='recentprjct-line' className='w-[400px] max-sm:w-[200px] h-[1px] bg-white mt-2'></div>
                </div>
                <div className='w-[40vw] h-[18vh] max-sm:w-[90vw] mt-4'>
                    <div id='recentprjct-sub-title' className='text-white max-sm:text-[12px] font-bold uppercase xl:mb-3 ' >Informational and Commercial Edit</div>
                    <div id='recentprjct-desc' className='h-[10vh] w-full text-justify text-[#F8F5E9] text-sm max-sm:text-[11px]'>
                        The objective of this video is to promote sanitary pads and encourage all women to switch from ordinary pads to herbal pads. These pads contain natural ingredients that help prevent various diseases that may affect their intimate area. Additionally, this video serves as an advertisement on social media platforms to raise awareness and further emphasize its purpose.
                    </div>
                </div>
                <div className='w-full flex justify-between mt-6 max-sm:mt-0'>
                    <div className='flex items-center overflow-y-hidden max-sm:w-[30vw]' >
                        <h1 id='recentprjct-tools1' className='uppercase font-[Anton] text-lg max-sm:text-sm text-[#F8F5E9]' >Tools used :</h1>
                        <div className='ml-5 flex justify-between w-[6vw]'>
                            <Image id='recentprjct-tools2' src={"/tools/pr.png"} alt='premiere pro' width={40} height={40} />
                            <Image id='recentprjct-tools3' src={"/tools/ae.png"} alt='premiere pro' width={40} height={40} />
                        </div>
                    </div>
                    <div id='recentprjct-line2' className='w-[15vw] flex justify-center items-center' ><div className='w-full h-[1px] bg-white'></div><div className='w-[5px] h-[5px] bg-white rounded-full' ></div></div>
                    <div className='w-[15vw] max-sm:w-[35vw] flex xl:justify-center overflow-y-hidden' >
                        <a id='recentprjct-link' href="#" className=' text-white flex justify-center items-center max-sm:text-sm' >view more edits <BiSolidRightTopArrowCircle className='ml-1' color='#F8F5E9' /></a>
                    </div>
                </div>
            </div>
            {/** Video player */}
            <div className='w-[45vw] h-[60vh] max-sm:h-[30vh] max-sm:w-[90vw] flex justify-end items-center overflow-y-hidden overflow-x-hidden'>
                <video id='recentprjct-video' autoPlay playsInline loop muted width={610} height={500} preload='none'>
                    <source src='/video/video bg.mp4' type='video/mp4'/>
                </video>
            </div>
        </div>
    </main>
  )
}

export default RecentVideoProjects