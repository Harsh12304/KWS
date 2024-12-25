import React from 'react';

const Team = () => {
  return (
    <div className="w-full py-12 bg-white flex flex-col items-center sm:items-start sm:flex-row">
      {/* Text Section */}
      <div className="sm:w-1/3 px-6 sm:pl-12">
        <p className="text-[#478168] font-semibold text-sm mb-2">
          Leadership.Vision.Unity.
        </p>
        <h2 className="text-black font-bold text-4xl sm:text-5xl mb-4 ">
          Meet our<br />Team <br /> Members
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center sm:justify-start gap-6 flex-wrap sm:flex-nowrap px-6 sm:pr-12">
        <div className="w-60 h-60">
          <img
            className="w-full h-full object-cover "
            src="/Frame1.png"
            alt="Team Member 1"
          />
        </div>
        <div className="w-60 h-60">
          <img
            className="w-full h-full object-cover "
            src="/Frame2.png"
            alt="Team Member 2"
          />
        </div>
        <div className="w-60 h-60">
          <img
            className="w-full h-full object-cover "
            src="/Frame3.png"
            alt="Team Member 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
