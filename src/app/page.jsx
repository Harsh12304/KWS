'use client';
import { useState, useEffect } from "react";
import Navbar from "@/components/layouts/navbar/Navbar";
import Hero from "@/components/home/hero/Hero";
import Partners from "@/components/home/partners/Partners";
import Footer from "@/components/layouts/footer/Footer";
import Story from "@/components/home/story/Story";
import Team from "@/components/home/team/Team";
import Mission from "@/components/home/vision-mission/Vision-Mission";
import BackToTopButton from "@/components/layouts/backtotop/BackToTop";
import { motion, AnimatePresence } from "framer-motion";

function Page() {
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 3000); // Greeting duration (3 seconds)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-6xl text-white font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Assalamu Alaikum
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!showGreeting && (
        <div className="relative">
          <Navbar />
          <Hero />
          <Partners />
          <Story />
          <Team />
          <Mission />
          <Footer />
          <BackToTopButton />
        </div>
      )}
    </>
  );
}

export default Page;
