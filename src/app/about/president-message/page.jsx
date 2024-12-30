'use client'
import React from 'react';
import PresidentMessage from '@/components/aboutUs/president-message/president-message';
import Footer from '@/components/layouts/footer/Footer';
<<<<<<< HEAD
import BackToTopButton from '@/components/layouts/backtotop/BackToTop';
=======
import Navbar from '@/components/layouts/navbar/Navbar';
>>>>>>> 31e9d3150d0d126f678406c5bc709258b736120e

import Hero from '@/components/aboutUs/about-hero/About-Hero';



 
function page() {
    return (
      <>
        <Navbar/>
        <Hero/>
        <PresidentMessage/>
        <Footer/>
        <BackToTopButton />

   
       
      </>
    );
  }
  
  export default page;