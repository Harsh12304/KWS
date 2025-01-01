'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const imageVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  // Array of images with corresponding hover text
  const teamData = [
    { src: '/Frame1.png', text: 'Office Bearer and Executive Committee Members' },
    { src: '/Frame2.png', text: 'Coordination Committee Members' },
    { src: '/Frame3.png', text: 'Volunteer Committee Members' },
  ];

  return (
    <div className="w-full py-12 bg-white flex flex-col items-center sm:items-start sm:flex-row">
      {/* Text Section */}
      <div className="sm:w-1/3 px-6 sm:pl-12">
        <p className="text-[#478168] font-semibold text-[20px] mb-2">
          Leadership.Vision.Unity.
        </p>
        <h2 className="text-black font-bold text-4xl sm:text-5xl mb-4">
          Meet our<br />Team  Members
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center sm:justify-start gap-6 flex-wrap sm:flex-nowrap px-6 sm:pr-12">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            className="relative w-60 h-60 overflow-hidden rounded-none"
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
              className="absolute inset-0 bg-[#478168] bg-opacity-70 flex items-center justify-center text-white text-center px-4 opacity-0 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            >
              <p className="text-lg font-semibold">{member.text}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
