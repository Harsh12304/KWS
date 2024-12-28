'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import AboutHero from '@/components/aboutUs/about-hero/About-Hero'
import VisionMission from '@/components/aboutUs/vision-mission/Vision-Mission';
import Footer from '@/components/layouts/footer/Footer';



const Page = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <VisionMission />
        <Footer />
    </div>
  )
}

export default Page;