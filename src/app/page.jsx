'use client';
import react from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Partners from "@/components/partners/Partners";
import Footer from "@/components/footer/Footer";
import Story from "@/components/story/Story";
import Team from "@/components/team/Team";
import Mission from "@/components/mission-vision/Mission-Vision";



function Page() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Partners />
        <Story />
        <Team />
        <Mission />
        <Footer />
    </div>
  )
}

export default Page;