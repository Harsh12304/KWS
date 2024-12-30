import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video Section */}
      <div className="relative w-full h-full">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Text Section */}
        <motion.div
          className="absolute inset-x-0 bottom-20 flex flex-col items-center z-10 text-white text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase">
            Kokan Welfare Society
          </h1>
          <hr className="w-3/4 sm:w-1/2 mx-auto border-t-2 border-white mt-2" />
          <p className="mt-4 text-xs sm:text-sm md:text-base font-bold uppercase">
            Together we will Rebuild our Future
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
