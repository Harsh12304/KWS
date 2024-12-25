'use client';
import React from "react"; 
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Story from "@/components/story/Story";
import Footer from "@/components/footer/footer";

function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Story />
      <Footer/>
    </div> 
  );
}

export default Page;
