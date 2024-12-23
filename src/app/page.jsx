'use client';
import react from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Story from "@/components/story/Story";


function Page() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Story />
    </div>
  )
}

export default Page;