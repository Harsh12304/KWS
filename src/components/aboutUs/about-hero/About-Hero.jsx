import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Image Section */}
      <div className="relative w-full h-full">
        <img
          src="/Ahero.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Hero Background"
        />

        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-[#54847780] z-5"></div>

        {/* Text Section */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase">
            about us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
