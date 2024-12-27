'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import AboutHero from '@/components/aboutUs/about-hero/About-Hero'
import Footer from '@/components/layouts/footer/Footer';
import CoordinationCommittee from '@/components/aboutUs/coordination-committee/coordination-committee';



const Page = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <CoordinationCommittee />
        <Footer />
    </div>
  )
}


export default Page;