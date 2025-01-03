import Link from "next/link"; // Import Link for navigation
import React from "react";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <div className="m-0 p-0">
      {" "}
      {/* Remove any global margin or padding */}
      {/* Heading Between Components */}
      <div className="text-center my-12">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-[#193540]">
          Who We Are
        </h2>
      </div>
      {/* First Component */}
      <motion.div
        className="relative font-[Cairo] w-full h-auto bg-[#193540] flex flex-col sm:flex-row items-center justify-center p-8 sm:p-16"
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
            Kokan Welfare Society, Kuwait (KWS) is founded in 2012 by
            like-minded people from the Kokan region (coastal Maharashtra)
            residing in Kuwait. The motivation behind the formation of this
            association is to bring the community onto a common platform and
            work together for the development and welfare of all people,
            especially for those from the Kokan region and generally from India.
          </motion.p>
        </div>
      </motion.div>
      {/* Second Component */}
      <motion.div
        className="relative font-[Cairo] w-full h-auto bg-[#EBD077] flex flex-col sm:flex-row-reverse items-center justify-center p-8 sm:p-16"
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
            <h2 className="text-[#193540] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
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
            believe that education and economic empowerment of members will
            uplift the community and contribute to the region and
            nation-building as a whole, whether it's back home or in the place
            we work.
          </motion.p>
        </div>
      </motion.div>
      {/* Third Component */}
      <motion.div
        className="relative font-[Cairo] w-full h-auto bg-[#193540] flex flex-col sm:flex-row items-center justify-center p-8 sm:p-16"
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
            src="/img/about7.png"
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
            Kokan Welfare Society, Kuwait (KWS) is founded in 2012 by
            like-minded people from Kokan region (coastal Maharashtra) residing
            in Kuwait. The motivation behind the formation of this association
            is to bring the community onto a common platform and work together
            for the development and welfare of all people, especially for the
            people from Kokan region and generally from India.
          </motion.p>
        </div>
      </motion.div>
      {/* Fourth Component */}
      <motion.div
        className="relative font-[Cairo] w-full h-auto bg-[#EBD077] flex flex-col sm:flex-row-reverse items-center justify-center p-8 sm:p-16 mb-16 "
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
            src="/img/about6.png"
            alt="UNITY AND EMPOWERMENT"
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
            <h2 className="text-[#193540] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
              UNITY AND EMPOWERMENT
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
      {/* Image & Button Section Above Footer */}
      <div
        className="relative w-full h-[200px] mt-12 bg-cover bg-center"
        style={{ backgroundImage: "url(/texture.png)" }}
      >
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-8">
          {/* Left Side Text */}
          <div className="text-white text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold">Be the Change</h3>
            <p className="mt-4 text-sm sm:text-base">
              Join us as a volunteer and make a lasting <br /> impact today!
            </p>
          </div>

          {/* Right Side Button */}
          <div className="flex items-center justify-center sm:justify-end mt-4 sm:mt-0">
            <Link
              className="w-[187.82px] h-[60px] bg-[#FFFFFF] text-[#193540] flex items-center justify-center text-lg font-semibold shadow-md hover:bg-[#CBB441] transition duration-300"
              href="/"
            >
              Volunteer Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

