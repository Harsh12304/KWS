  import Link from 'next/link'; // Import Link for navigation
  import React from 'react';
  import { motion } from 'framer-motion';

  const Story = () => {
    return (
      <div className="relative font-[Exo 2] w-full h-auto bg-[#193540] flex flex-col sm:flex-row items-center justify-center p-8 sm:p-16">
        {/* Image Section */}
        <motion.div
          className="flex flex-1 items-center justify-center sm:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="w-full max-w-[90%] sm:max-w-[700px] object-cover "
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
            className="mt-6 text-white text-sm sm:text-base md:text-lg leading-[1.5] "
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

          {/* Button */}
          <motion.div
            className="mt-4 sm:mt-6 flex justify-center sm:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/about/who-we-are"
              className="h-10 sm:h-12 w-32 sm:w-40 bg-[#EBD060] text-[#193540] py-2 sm:py-3 rounded-full flex items-center justify-center text-sm sm:text-base font-semibold border-2 border-transparent hover:bg-[#CBB441] hover:border-[#193540] hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              Read more
            </Link>
          </motion.div>
        </div>
      </div>
    );
  };

  export default Story;
