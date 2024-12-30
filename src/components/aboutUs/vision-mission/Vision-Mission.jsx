import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full min-h-screen mt-[120px]">
      {/* Vision Image */}
      <motion.div
        className="image w-full h-15 flex items-center justify-center mb-[120px]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src="/image.png" alt="vision" />
      </motion.div>

      {/* Vision Statement */}
<<<<<<< HEAD
      <div className="flex items-center justify-center ml-[10vw] mr-[10vw] mb-[80px]">
        <p className="text-2xl text-center animate__fadeInUp ">
          To bring cohesive understanding among Kokani community living in Kuwait, promote 
          brotherhood and enlighten them about education and economic development thereby 
=======
      <motion.div
        className="flex items-center justify-center ml-[10vw] mr-[10vw] mb-[80px]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-2xl text-center">
          To bring cohesive understanding among Kokani community living in Kuwait, promote
          brotherhood and enlighten them about education and economic development thereby
>>>>>>> 31e9d3150d0d126f678406c5bc709258b736120e
          create a happy community which would play an important role in humanity development.
        </p>
      </motion.div>

      {/* Objectives Section */}
      <motion.div
        className="flex items-center justify-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold capitalize">Our Objectives</h2>
<<<<<<< HEAD
      </div>
        {/* Objective Boxes */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-5 mb-2 animate__fadeInUp ">
        
        {/* Box 1 */}
          <div  className="h-[200px] w-full bg-[#C0DDCF] rounded-3xl p-4 flex flex-col items-center">
            <img className="w-16 h-16" src="/1.png" alt="icon" />
            <p data-aos="fade-left" className="text-xl font-medium text-center mt-4  ">
              Creating educational awareness among
              <br /> the community
            </p>
          </div>

        {/* Box 2 */}

          <div  className="h-[200px] w-full bg-[#C0DDCF] rounded-3xl p-4 flex flex-col items-center">
            <img className="w-16 h-16" src="/2.png" alt="icon" />
            <p data-aos="fade-left" className="text-xl font-medium text-center mt-4">
            Guiding people on educational 
              <br /> facilities and admissions.
            </p>
          </div>

        {/* Box 3 */}

          <div  className="h-[200px] w-full bg-[#C0DDCF] rounded-3xl p-4 flex flex-col items-center">
            <img className="w-16 h-16" src="/3.png" alt="icon" />
            <p data-aos="fade-left" className="text-xl font-medium text-center mt-4">
            Supporting underprivileged   
              <br /> students in completing their 
              <br />education.
              </p>
          </div>

        {/* Box 4 */}

          <div  className="h-[200px] w-full bg-[#C0DDCF] rounded-3xl p-4 flex flex-col items-center">
            <img className="w-16 h-16" src="/4.png" alt="icon" />
            <p data-aos="fade-left" className="text-xl font-medium text-center mt-4">
            Helping the needy and  
              <br /> enthusiastic students for higher
              <br />Education.
            </p>
          </div>

        {/* Box 5 */}

          <div  className="h-[200px] w-full bg-[#C0DDCF] rounded-3xl p-4 flex flex-col items-center">
            <img className="w-16 h-16" src="/5.png" alt="icon" />
            <p data-aos="fade-left" className="text-xl font-medium text-center mt-4">
            Guiding people towards diverse 
              <br /> employment opportunities.
            </p>
          </div>

        {/* Box 6 */}

          <div  className="h-[200px] w-full bg-[#C0DDCF] rounded-3xl p-4 flex flex-col items-center">
            <img className="w-16 h-16" src="/6.png" alt="icon" />
            <p data-aos="fade-left" className="text-xl font-medium text-center mt-4">
            Supporting the establishment of  
              <br /> educational and community
              <br />  centers.
            </p>
          </div>

        {/* Box 7 */}

          <div  className="h-[200px] w-full bg-[#C0DDCF] rounded-3xl p-4 flex flex-col items-center">
            <img className="w-16 h-16" src="/7.png" alt="icon" />
            <p data-aos="fade-left" className="text-xl font-medium text-center mt-4">
            Helping the people affected by  
              <br /> calamities and disastrous
              <br />condition.
            </p>
          </div>

        {/* Box 8 */}

          <div  className="h-[200px] w-full bg-[#C0DDCF] rounded-3xl p-4 flex flex-col items-center">
            <img className="w-16 h-16" src="/8.png" alt="icon" />
            <p data-aos="fade-left" className="text-xl font-medium text-center mt-4">
            Organizing social, artistic, literary, 
              <br /> and sports activities.
            </p>
          </div>

        {/* Box 9 */}

          <div  className="h-[200px] w-full bg-[#C0DDCF] rounded-3xl p-4 flex flex-col items-center">
            <img className="w-16 h-16" src="/9.png" alt="icon" />
            <p data-aos="fade-left" className="text-xl font-medium text-center mt-4">
            Fostering brotherhood through the 
              <br /> teachings of Islam.
            </p>
          </div>
        
      </div>

      {/* Objective Boxes */}

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-5 mb-10 ">

        {/* Box 10 */}

      <div  className="h-[200px] w-full bg-[#C0DDCF] rounded-3xl p-4 flex flex-col items-center">
            <img className="w-16 h-16" src="/10.png" alt="icon" />
            <p data-aos="fade-left" className="text-xl font-medium text-center mt-4">
            Serving as a coordination hub for  
              <br /> Kokan associations in Kuwait.
=======
      </motion.div>

      {/* Objective Boxes */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-5 mb-2">
        {Array.from({ length: 9 }, (_, i) => (
          <motion.div
            key={i}
            className="h-[200px] w-full bg-[#C0DDCF] rounded-3xl p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img className="w-16 h-16" src={`/${i + 1}.png`} alt={`icon ${i + 1}`} />
            <p className="text-xl font-medium text-center mt-4">
              {getObjectiveText(i)}
>>>>>>> 31e9d3150d0d126f678406c5bc709258b736120e
            </p>
          </motion.div>
        ))}
      </div>

<<<<<<< HEAD
        {/* Box 11 */}

          <div  className="h-[200px] w-full bg-[#C0DDCF] rounded-3xl p-4 flex flex-col items-center">
            <img className="w-16 h-16" src="/11.png" alt="icon" />
            <p data-aos="fade-left" className="text-xl font-medium text-center mt-4">
            To liaison with Embassy of India for 
              <br /> community issues.
=======
      {/* Additional Objective Boxes */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-5 mb-10">
        {Array.from({ length: 2 }, (_, i) => (
          <motion.div
            key={i + 9}
            className="h-[200px] w-full bg-[#C0DDCF] rounded-3xl p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i + 9) * 0.2 }}
          >
            <img className="w-16 h-16" src={`/${i + 10}.png`} alt={`icon ${i + 10}`} />
            <p className="text-xl font-medium text-center mt-4">
              {getObjectiveText(i + 9)}
>>>>>>> 31e9d3150d0d126f678406c5bc709258b736120e
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const getObjectiveText = (index) => {
  const objectives = [
    "Creating educational awareness among the community",
    "Guiding people on educational facilities and admissions",
    "Supporting underprivileged students in completing their education",
    "Helping the needy and enthusiastic students for higher education",
    "Guiding people towards diverse employment opportunities",
    "Supporting the establishment of educational and community centers",
    "Helping the people affected by calamities and disastrous conditions",
    "Organizing social, artistic, literary, and sports activities",
    "Fostering brotherhood through the teachings of Islam",
    "Serving as a coordination hub for Kokan associations in Kuwait",
    "To liaison with Embassy of India for community issues",
  ];
  return objectives[index];
};

export default VisionMission;
