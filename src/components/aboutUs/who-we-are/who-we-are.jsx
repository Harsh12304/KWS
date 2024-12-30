import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <div>
      <div>
        {/* First Component */}
        <motion.div
          className="relative w-full sm:w-[1244px] h-auto sm:h-[523px] bg-[#B8E1C2] top-6 flex flex-col sm:flex-row p-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Image Section */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <motion.img
              className="mt-10 sm:mt-28 sm:ml-10 w-auto max-w-[90%] sm:max-w-none object-contain"
              src="/story.png"
              alt="About Our Story"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center sm:items-end flex-1 mt-6 sm:mt-0 px-4">
            <div className="w-full max-w-[90%] sm:max-w-[720px] h-auto bg-[#67B291] flex flex-col items-center justify-center px-6 md:px-12 py-8 sm:py-10 relative shadow-md">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center relative">
                <span className="text-[#000]">About</span> Our Story
              </h2>
              <hr className="w-full sm:w-[85%] md:w-[75%] border-t-3 border-white mt-3 rotate-3 origin-left" />
            </div>
            <p className="mt-6 w-full max-w-[90%] sm:max-w-[720px] text-justify text-sm sm:text-base md:text-lg px-4 sm:px-6">
              KWS understands importance of unity and it is fundamental to its all activities and consciously promoting brotherhood among the members. We believe that education and economic empowerment of members would uplift the community and contribute in the region and nation building as a whole; whether it’s back home or place we work.
            </p>
          </div>
        </motion.div>

        <br />

        {/* Second Component */}
        <motion.div
          className="relative w-full sm:w-[1244px] h-auto sm:h-[523px] bg-[#B8E1C2] top-6 ml-auto flex flex-col sm:flex-row-reverse p-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <motion.img
              className="mt-10 sm:mt-28 sm:ml-10 w-auto max-w-[90%] sm:max-w-none object-contain"
              src="/unity.png"
              alt="About Our Story"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex flex-col items-center sm:items-start flex-1 mt-6 sm:mt-0 px-4">
            <div className="w-full max-w-[90%] sm:max-w-[720px] h-auto bg-[#67B291] flex flex-col items-center justify-center px-6 md:px-12 py-8 sm:py-10 relative shadow-md">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center relative capitalize">
                unity <span className="text-[#000]">And</span><br /> empowerment
              </h2>
              <hr className="w-full sm:w-[85%] md:w-[75%] border-t-3 border-white mt-3 rotate-3 origin-left" />
            </div>
            <p className="mt-6 w-full max-w-[90%] sm:max-w-[720px] text-justify text-sm sm:text-base md:text-lg px-4 sm:px-6">
              KWS understands importance of unity and it is fundamental to its all activities and consciously promoting brotherhood among the members. We believe that education and economic empowerment of members would uplift the community and contribute in the region and nation building as a whole; whether it’s back home or place we work.
            </p>
          </div>
        </motion.div>

        <br />

        {/* Third Component */}
        <motion.div
          className="relative w-full sm:w-[1244px] h-auto sm:h-[523px] bg-[#B8E1C2] top-6 flex flex-col sm:flex-row p-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <motion.img
              className="mt-10 sm:mt-28 sm:ml-10 w-auto max-w-[90%] sm:max-w-none object-contain"
              src="/story.png"
              alt="About Our Story"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex flex-col items-center sm:items-end flex-1 mt-6 sm:mt-0 px-4">
            <div className="w-full max-w-[90%] sm:max-w-[720px] h-auto bg-[#67B291] flex flex-col items-center justify-center px-6 md:px-12 py-8 sm:py-10 relative shadow-md">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center relative capitalize">
                <span className="text-[#000]">commitment</span> to <br /> empowerment
              </h2>
              <hr className="w-full sm:w-[85%] md:w-[75%] border-t-3 border-white mt-3 rotate-3 origin-left" />
            </div>
            <p className="mt-6 w-full max-w-[90%] sm:max-w-[720px] text-justify text-sm sm:text-base md:text-lg px-4 sm:px-6">
              KWS understands importance of unity and it is fundamental to its all activities and consciously promoting brotherhood among the members. We believe that education and economic empowerment of members would uplift the community and contribute in the region and nation building as a whole; whether it’s back home or place we work.
            </p>
          </div>
        </motion.div>

        <br />

        {/* Fourth Component */}
        <motion.div
          className="relative w-full sm:w-[1244px] h-auto sm:h-[523px] bg-[#B8E1C2] top-6 ml-auto flex flex-col sm:flex-row-reverse p-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <motion.img
              className="mt-10 sm:mt-28 sm:ml-10 w-auto max-w-[90%] sm:max-w-none object-contain"
              src="/unity.png"
              alt="About Our Story"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex flex-col items-center sm:items-start flex-1 mt-6 sm:mt-0 px-4">
            <div className="w-full max-w-[90%] sm:max-w-[720px] h-auto bg-[#67B291] flex flex-col items-center justify-center px-6 md:px-12 py-8 sm:py-10 relative shadow-md">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center relative capitalize">
                unity <span className="text-[#000]">innovating</span><br /> community <br />services
              </h2>
              <hr className="w-full sm:w-[85%] md:w-[75%] border-t-3 border-white mt-3 rotate-3 origin-left" />
            </div>
            <p className="mt-6 w-full max-w-[90%] sm:max-w-[720px] text-justify text-sm sm:text-base md:text-lg px-4 sm:px-6">
              KWS understands importance of unity and it is fundamental to its all activities and consciously promoting brotherhood among the members. We believe that education and economic empowerment of members would uplift the community and contribute in the region and nation building as a whole; whether it’s back home or place we work.
            </p>
          </div>
        </motion.div>

        <br />

        {/* Bottom Text & Button Section */}
        <motion.div
          className="relative w-full h-[171px] mt-[120px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-full">
            <img
              src="/texture.png"
              className="absolute inset-0 w-full h-full object-cover z-0"
              alt="texture"
            />

            <div className="absolute top-1 ml-[250px] transform -translate-x-1/2 z-10 text-white leading-3 mt-5">
              <h3 className="text-3xl md:text-5xl font-thin,bold">Be the change</h3>
              <br />
              <p>Join us as a volunteer and make a lasting impact today!</p>
              <br />
              <p>impact today!</p>
            </div>

            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <Link
                href="#"
                className="h-12 w-40 bg-white text-[#478168] py-2 flex items-center justify-center border-2 hover:bg-[#478168] hover:text-white transition-all duration-300"
              >
                Volunteer now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Story;
