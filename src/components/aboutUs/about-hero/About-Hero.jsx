import React from 'react';

const Hero = () => {
  return (

    <div className="w-full h-[60vh] sm:h-[80vh] bg-gray-200">
    {/* Hero Image for Mobile */}
    <img
      src="/mobile-hero.jpg"
      alt="Hero Image"
      className="w-full h-full object-cover block sm:hidden"
    />

    {/* Hero Image for Desktop */}
    <img
      src="/img/about4.png"
      alt="Hero Image"
      className="w-full h-full object-cover hidden sm:block"
    />
  </div>



    // <div className="relative w-full h-screen">
    //   {/* Image Section */}
    //   <div className="relative w-full h-full">

    //   <img
    //     srcSet="/img/about4.png 1280w, /img/about4.png 768w, /mobile-hero.jpg 320w"
    //     sizes="(max-width: 640px) 320px, (max-width: 1024px) 768px, 1280px"
    //     src="/.jpg"
    //     alt="Hero Image"
    //     className="w-full h-full object-cover"
    //   />


        // {/* <img
        //   src="/img/about4.png"
        //   className="absolute inset-0 w-full h-full sm:h-full sm:max-h-screen object-cover z-0"
        //   alt="Hero Background"
        //   loading="lazy"
        // /> */}

        // {/* Transparent Overlay (Optional) */}
        // {/* <div className="absolute inset-0 bg-[#54847780] z-5"></div> */}

        // {/* Text Section (Optional) */}
        // {/* <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-10 text-white text-center px-4 sm:px-8">
        //   <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
        //     About Us
        //   </h1>
        // </div> */}
    //   </div>
    // </div>
  );
};

export default Hero;
