'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import AboutHero from '@/components/aboutUs/about-hero/About-Hero'
import Footer from '@/components/layouts/footer/Footer';
import ExecutiveComittee from '@/components/aboutUs/executive-committee/Executive-Comittee';



const Page = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <ExecutiveComittee />
        <Footer />
    </div>
  )
}


export default Page;