import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Image Section */}
      <div className="relative w-full h-full">
        <img
          src="/img/about4.png"
          className="absolute inset-0 w-full h-full sm:h-full sm:max-h-screen object-cover z-0"
          alt="Hero Background"
          loading="lazy"
        />

        {/* Transparent Overlay (Optional) */}
        {/* <div className="absolute inset-0 bg-[#54847780] z-5"></div> */}

        {/* Text Section (Optional) */}
        {/* <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-10 text-white text-center px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
            About Us
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
