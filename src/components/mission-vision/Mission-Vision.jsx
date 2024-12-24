import React from 'react';

const MissionAndVision = () => {
  return (
<div className="w-full py-12 bg-[#DCEBE2] flex flex-col items-center border border-black">
      <h2 className="text-black font-bold text-4xl sm:text-5xl mb-8">
        Our Mission and Vision
      </h2>

      <div className="flex justify-center sm:justify-start gap-6 flex-wrap px-6 sm:pr-12">
        {/* Mission 1 */}
        <div className="w-60 h-60">
          <img
            className="w-full h-full object-cover"
            src="/mission1.png" // Replace with the actual icon image path
            alt="Mission 1 Icon"
          />
          
        </div>

        {/* Mission 2 */}
        <div className="w-60 h-60">
          <img
            className="w-full h-full object-cover"
            src="/mission2.png" // Replace with the actual icon image path
            alt="Mission 2 Icon"
          />
                  </div>

        {/* Mission 3 */}
        <div className="w-60 h-60">
          <img
            className="w-full h-full object-cover"
            src="/mission3.png" // Replace with the actual icon image path
            alt="Mission 3 Icon"
          />
                  </div>

        {/* Mission 4 */}
        <div className="w-60 h-60">
          <img
            className="w-full h-full object-cover"
            src="/mission3.png" // Replace with the actual icon image path
            alt="Mission 4 Icon"
          />
                  </div>
      </div>
    </div>
  );
};

export default MissionAndVision;