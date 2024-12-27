import React, { useState } from 'react';

const FelicitationPage = () => {
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
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#5444CB] mb-8">Felicitation of Dr. Sufiyan Qazi</h1>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-10 px-4">
        {/* Image Section */}
        <img
          src="/dr.jpg"
          alt="Dr. Sufiyan Qazi"
          className="w-full max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
        />

        {/* Logo and Text */}
        <div className="text-center lg:text-left">
          <img
            src="/kws-logo.png"
            alt="KWS Logo"
            className="w-48 h-48 lg:w-64 lg:h-64 mx-auto lg:mx-0"
          />
          <p className="font-bold text-lg sm:text-xl lg:text-2xl mt-4">
            Kokan Welfare Society, Kuwait, on March 31, 2023, felicitated Dr. Sufiyan AbdulAziz Qazi from Mhasla,
            Raigad, at Aysha Masjid in Block 10, Salmiya, Kuwait.
          </p>
        </div>
      </div>

      {/* Main Content Box */}
      <div className="bg-white w-full max-w-5xl mx-auto rounded-lg shadow-lg p-6 sm:p-8 text-base sm:text-lg lg:text-xl space-y-4">
        <p>The program was attended by the founders of KWS, Mr. Mohammed Saleh Burud, Dr. AbdulRazak Rumane and Maulana Nisar Daroge, KWS working committee members, many Maulanas and other Kokani community members, specially from his hometown of Mhasla.</p>
        <p>Vice President of KWS Mufti Hamza started the program by welcoming everyone and thanked all present for attending the program on KWS invitation. He introduced Dr. Sufiyan as a prominent young scholar who at present is residing in the village of Mhasla in Raigad District of Maharashtra. He completed his PhD in Islamic from Madina University and returned back to his village in India after 17 years in KSA to serve our community. He is the head of two Madrassas, Jamia Muhammadiyah and Madrasah Fatima (for girls) and he is also the leader of the Department of Dawah and Tabligh established in Mhasla.</p>
        <p>President of KWS, Mr. Aslam Thakur thanked Dr. Sufiyan for accepting our invitation and informed that KWS is looking forward to his guidance to enable more Students to attain PhD like him, thus creating more learned people from the community. He went on to saying that KWS is already supporting students with Education Aid and is ready to support students recommend by him or his organization.</p>
        <p>Dr. Sufyan thanked KWS for inviting him and gave a beautiful speech on the history of Kokan, how our people have already contributed from Kokan for the betterment of our community. There are many learned and educated people from Kokan now, however, the need of the hour is to get united, irrespective of the village or teachings, we all should unite and work for the betterment of the community. Attendees were mesmerized by the knowledge imparted during his speech and wished he can speak longer or visit Kuwait again.</p>
        <p>A memento was presented to Dr. Sufyan by KWS Advisor Maulana Nisar Daroge for his achievements and hard work towards the community.</p>
        <p>KWS Vice President Mr. Labib Fakih also informed everyone present that KWS already started the process of inviting Jamaats to come forward and work together for the betterment of the community. He informed that last month 40 Jamaat representatives were invited to a meeting where KWS commitment towards uniting all Jamaats was portrayed. Similarly, KWS is in talks with Societies from KSA and Qatar to look into possibility of international Kokani societies working together.</p>
        <p>Maulana Nisar thanked Dr. Sufiyan and everyone present for attending the meeting and concluded with a short dua.</p>
      </div>

      {/* Highlights Section */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mt-10 mb-6">Highlights from the felicitation ceremony of Dr. Sufiyan Qazi</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center px-4">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="relative w-full max-w-xs cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => handleImageClick(i)}
          >
            <img
              src={`/s${i + 1}.jpg`}
              alt={`Highlight ${i + 1}`}
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
              src={`/s${selectedImage + 1}.jpg`}
              alt={`Highlight ${selectedImage + 1}`}
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

export default FelicitationPage;
