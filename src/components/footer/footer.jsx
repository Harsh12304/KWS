import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black p-10 flex flex-col items-center justify-center shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center w-full max-w-7xl flex-wrap">
        {/* Logo Section - Left Aligned */}
        <div className="flex-1 flex flex-col items-center">
          <img src="/kws-logo.png" alt="Logo" className="h-52" />
          <p className="text-center text-sm mt-4 max-w-md">
            To foster unity among the Kokani community in Kuwait, promote brotherhood, and encourage education and economic growth, creating a harmonious and impactful society.
          </p>
        </div>

        {/* Address Section - Centered in the Footer */}
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-base">Basement of Building no.6,</p>
          <p className="text-base">Al Qatami St.,</p>
          <p className="text-base">Block 10, Salmiya, Kuwait</p>
          {/* Postal Address */}
          <h3 className="text-lg font-semibold mt-4 mb-2">Postal Address</h3>
          <p className="text-base">Post Office Box: 636, Dasman 15457, Kuwait</p>
        </div>

        {/* Social Media Section - Right Aligned */}
        <div className="flex-1 text-right">
          <h3 className="text-lg font-semibold mb-2">Let’s Socialize</h3>
          <div className="flex justify-end gap-2.5 mb-4">
            <a href="#" className="block"><img src="/instagram.png" alt="Instagram" className="h-10 w-10" /></a>
            <a href="#" className="block"><img src="/facebook.png" alt="Facebook" className="h-10 w-10" /></a>
            <a href="#" className="block"><img src="/twitter.png" alt="Twitter" className="h-10 w-10" /></a>
            <a href="#" className="block"><img src="/linkedin.png" alt="LinkedIn" className="h-10 w-10" /></a>
          </div>
          {/* Email Notification Section */}
          <h3 className="text-lg font-semibold mb-2">Get Notified</h3>
          <p className="text-base mb-4">Enter your email to get notified about our new solutions:</p>
          <form className="flex justify-end">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 text-base border-2 border-gray-300 rounded-lg"
              required
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium p-2 ml-2 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* Copyright Text */}
      <div className="text-center text-sm mt-5 font-bold">
        Copyright © 2022. All rights reserved. Kokan Welfare Society Kuwait.
      </div>
    </footer>
  );
};

export default Footer;
