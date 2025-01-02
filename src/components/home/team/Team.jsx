'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Team = () => {
  const imageVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  // Array of images with corresponding hover text
  const teamData = [
    { src: '/Frame1.png', text: 'Office Bearer and Executive Committee Members', link: '/' },
    { src: '/Frame2.png', text: 'Coordination Committee Members', link: '/' },
    { src: '/Frame3.png', text: 'Volunteer Committee Members', link: '/ ' },
  ];

  return (
    <div className="w-full py-12 bg-white">
      {/* Centered Heading Section */}
      <div className="text-center px-4 mb-12">
        <p className="text-[#193540] font-semibold text-[18px] sm:text-[20px] mb-2">
          Leadership.Vision.Unity.
        </p>
        <h2 className="text-[#EBD060] font-bold text-3xl sm:text-4xl lg:text-5xl">
          Meet our Team Members
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            className="relative w-full sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px] overflow-hidden rounded-lg shadow-lg"
            variants={imageVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover="hover"
          >
            {/* Image */}
            <motion.img
              src={member.src}
              alt={`Team Member ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-[#193540] bg-opacity-70 flex flex-col items-center justify-center text-white text-center px-4 opacity-0 transition-opacity duration-300 hover:opacity-100"
            >
              <p className="text-lg font-semibold mb-4">{member.text}</p>

              {/* Button */}
              <Link className="px-6 py-2 bg-[#EBD060] text-[#193540] font-semibold rounded-lg hover:bg-[#D4A950] transition-colors duration-300" href={member.link}>
              
                  View Committee
                
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
