'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
<<<<<<< HEAD
import PresidentMessage from '@/components/president-message/president-message';
import Footer from '@/components/footer/footer';






=======
import AboutHero from '@/components/aboutUs/about-hero/About-Hero'
import PresidentMessage from '@/components/aboutUs/president-message/president-message';
import Footer from '@/components/layouts/footer/Footer';
>>>>>>> 34ab2b589b0402ff76eb509a48645bb0a48a47c2

function page() {
    return (
      <>
        <Navbar/>
        <AboutHero />
        <PresidentMessage/>
        <Footer/>

   
       
      </>
    );
  }
  
  export default page;