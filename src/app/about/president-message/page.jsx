'use client'
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import PresidentMessage from '@/components/president-message/president-message';
import Footer from '@/components/footer/footer';







function page() {
    return (
      <>
        <Navbar/>
        <PresidentMessage/>
        <Footer/>

   
       
      </>
    );
  }
  
  export default page;