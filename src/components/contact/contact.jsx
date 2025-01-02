'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ContactUsPage = () => {
  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      {/* Spacer for Navbar */}
      <div className="h-24"></div>

      {/* Contact Us Image */}
      <motion.div
        className="relative w-full px-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/contactusi.jpg"
          alt="Contact Us"
          className="w-full max-w-7xl h-auto object-cover mx-auto rounded-lg shadow-lg"
        />
      </motion.div>

      <div className="flex flex-wrap justify-center items-start gap-8 mt-12 px-4">
        {/* Left Section: Bullet Points and Cards */}
        <motion.div
          className="flex flex-col gap-8 w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Bullet Points */}
          <div className="space-y-4 text-base sm:text-lg text-gray-700">
            <ul className="list-disc pl-6">
              <li>
                <strong>We’d love to hear from you!</strong>
              </li>
              <li>Have questions about our initiatives for the Kokani Muslim community?</li>
              <li>Want to get involved in our programs or activities?</li>
              <li>Our team is here to support you and strengthen our community connections!</li>
            </ul>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Address Card */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-2xl transform transition duration-300 hover:scale-105"
            >
              <div className="text-3xl text-[#EBD060] mb-4">📍</div>
              <h3 className="font-bold text-lg mb-2">Address</h3>
              <p className="text-sm text-gray-600">
                Basement of Building No.6,<br />
                Al Qatami St.,<br />
                Block 10, Salmiya, Kuwait
              </p>
            </motion.div>

            {/* Email Address Card */}
            <motion.div
              className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4 text-center hover:shadow-2xl transform transition duration-300 hover:scale-105"
            >
              <div className="text-3xl text-[#EBD060] mb-4">✉️</div>
              <h3 className="font-bold text-lg mb-2">Email Address</h3>
              <p className="text-sm text-gray-600">kwskwt@gmail.com</p>
            </motion.div>

            {/* Call Us On Card */}
            <motion.div
              className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4 text-center hover:shadow-2xl transform transition duration-300 hover:scale-105"
            >
              <div className="text-3xl text-[#EBD060] mb-4">📞</div>
              <h3 className="font-bold text-lg mb-2">Call Us On</h3>
              <p className="text-sm text-gray-600">+91 808 254 40401</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section: Drop Us a Message Card */}
        <motion.div
          className="w-full md:w-[484px] bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transform transition duration-300 hover:scale-105"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Drop Us A Message</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            We’re just a message away. Whether it’s a query or feedback, let us know how we can assist. Contact our team anytime!
          </p>

          {/* Form Fields */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-[50px] px-4 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full h-[50px] px-4 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
            />
            <textarea
              placeholder="Message"
              className="w-full h-[100px] px-4 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
            ></textarea>
          </div>

          <button
            type="button"
            className="mt-6 w-full h-[50px] bg-[#EBD060] text-white rounded-lg shadow-lg hover:bg-[#d4b754] transition duration-300"
          >
            Send Message
          </button>
        </motion.div>
      </div>

      {/* Location Section */}
      <div className="mt-16 flex flex-col justify-center items-center px-4">
        <div className="w-full md:w-[80%] h-[300px] md:h-[350px] border rounded-lg overflow-hidden shadow-lg">
          <a
            href="https://www.google.com/maps/place/29%C2%B019'51.0%22N+48%C2%B003'56.9%22E/@29.321439,48.064216,1729m/data=!3m1!1e3!4m4!3m3!8m2!3d29.3308333!4d48.0658056?hl=en-US&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/location.png"
              alt="Location"
              className="w-full h-full object-cover cursor-pointer"
            />
          </a>
        </div>
        <button
          className="mt-6 px-8 py-3 bg-[#EBD060] text-white rounded-lg shadow-lg text-lg hover:bg-[#d4b754] transition duration-300"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/29%C2%B019'51.0%22N+48%C2%B003'56.9%22E/@29.321439,48.064216,1729m/data=!3m1!1e3!4m4!3m3!8m2!3d29.3308333!4d48.0658056?hl=en-US&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
              "_blank"
            )
          }
        >
          Visit Our Location
        </button>
      </div>

      {/* Spacer after Visit Location Button */}
      <div className="h-24"></div>
    </div>
  );
};

export default ContactUsPage;
  