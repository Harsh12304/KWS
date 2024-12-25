'use client'
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import VideoGallery from '@/components/media/video/video';
import Footer from '@/components/footer/footer';







function page() {
    return (
      <>
        <Navbar/>
        <VideoGallery/>
        <Footer/>

   
       
      </>
    );
  }
  
  export default page;