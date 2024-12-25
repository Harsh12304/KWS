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
      link: '/felicitation-dr-sufiyan-qazi',
      thumbnail: '/felicitation.png',
    },
    {
      title: 'KWS Islamic Competition 2022',
      link: '/islamic-competition-2022',
      thumbnail: '/islamic-competition.png',
    },
    {
      title: 'KWS Picnic 2022',
      link: '/kws-picnic-2022',
      thumbnail: '/picnic2022.png',
    },
  ];

  return (
    <div className="w-full pt-28 py-10 px-5 bg-[#DDFFBC]">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center" style={{ color: '#5444CB' }}>
        PHOTO GALLERY
      </h1>

      {/* Photo Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {photos.map((photo, index) => (
          <Link key={index} href={photo.link} className="block">
            <div className="flex flex-col items-center">
              <img
                src={photo.thumbnail}
                alt={photo.title}
                className="w-64 h-64 object-cover rounded-lg shadow-lg"
              />
              <p className="mt-4 text-lg font-medium text-center text-gray-800">{photo.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
