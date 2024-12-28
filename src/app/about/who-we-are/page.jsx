'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
<<<<<<< HEAD
import WhoWeAre from '@/components/who-we-are/who-we-are';
import Footer from '@/components/footer/footer';
=======
import AboutHero from '@/components/aboutUs/about-hero/About-Hero'
import WhoWeAre from '@/components/aboutUs/who-we-are/who-we-are';
import Footer from '@/components/layouts/footer/Footer';
>>>>>>> 34ab2b589b0402ff76eb509a48645bb0a48a47c2




function page() {
    return (
      <>
        <Navbar/>
<<<<<<< HEAD
       <WhoWeAre/>
       <Footer/>
       
=======
        <AboutHero />
        <WhoWeAre/>
       <Footer />
>>>>>>> 34ab2b589b0402ff76eb509a48645bb0a48a47c2
      </>
    );
  }
  
  export default page;