'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import WhoWeAre from '@/components/who-we-are/who-we-are';
import Footer from '@/components/footer/footer';




function page() {
    return (
      <>
        <Navbar/>
       <WhoWeAre/>
       <Footer/>
       
      </>
    );
  }
  
  export default page;