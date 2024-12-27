import Navbar from '@/components/layouts/navbar/Navbar'
import KokanMelaSports from '@/components/downloads/mela/mela'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <KokanMelaSports/>
        <Footer/>
        
    </div>
  )
}

export default page