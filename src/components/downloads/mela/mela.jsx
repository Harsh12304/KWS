'use client';
import React from 'react';
import { motion } from 'framer-motion';

const KokanMelaPage = () => {
  // Card Data
  const cardData = [
    {
      title: 'Cricket Tournament',
      image: '/cricket.jpg',
      pdf: '/KWSGAMES-BOX-Cricket-Form.pdf',
    },
    {
      title: 'Football Championship',
      image: '/football.jpg',
      pdf: '/KWSGAMES-Football-Form.pdf',
    },
    {
      title: 'Volleyball Tournament',
      image: '/volleyball.jpg',
      pdf: '/KWSGAMES-Volleyball-Form.pdf',
    },
    {
      title: 'Carrom Tournament',
      image: '/carrom.jpg',
      pdf: '/KWSGAMES-Carrom-Form.pdf',
    },
    {
      title: 'Kabaddi Championship',
      image: '/kabaddi.jpg',
      pdf: '/KWSGAMES-Kabaddi-Form.pdf',
    },
    {
      title: 'Stall Registration',
      image: '/stall.jpg',
      pdf: '/KWSGAMES-Stall-Form.pdf',
    },
  ];

  return (
    <div className="bg-[#F9F9F9] min-h-screen px-4 py-8">
      {/* Spacer for Navbar */}
      <div className="h-24"></div>

      {/* Page Heading */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold text-center text-[#193540] mb-8 sm:mb-12 font-merriweather"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Kokan Mela Sports <span className='h-10 w-10' >🏆</span>
      </motion.h1>

      {/* Notice Section */}
      <motion.div
        className="mb-8 sm:mb-12 flex flex-col items-center border-2 shadow-md  gap-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center mb-4 ">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">Notice  <span className="text-[#D9534F] text-4xl sm:text-5xl mb-2">📢</span>
          </h2>
        </div>
        <p className="text-base sm:text-lg font-sans text-center mb-2 ">
        <span className=' h- w-1 bg-red-700 text-white p-2 rounded-lg text-[15px] mr-4 ' > !</span> New date for <strong className="font-bold">  Kokan Mela</strong> is{' '}
          <motion.strong
            className="text-red-600 font-bold"
            initial={{ opacity: 0.8 }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            Friday, December 15, 2023
          </motion.strong>
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="relative w-full max-w-[360px] sm:max-w-[380px] h-[280px] sm:h-[320px] rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover hover:opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{card.title}</h3>
              <button
                className="px-4 sm:px-6 py-2 bg-[#888A69] text-white rounded-lg shadow hover:bg-[#6E7057] transition duration-300"
                onClick={() => window.open(card.pdf, '_blank')}
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KokanMelaPage;
