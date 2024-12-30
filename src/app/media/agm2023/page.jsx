'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import AGM2023 from '@/components/media/agm2023/agm2023';
import Footer from '@/components/layouts/footer/Footer';
import BackToTopButton from '@/components/layouts/backtotop/BackToTop';







function page() {
    return (
      <>
        <Navbar/>
        <AGM2023/>
        <Footer/>
        <BackToTopButton />
   
       
      </>
    );
  }
  
  export default page;