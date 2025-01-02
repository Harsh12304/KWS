'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import VideoGallery from '@/components/media/video/video';
import PhotoGallery from '@/components/media/photo/photo';
import Footer from '@/components/layouts/footer/Footer';
import BackToTopButton from '@/components/layouts/backtotop/BackToTop';







function page() {
    return (
      <>
        <Navbar/>
        <VideoGallery/>
        <Footer/>
        <BackToTopButton />

   
       
      </>
    );
  }
  
  export default page;