'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import AboutHero from '@/components/aboutUs/about-hero/About-Hero'
import PresidentMessage from '@/components/aboutUs/president-message/president-message';
import Footer from '@/components/layouts/footer/Footer';
import BackToTopButton from '@/components/layouts/backtotop/BackToTop';

function page() {
    return (
      <>
        <Navbar/>
        <AboutHero />
        <PresidentMessage/>
        <Footer/>
        <BackToTopButton />

   
       
      </>
    );
  }
  
  export default page;