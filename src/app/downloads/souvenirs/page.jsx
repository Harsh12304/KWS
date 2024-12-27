import Navbar from '@/components/layouts/navbar/Navbar'
import Souvenirs from '@/components/downloads/souvenirs/souvenirs'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <Souvenirs/>
        <Footer/>
        
    </div>
  )
}

export default page