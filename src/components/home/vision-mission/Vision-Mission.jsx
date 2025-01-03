import React from 'react';

const MissionAndVision = () => {
  return (
    <div className="w-full py-12 bg-[#ebd077] flex flex-col items-center border shadow-lg ">
      <h2 className="text-[#193540] font-bold text-4xl sm:text-5xl mb-8 text-center uppercase ">
        Our Mission and Vision
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-6">
        {/* Mission 1 */}
        <div className="group w-[250px] h-[250px] bg-white p-4 flex flex-col items-center sm:w-[300px] transition-all transform hover:bg-[#193540] hover:scale-105">
          <div className="w-[60px] h-[60px] flex items-center justify-center mb-4">
            <img
              className="w-[60px] h-[60px] object-contain"
              src="/6.png"
              alt="Mission 1 Icon"
            />
          </div>
          <h3 className="text-black font-normal text-center text-lg sm:text-xl mt-4 transition-colors group-hover:text-white">
            Helping to build schools, colleges, and community centers.
          </h3>
        </div>

        {/* Mission 2 */}
        <div className="group w-[250px] h-[250px] bg-white p-4 flex flex-col items-center sm:w-[300px] transition-all transform hover:bg-[#193540] hover:scale-105">
          <div className="w-[60px] h-[60px] flex items-center justify-center mb-4">
            <img
              className="w-[60px] h-[60px] object-contain"
              src="/3.png"
              alt="Mission 2 Icon"
            />
          </div>
          <h3 className="text-black font-normal text-center text-lg sm:text-xl mt-4 transition-colors group-hover:text-white">
            Helping weaker students complete their basic education.
          </h3>
        </div>

        {/* Mission 3 */}
        <div className="group w-[250px] h-[250px] bg-white p-4 flex flex-col items-center sm:w-[300px] transition-all transform hover:bg-[#193540] hover:scale-105">
          <div className="w-[60px] h-[60px] flex items-center justify-center mb-4">
            <img
              className="w-[60px] h-[60px] object-contain"
              src="/2.png"
              alt="Mission 3 Icon"
            />
          </div>
          <h3 className="text-black font-normal text-center text-lg sm:text-xl mt-4 transition-colors group-hover:text-white">
            Providing guidance about educational facilities and admissions.
          </h3>
        </div>

        {/* Mission 4 */}
        <div className="group w-[250px] h-[250px] bg-white p-4 flex flex-col items-center sm:w-[300px] transition-all transform hover:bg-[#193540] hover:scale-105">
          <div className="w-[60px] h-[60px] flex items-center justify-center mb-4">
            <img
              className="w-[60px] h-[60px] object-contain"
              src="/5.png"
              alt="Mission 4 Icon"
            />
          </div>
          <h3 className="text-black font-normal text-center text-lg sm:text-xl mt-4 transition-colors group-hover:text-white">
            Guiding people about employment opportunities.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
