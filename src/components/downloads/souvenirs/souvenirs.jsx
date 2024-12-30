'use client';

import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Souvenirs = () => {
  const [activeTab, setActiveTab] = useState('2019'); // Manage active tab state

  const pdfs = [
    { id: '2018', url: '/pdfs/1.pdf', title: 'Souvenir 2018' },
    { id: '2019', url: '/pdfs/2.pdf', title: 'Souvenir 2019' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-100 flex flex-col items-center p-4 sm:p-6 animate-fadeIn">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-700 text-center">
        Our Souvenirs
      </h1>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 border-b border-gray-300 mb-6">
        {pdfs.map((pdf) => (
          <button
            key={pdf.id}
            onClick={() => setActiveTab(pdf.id)}
            className={`py-2 px-3 sm:px-4 text-base sm:text-lg font-semibold focus:outline-none transition-transform transform hover:scale-105 ${
              activeTab === pdf.id ? 'border-b-4 border-blue-500 text-blue-500' : 'text-gray-500'
            }`}
          >
            {pdf.title.split(' ')[1]} {/* Display only year */}
          </button>
        ))}
      </div>

      {/* PDF Viewer */}
      <div className="w-full max-w-4xl bg-white p-4 sm:p-6 rounded-lg shadow-2xl transition-all duration-500 transform hover:scale-105">
        <div className="w-full overflow-auto min-w-0">
          <iframe
            src={pdfs.find((pdf) => pdf.id === activeTab)?.url}
            className="w-full h-[400px] sm:h-[500px] border-0 rounded-lg"
            title={`Souvenir ${activeTab}`}
          ></iframe>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          <a
            href={pdfs.find((pdf) => pdf.id === activeTab)?.url}
            target="_self"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none shadow-lg transition-transform transform hover:scale-110 text-center"
          >
            View
          </a>
          <a
            href={pdfs.find((pdf) => pdf.id === activeTab)?.url}
            download
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none shadow-lg transition-transform transform hover:scale-110 text-center"
          >
            Download
          </a>
          <button
            onClick={() =>
              navigator.share &&
              navigator.share({
                title: `Souvenir ${activeTab}`,
                url: pdfs.find((pdf) => pdf.id === activeTab)?.url,
              })
            }
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none shadow-lg transition-transform transform hover:scale-110 text-center"
          >
            Share
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Souvenirs;
