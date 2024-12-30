'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import AboutHero from '@/components/aboutUs/about-hero/About-Hero'
import Footer from '@/components/layouts/footer/Footer';
import CoordinationCommittee from '@/components/aboutUs/coordination-committee/coordination-committee';
import BackToTopButton from '@/components/layouts/backtotop/BackToTop';



const Page = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <CoordinationCommittee />
        <Footer />
        <BackToTopButton />
    </div>
  )
}


export default Page;