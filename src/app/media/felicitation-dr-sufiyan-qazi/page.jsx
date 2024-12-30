'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import FelicitationPage from '@/components/media/felicitation-dr-sufiyan-qazi/Felicitation-Dr-Sufiyan-Qazi';

import Footer from '@/components/layouts/footer/Footer';
import BackToTopButton from '@/components/layouts/backtotop/BackToTop';







function page() {
    return (
      <>
        <Navbar/>
        <FelicitationPage />
        <Footer/>
        <BackToTopButton />

   
       
      </>
    );
  }
  
  export default page;