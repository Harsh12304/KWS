import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video Section */}
      <div className="relative w-full h-full">
        <video
          src="/hero.mp4" // Path to your video in the public folder
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Text Section */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-5xl font-bold bg-opacity-0 text-center uppercase">
          Kokan Welfare Society
        </div>

        <div className="absolute  bottom-[5%] left-1/2 transform -translate-x-1/2 z-10 text-white text-5xl font-bold text-center uppercase">
          Together we will Rebuild our Future
        </div>
      </div>
    </div>
  );
};

export default Hero;
