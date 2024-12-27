'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import VideoGallery from '@/components/media/video/video';
import PhotoGallery from '@/components/media/photo/photo';
import Footer from '@/components/footer/footer';







function page() {
    return (
      <>
        <Navbar/>
        <VideoGallery/>
        <PhotoGallery   />
        <Footer/>

   
       
      </>
    );
  }
  
  export default page;