'use client';
import React from 'react';

const VideoGallery = () => {
  const videos = [
    {
      title: 'KWS Picnic 2022',
      link: 'https://youtu.be/EFVPQN1gSBk',
      thumbnail: 'https://img.youtube.com/vi/EFVPQN1gSBk/hqdefault.jpg',
    },
    {
      title: 'KTCL Final 15/10/21',
      link: 'https://youtu.be/LjC1DhvHYDc',
      thumbnail: 'https://img.youtube.com/vi/LjC1DhvHYDc/hqdefault.jpg',
    },
    {
      title: 'KWS Family Picnic 2019',
      link: 'https://youtu.be/TOteVMhi3xo',
      thumbnail: 'https://img.youtube.com/vi/TOteVMhi3xo/hqdefault.jpg',
    },
    {
      title: 'KWS Family Musical Chair',
      link: 'https://youtu.be/y04--Jq0czY',
      thumbnail: 'https://img.youtube.com/vi/y04--Jq0czY/hqdefault.jpg',
    },
    {
      title: 'KWS Family Cricket',
      link: 'https://youtu.be/floX1-yGEHU',
      thumbnail: 'https://img.youtube.com/vi/floX1-yGEHU/hqdefault.jpg',
    },
  ];

  return (
    <div className="w-full pt-28 py-10 px-5 bg-[#DDFFBC]">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center animate__animated animate__fadeIn" style={{ color: '#5444CB' }}>
        VIDEO GALLERY
      </h1>

      {/* Video Grid Section */}
      <div className="mt-8 space-y-8">
        {/* First Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {videos.slice(0, 3).map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-white border border-gray-300 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-80 md:w-96 lg:w-1/3 xl:w-1/5 animate__animated animate__fadeIn animate__delay-1s"
            >
              <div className="w-full h-48 bg-white flex items-center justify-center rounded overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-medium text-gray-700 mt-4 text-center">
                {video.title}
              </p>
            </a>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {videos.slice(3).map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-white border border-gray-300 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-80 md:w-96 lg:w-1/3 xl:w-1/5 animate__animated animate__fadeIn animate__delay-1s"
            >
              <div className="w-full h-48 bg-white flex items-center justify-center rounded overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-medium text-gray-700 mt-4 text-center">
                {video.title}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <a
          href="https://www.youtube.com/@kokanwelfaresocietykuwait3579"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-110"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default VideoGallery;
