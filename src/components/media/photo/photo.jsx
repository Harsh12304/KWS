'use client';
import React from 'react';
import Link from 'next/link';

const PhotoGallery = () => {
  const photos = [
    {
      title: 'AGM 2023',
      link: '/media/agm2023',
      thumbnail: '/agm-2023.png',
    },
    {
      title: 'Felicitation of Dr. Sufiyan Qazi',
      link: '/media/felicitation-dr-sufiyan-qazi',
      thumbnail: '/felicitation.png',
    },
    {
      title: 'KWS Islamic Competition 2022',
      link: '/media/islamic-comp',
      thumbnail: '/islamic-competition.png',
    },
    {
      title: 'KWS Picnic 2022',
      link: '/media/picnic',
      thumbnail: '/picnic2022.png',
    },
  ];

  return (
    <div className="w-full pt-28 py-10 px-5 bg-gray-100">
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#5444CB]">
        PHOTO GALLERY
      </h1>

      {/* Photo Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {photos.map((photo, index) => (
          <Link key={index} href={photo.link} className="block">
            <div className="flex flex-col items-center group">
              <img
                src={photo.thumbnail}
                alt={photo.title}
                className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <p className="mt-4 text-base sm:text-lg font-medium text-center text-gray-800 group-hover:text-[#5444CB] transition-colors duration-300">
                {photo.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
