'use client'
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import PhotoGallery from '@/components/media/photo/photo';
import Footer from '@/components/footer/footer';







function page() {
    return (
      <>
        <Navbar/>
        <PhotoGallery/>
        <Footer/>

   
       
      </>
    );
  }
  
  export default page;