'use client'
import React from 'react';
import PresidentMessage from '@/components/aboutUs/president-message/president-message';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import BackToTopButton from '@/components/layouts/backtotop/BackToTop';

import Hero from '@/components/aboutUs/about-hero/About-Hero';



 
function page() {
    return (
      <>
        <Navbar/>
        <PresidentMessage/>
        <Footer/>
        <BackToTopButton />

   
       
      </>
    );
  }
  
  export default page;