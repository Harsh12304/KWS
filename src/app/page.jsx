'use client';
import react from "react";
import Navbar from "@/components/layouts/navbar/Navbar";
import Hero from "@/components/home/hero/Hero";
import Partners from "@/components/home/partners/Partners";
import Footer from "@/components/layouts/footer/Footer";
import Story from "@/components/home/story/Story";
import Team from "@/components/team/Team";
import Mission from "@/components/home/mission-vision/Mission-Vision";



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