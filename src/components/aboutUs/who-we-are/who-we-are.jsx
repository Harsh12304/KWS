import Link from 'next/link'; // Import Link for navigation
import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <div className="m-0 p-0"> {/* Remove any global margin or padding */}

      {/* Heading Between Components */}
      <div className="text-center my-12">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-[#193540]">
          Who We Are
        </h2>
      </div>

      {/* First Component */}
      <motion.div
        className="relative font-[Exo 2] w-full h-auto bg-[#193540] flex flex-col sm:flex-row items-center justify-center p-8 sm:p-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <motion.div
          className="flex flex-1 items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="w-full max-w-full object-cover"
            src="/story.png"
            alt="Our Story"
          />
        </motion.div>

        {/* Text Section */}
        <div className="flex flex-col flex-1 mt-10 sm:mt-0 sm:ml-10 px-4 text-center sm:text-left">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#EBD060] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
              Our Story
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-6 text-white text-sm sm:text-base md:text-lg leading-[1.5]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Kokan Welfare Society, Kuwait (KWS) is founded in 2012 by like-minded
            people from the Kokan region (coastal Maharashtra) residing in
            Kuwait. The motivation behind the formation of this association is to
            bring the community onto a common platform and work together for the
            development and welfare of all people, especially for those from the
            Kokan region and generally from India.
          </motion.p>
        </div>
      </motion.div>

      {/* Second Component */}
      <motion.div
        className="relative font-[Exo 2] w-full h-auto bg-[#EDDCB9] flex flex-col sm:flex-row-reverse items-center justify-center p-8 sm:p-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <motion.div
          className="flex flex-1 items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="w-full max-w-full object-cover"
            src="/img/about2.png"
            alt="Unity and Empowerment"
          />
        </motion.div>

        {/* Text Section */}
        <div className="flex flex-col flex-1 mt-10 sm:mt-0 sm:ml-10 px-4 text-center sm:text-left">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#EBD060] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
              Unity And Empowerment
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-6 text-[#193540] text-sm sm:text-base md:text-lg leading-[1.5]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            KWS understands the importance of unity and it is fundamental to its
            activities, consciously promoting brotherhood among the members. We
            believe that education and economic empowerment of members will uplift
            the community and contribute to the region and nation-building as a
            whole, whether it's back home or in the place we work.
          </motion.p>
        </div>
      </motion.div>

      {/* Third Component */}
      <motion.div
        className="relative font-[Exo 2] w-full h-auto bg-[#193540] flex flex-col sm:flex-row items-center justify-center p-8 sm:p-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <motion.div
          className="flex flex-1 items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="w-full max-w-full object-cover"
            src="/story.png"
            alt="Commitment to Empowerment"
          />
        </motion.div>

        {/* Text Section */}
        <div className="flex flex-col flex-1 mt-10 sm:mt-0 sm:ml-10 px-4 text-center sm:text-left">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#EBD060] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
              Commitment to Empowerment
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-6 text-white text-sm sm:text-base md:text-lg leading-[1.5]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            KWS believes in the importance of empowering its members through
            education and economic means. By fostering unity, we are able to
            contribute positively to the community's growth and development, both
            locally and globally.
          </motion.p>
        </div>
      </motion.div>

      {/* Fourth Component */}
      <motion.div
        className="relative font-[Exo 2] w-full h-auto bg-[#EDDCB9] flex flex-col sm:flex-row-reverse items-center justify-center p-8 sm:p-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <motion.div
          className="flex flex-1 items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="w-full max-w-full object-cover"
            src="/img/about2.png"
            alt="Unity Innovating Community Services"
          />
        </motion.div>

        {/* Text Section */}
        <div className="flex flex-col flex-1 mt-10 sm:mt-0 sm:ml-10 px-4 text-center sm:text-left">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#EBD060] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
              Unity Innovating Community Services
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-6 text-[#193540] text-sm sm:text-base md:text-lg leading-[1.5]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            At KWS, we believe in the power of unity to drive innovation and
            improve the services offered to the community. We strive to create
            meaningful changes that foster growth and development for all our
            members.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Story;
