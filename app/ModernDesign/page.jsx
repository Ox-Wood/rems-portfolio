import ModernNavBar from '@/components/ModernNavBar'
import React from 'react'

const page = () => {
  return (
    <main>
        <div className="max-sm:invisible max-sm:absolute -z-50" ><ModernNavBar /></div>
        <div className="max-sm:opacity-100 absolute max-sm:top-5 max-sm:right-5 z-50 -top-96"><MobileModernNavBar /></div>
    </main>
  )
}

export default page