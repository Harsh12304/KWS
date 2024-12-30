
import Footer from '@/components/layouts/footer/Footer'
import ContactUsPage from '@/components/contact/contact'
import Navbar from '@/components/layouts/navbar/Navbar'
import React from 'react'
import BackToTopButton from '@/components/layouts/backtotop/BackToTop'

const page = () => {
  return (
    <div>
        <Navbar />
        <ContactUsPage/>
        <Footer/>
        <BackToTopButton />
    </div>
  )
}

export default page