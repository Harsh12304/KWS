import AboutHero from '@/components/aboutUs/about-hero/About-Hero'
import AbouDropdown from '@/components/aboutUs/aboutDropdown/About-Dropdown'
import Footer from '@/components/layouts/footer/Footer'
import Navbar from '@/components/layouts/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <AbouDropdown />
        <Footer/>
        
    </div>
  )
}

export default page