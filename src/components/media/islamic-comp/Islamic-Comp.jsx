import React, { useState } from 'react';

const IslamicCompetitionPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev + 1) % 12);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev - 1 + 12) % 12);
  };

  return (
    <div className="bg-[#ffffff] min-h-screen px-4 py-8">
      {/* Spacer for Navbar */}
      <div className="h-16"></div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#5444CB] mb-8">KWS Islamic Competition</h1>

      {/* Content Section */}
      <p className="text-base sm:text-lg lg:text-xl text-center mb-8 px-4">
        Highlights from the KWS Islamic Competition, showcasing the achievements and participation of our vibrant community.
      </p>

      {/* Highlights Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center px-4">
        {Array.from({ length: 24 }, (_, i) => (
          <div
            key={i}
            className="relative w-full max-w-[200px] h-auto cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => handleImageClick(i % 4)}
          >
            <img
              src={`/i${(i % 4) + 1}.jpg`}
              alt={`Competition Image ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <button
            className="absolute left-5 text-white text-3xl"
            onClick={handlePrevImage}
          >
            &#8249;
          </button>
          <div className="relative">
            <img
              src={`/i${selectedImage + 1}.jpg`}
              alt={`Competition Image ${selectedImage + 1}`}
              className="w-auto max-w-3xl h-auto max-h-[80vh] rounded-lg"
            />
          </div>
          <button
            className="absolute right-5 text-white text-3xl"
            onClick={handleNextImage}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default IslamicCompetitionPage;
