'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import AboutHero from '@/components/aboutUs/about-hero/About-Hero'
import Footer from '@/components/layouts/footer/Footer';
import VolunteerCommittee from '@/components/aboutUs/volunteer-committee/volunteer-committee';



const Page = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <VolunteerCommittee />
        <Footer />
    </div>
  )
}


export default Page;