"use client"
import React from 'react'
import Image from 'next/image'

const ToolsUsed = () => {


  return (
    <section className='w-full h-[15vh] flex flex-col justify-center items-center bg-[#ff4655] overflow-x-hidden'>
       
        <div className='w-[90vw] flex justify-evenly items-center mt-3 text-sm' >
            <div id='tools1' className='flex flex-row uppercase items-center'>
                <Image src={'/tools/ps.png'} alt='photoshop' width={50} height={50} />
                <h1 className='text-white mx-2 max-sm:collapse max-sm:absolute' >Adobe Photoshop</h1>
            </div>
            <div id='tools2' className='flex flex-row uppercase items-center'>
                <Image src={'/tools/ai.png'} alt='photoshop' width={50} height={50} />
                <h1 className='text-white mx-2 max-sm:collapse max-sm:absolute' >Adobe Illustrator</h1>
            </div>
            <div id='tools3' className='flex flex-row uppercase items-center'>
                <Image src={'/tools/canva.png'} alt='photoshop' width={50} height={50} />
                <h1 className='text-white mx-2 max-sm:collapse max-sm:absolute' >Canva</h1>
            </div>
            <div id='tools4' className='flex flex-row uppercase items-center'>
                <Image src={'/tools/pr.png'} alt='photoshop' width={50} height={50} />
                <h1 className='text-white mx-2 max-sm:collapse max-sm:absolute' >Premiere Pro</h1>
            </div>
            <div id='tools5' className='flex flex-row uppercase items-center'>
                <Image src={'/tools/ae.png'} alt='photoshop' width={50} height={50} />
                <h1 className='text-white mx-2 max-sm:collapse max-sm:absolute' >After Effects</h1>
            </div>
        </div>
    </section>
  )
}

export default ToolsUsed