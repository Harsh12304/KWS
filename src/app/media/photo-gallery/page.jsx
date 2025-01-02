'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import PhotoGallery from '@/components/media/photo/photo';
import VideoGallery from '@/components/media/video/video';
import Footer from '@/components/layouts/footer/Footer';
import BackToTopButton from '@/components/layouts/backtotop/BackToTop';







function page() {
    return (
      <>
        <Navbar/>
        <PhotoGallery/>
        <Footer/>
        <BackToTopButton />

   
       
      </>
    );
  }
  
  export default page;