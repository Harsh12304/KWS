import Link from 'next/link'; // Import Link for navigation
import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <div className="relative w-full h-auto sm:h-screen bg-[#B8E1C2] flex flex-col sm:flex-row p-4">
      {/* Image Section */}
      <motion.div 
        className="flex flex-1 items-center justify-center sm:justify-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          className="mt-10 sm:mt-28 sm:ml-10 w-auto max-w-[90%] sm:max-w-none object-contain"
          src="/story.png"
          alt="About Our Story"
        />
      </motion.div>

      {/* Text Section */}
      <div className="flex flex-col items-center sm:items-start flex-1 mt-6 sm:mt-0 px-4">
        {/* Enlarged Green Box */}
        <div className="w-full max-w-[90%] sm:max-w-[720px] h-auto bg-[#67B291] flex flex-col items-center justify-center px-6 md:px-12 py-8 sm:py-10 relative shadow-md">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center relative">
            <span className="text-[#000]">About</span> Our Story
          </h2>
          <hr className="w-full sm:w-[85%] md:w-[75%] border-t-3 border-white mt-3 rotate-3 origin-left" />
        </motion.div>

        {/* Paragraph */}
        <motion.p 
          className="mt-6 w-full max-w-[90%] sm:max-w-[720px] text-justify text-sm sm:text-base md:text-lg px-4 sm:px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Kokan Welfare Society, Kuwait (KWS) is founded in 2012 by like-minded people from the Kokan region (coastal Maharashtra) residing in Kuwait. The motivation behind the formation of this association is to bring the community onto a common platform and work together for the development and welfare of all people, especially for those from the Kokan region and generally from India.
        </motion.p>

        {/* Button */}
        <motion.div 
          className="flex justify-center mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/about/who-we-are"
            className="h-12 w-40 bg-[#DCEBE2] text-[#478168] py-2 flex items-center justify-center border-2 border-transparent hover:bg-[#67B291] hover:text-white hover:border-[#478168] transition-transform duration-300 transform hover:scale-105"
          >
            Read more
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Story;
