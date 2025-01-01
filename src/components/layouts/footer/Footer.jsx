import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-5 flex flex-col items-center justify-center shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="w-full max-w-7xl flex flex-wrap justify-between items-start gap-8">
        {/* Logo Section */}
        <div className="flex-1 text-center sm:text-left">
          <img src="/kws-logo.png" alt="Logo" className="h-32 mx-8 sm:mx-0   " />
          <p className="text-sm mt-4 max-w-md mx-auto sm:mx-0">
            To foster unity among the Kokani community in Kuwait, promote brotherhood, and encourage education and economic growth, creating a harmonious and impactful society.
          </p>
        </div>

        {/* Address Section */}
        <div className="flex-1 text-left">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-base ">Basement of Building no.6,</p>
          <p className="text-base">Al Qatami St.,</p>
          <p className="text-base">Block 10, Salmiya, Kuwait</p>
          <h3 className="text-lg font-semibold mt-4 mb-2">Postal Address</h3>
          <p className="text-base">Post Office Box: 636, Dasman 15457, Kuwait</p>
        </div>

        {/* Social Media Section */}
        <div className="flex-1 text-center sm:text-right">
          <h3 className="text-lg font-semibold mb-2">Let’s Socialize</h3>
          <div className="flex justify-center sm:justify-end gap-4 mb-4 text-2xl">
            <a href="https://www.instagram.com/kwskwt/" className="block text-pink-600 hover:text-pink-800">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/kokanwelfaresociety/" className="block text-blue-600 hover:text-blue-800">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/@kokanwelfaresocietykuwait3579/featured" className="block text-red-600 hover:text-red-800">
              <FaYoutube />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fkwskuwait" className="block text-blue-400 hover:text-blue-600">
              <FaTwitter />
            </a>
            
          </div>
          <h3 className="text-lg font-semibold mb-2">Get Notified</h3>
          <p className="text-base mb-4">Enter your email to get notified for our new solutions:</p>
          <form className="flex justify-center sm:justify-end">
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
      <div className="text-center text-sm mt-20 font-bold">
        Copyright © 2022. All rights reserved. Kokan Welfare Society Kuwait.
      </div>
    </footer>
  );
};

export default Footer;
