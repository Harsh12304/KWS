import React from 'react';

const Partners = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#dce8df] flex flex-col items-center justify-center px-4">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-[36px] md:text-[48px] font-bold text-[#000]">
          Our Partners
        </h1>
        <p className="text-[16px] md:text-[20px] text-[#274d39] leading-[1.5]">
          Trusted Collaborative Allies
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="flex items-center justify-center  w-full h-[195px] shadow-md rounded-lg">
          <img src="karak-makani.png" alt="karak-makani" className="h-auto max-w-full" />
        </div>
        <div className="flex items-center justify-center  w-full h-[195px] shadow-md rounded-lg">
          <img src="metro-medical.png" alt="metro-medical" className="h-auto max-w-full" />
        </div>
        <div className="flex items-center justify-center  w-full h-[195px] shadow-md rounded-lg">
          <img src="dadabhai-travel.png" alt="dadabhai-travel" className="h-auto max-w-full" />
        </div>
        <div className="flex items-center justify-center  w-full h-[195px] shadow-md rounded-lg">
          <img src="khaugalli.png" alt="khaugalli" className="h-auto max-w-full" />
        </div>
        <div className="flex items-center justify-center bg-white w-full h-[195px] shadow-md rounded-lg">
          <img src="nukkad.png" alt="nukkad" className="h-auto max-w-full" />
        </div>
        <div className="flex items-center justify-center  w-full h-[195px] shadow-md rounded-lg">
          <img src="universal.png" alt="universal-university" className="h-auto max-w-full" />
        </div>
        <div className="flex items-center justify-center  w-full h-[195px] shadow-md rounded-lg">
          <img src="badr.png" alt="badr" className="h-auto max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
