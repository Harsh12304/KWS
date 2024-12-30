import Navbar from '@/components/layouts/navbar/Navbar'
import Souvenirs from '@/components/downloads/souvenirs/souvenirs'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'
import BackToTopButton from '@/components/layouts/backtotop/BackToTop'

const page = () => {
  return (
    <div>
        <Navbar />
        <Souvenirs/>
        <Footer/>
        <BackToTopButton />
        
    </div>
  )
}

export default page