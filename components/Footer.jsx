import React from 'react'
import { FaFacebook, FaInstagramSquare, FaWhatsappSquare, FaTelegram, FaDiscord  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-full h-[25vh] bg-[#09122C] flex justify-center items-center'>
        <div className='w-[90vw] h-[15vh] grid-flow-col grid grid-rows-2'>
            <div className='row-span-1 h-[10vh] text-[#F8F5E9] flex justify-center items-center text-sm lowercase' >
                <div className=' flex justify-center max-sm:w-[65vw]' >
                    <div className='flex justify-around w-[15vw] max-sm:w-[55vw]'>
                        <a className='text-[#F8F5E9] px-2 py-2 bg-white/20 rounded-2xl text-xl' href="#"><FaFacebook /></a>
                        <a className='text-[#F8F5E9] px-2 py-2 bg-white/20 rounded-2xl text-xl' href="#"><FaInstagramSquare /></a>
                        <a className='text-[#F8F5E9] px-2 py-2 bg-white/20 rounded-2xl text-xl' href="#"><FaWhatsappSquare /></a>
                        <a className='text-[#F8F5E9] px-2 py-2 bg-white/20 rounded-2xl text-xl' href="#"><FaTelegram /></a>
                        <a className='text-[#F8F5E9] px-2 py-2 bg-white/20 rounded-2xl text-xl' href="#"><FaDiscord /></a>
                    </div>
                </div>
            </div>
            <div className='row-span-1 flex justify-center items-center' >
                <h1 className='text-white text-sm' >© 2025 rem's portfolio</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer