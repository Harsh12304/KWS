
import Footer from '@/components/layouts/footer/Footer'
import ContactUsPage from '@/components/contact/contact'
import Navbar from '@/components/layouts/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <ContactUsPage/>
        <Footer/>
        
    </div>
  )
}

export default page