'use client'
import React from 'react';
import Navbar from '@/components/layouts/navbar/Navbar';
import PicnicPage2022 from '@/components/media/picnic/picnic';
import IslamicCompetitionPage from '@/components/media/islamic-comp/islamic-comp';
import Footer from '@/components/layouts/footer/Footer';






function page() {
    return (
      <>
        <Navbar/>
        <PicnicPage2022/>
        <IslamicCompetitionPage/>
        <Footer/>

   
       
      </>
    );
  }
  
  export default page;