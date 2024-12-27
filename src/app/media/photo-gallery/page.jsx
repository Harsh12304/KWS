'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import PhotoGallery from '@/components/media/photo/photo';
import VideoGallery from '@/components/media/video/video';
import Footer from '@/components/layouts/footer/Footer';







function page() {
    return (
      <>
        <Navbar/>
        <PhotoGallery/>
        <VideoGallery/>
        <Footer/>

   
       
      </>
    );
  }
  
  export default page;