import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video Section */}
      <div className="relative w-full h-full">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Text Section */}
        <div className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase">
            Kokan Welfare Society
          </h1>
        </div>

        <div className="absolute bottom-[2%] left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
          <p className="text-sm md:text-base font-bold uppercase">
            Together we will Rebuild our Future
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
