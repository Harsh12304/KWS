'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import AboutHero from '@/components/aboutUs/about-hero/About-Hero'
import WhoWeAre from '@/components/aboutUs/who-we-are/who-we-are';
import Footer from '@/components/layouts/footer/Footer';
import BackToTopButton from '@/components/layouts/backtotop/BackToTop';




function page() {
    return (
      <>
        <Navbar/>
        <AboutHero />
        <WhoWeAre/>
       <Footer />
       <BackToTopButton />
      </>
    );
  }
  
  export default page;