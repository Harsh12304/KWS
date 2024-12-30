import Navbar from '@/components/layouts/navbar/Navbar'
import KokanMelaSports from '@/components/downloads/mela/mela'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'
import BackToTopButton from '@/components/layouts/backtotop/BackToTop'

const page = () => {
  return (
    <div>
        <Navbar />
        <KokanMelaSports/>
        <Footer/>
        <BackToTopButton />
        
    </div>
  )
}

export default page