'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import IslamicCompetitionPage from '@/components/media/islamic-comp/islamic-comp';
import PicnicPage2022 from '@/components/media/picnic/picnic';
import Footer from '@/components/layouts/footer/Footer';







function page() {
    return (
      <>
        <Navbar/>
        <IslamicCompetitionPage/>
        <PicnicPage2022/>
        <Footer/>

   
       
      </>
    );
  }
  
  export default page;