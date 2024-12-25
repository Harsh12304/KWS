import React from 'react';

const Story = () => {
  return (
    <div className="relative w-full h-auto sm:h-screen bg-[#B8E1C2] flex flex-col sm:flex-row p-4">
      {/* Image Section */}
      <div className="flex flex-1 items-center justify-center sm:justify-start">
        <img
          className="mt-10 sm:mt-28 sm:ml-10 w-auto max-w-[90%] sm:max-w-none"
          src="/story.png"
          alt="About Our Story"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center sm:items-end flex-1 mt-6 sm:mt-0 px-4">
        {/* Green Box */}
        <div className="w-full max-w-[90%] sm:max-w-[644px] h-auto bg-[#67B291] flex items-center justify-center px-4 md:px-8 py-6">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center relative">
            <span className="text-[#000]">About</span> Our Story
            <hr className="mt-2 w-24 sm:w-40 md:w-48 border-t-4 border-white absolute left-1/2 transform -translate-x-1/2 -rotate-3" />
          </h2>
        </div>

        {/* Paragraph */}
        <p className="mt-4 w-full max-w-[90%] sm:max-w-[670px] text-justify text-sm sm:text-base md:text-lg px-4 sm:px-6">
          Kokan Welfare Society, Kuwait (KWS) is founded in 2012 by like-minded people from the Kokan region (coastal Maharashtra) residing in Kuwait. The motivation behind the formation of this association is to bring the community onto a common platform and work together for the development and welfare of all people, especially for those from the Kokan region and generally from India.
        </p>

        {/* Button */}
        <div className="flex justify-center sm:justify-start mt-6">
          <button className="h-12 w-36 bg-[#DCEBE2] text-[#478168] py-2 border-2 border-transparent hover:bg-[#67B291] hover:text-white hover:border-[#478168] transition-all duration-300">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Story;
