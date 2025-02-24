import NavBar from '@/components/NavBar'
import React from 'react'
import { PiSquaresFourBold } from "react-icons/pi";
import { MdInsertPhoto } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";

const page = () => {
  return (
    <main className='bg-[#F8F5E9]'>
      <NavBar />
      <div className=' w-full h-[86.5vh] max-sm:h-[100vh] flex justify-center'>
        <section className='w-[90vw] h-[80vh] mt-2 max-sm:h-[95vh] overflow-hidden' >
          <div className='font-Anton mb-5 max-sm:mt-9' >
              <h1 className='text-6xl max-sm:text-4xl text-[#ff4655]'>My Recent Works</h1>
          </div>
          <div className='w-[22vw] h-[8vh] flex justify-between max-sm:w-[75vw]'>
              <div className='w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px] flex justify-center items-center border border-[#09122C] text-lg rounded-xl text-[#09122C]' ><PiSquaresFourBold /></div>
              <div className='h-[50px] max-sm:h-[40px] px-4 max-sm:px-2 flex justify-center items-center border border-[#09122C] rounded-xl text-[#09122C]' >
                <div className='w-[30px] h-[30px] max-sm:w-[40px] max-sm:h-[40px] flex justify-center items-center text-lg'><MdInsertPhoto  /> </div>
                <h1 className='max-sm:text-sm' >POSTERS</h1>
              </div>
              <div className='h-[50px] max-sm:h-[40px] px-4 max-sm:px-2 flex justify-center items-center border border-[#09122C] rounded-xl text-[#09122C]' >
                <div className='w-[30px] h-[30px] max-sm:w-[40px] max-sm:h-[40px] flex justify-center items-center text-lg'><FaVideo  /> </div>
                <h1 className='max-sm:text-sm' >VIDEOS</h1>
              </div>
          </div>
          <div className='w-full'>
            <div className='relative w-full h-[80vh] overflow-x-hidden'>
                <div className='w-[90vw] absolute max-sm:columns-2 columns-5 gap-4 space-y-4'>
                    <div className='max-sm:w-[42vw] w-[17.5vw] max-sm:h-[25vh] h-[45vh] rounded-xl bg-white break-inside-avoid'></div>
                    <div className='max-sm:w-[42vw] w-[17.5vw] max-sm:h-[35vh] h-[40vh] rounded-xl bg-black break-inside-avoid'></div>
                    <div className='max-sm:w-[42vw] w-[17.5vw] max-sm:h-[35vh] h-[40vh] rounded-xl bg-black break-inside-avoid'></div>
                    <div className='max-sm:w-[42vw] w-[17.5vw] max-sm:h-[25vh] h-[45vh] rounded-xl bg-white break-inside-avoid'></div>
                    <div className='max-sm:w-[42vw] w-[17.5vw] max-sm:h-[35vh] h-[40vh] rounded-xl bg-black break-inside-avoid'></div>
                    <div className='max-sm:w-[42vw] w-[17.5vw] max-sm:h-[35vh] h-[40vh] rounded-xl bg-black break-inside-avoid'></div>
                    <div className='max-sm:w-[42vw] w-[17.5vw] max-sm:h-[35vh] h-[40vh] rounded-xl bg-black break-inside-avoid'></div>
                    <div className='max-sm:w-[42vw] w-[17.5vw] max-sm:h-[35vh] h-[40vh] rounded-xl bg-black break-inside-avoid'></div>
                    <div className='max-sm:w-[42vw] w-[17.5vw] max-sm:h-[35vh] h-[40vh] rounded-xl bg-black break-inside-avoid'></div>
                    <div className='max-sm:w-[42vw] w-[17.5vw] max-sm:h-[25vh] h-[45vh] rounded-xl bg-white break-inside-avoid'></div>
                    <div className='max-sm:w-[42vw] w-[17.5vw] max-sm:h-[25vh] h-[45vh] rounded-xl bg-white break-inside-avoid'></div>
                </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default page