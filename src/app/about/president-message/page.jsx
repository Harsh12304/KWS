'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import PresidentMessage from '@/components/aboutUs/president-message/president-message';
import Footer from '@/components/layouts/footer/Footer';

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