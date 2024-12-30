import React from 'react';

const AGM2023 = () => {
  const executiveCommittee = [
    { id: 1, name: 'Mr. Aslam Ismail Thakur', designation: 'President' },
    { id: 2, name: 'Mufti Hamza Kasim Mujawar', designation: 'Vice President' },
    { id: 3, name: 'Mr. Labib Abbas Fakih', designation: 'Vice President' },
    { id: 4, name: 'Mr. Parvez Hussain Wadekar', designation: 'General Secretary' },
    { id: 5, name: 'Mr. Faisal Mohamed Kasim', designation: 'Joint General Secretary' },
    { id: 6, name: 'Mr. Amanullah Abbas Yelukar', designation: 'Joint General Secretary' },
    { id: 7, name: 'Mr. Mohammed Shafi Alware', designation: 'Treasurer' },
    { id: 8, name: 'Mr. Atif Azim Khanzada', designation: 'Joint Treasurer' },
    { id: 9, name: 'Mr. Talib Ali Rumaney', designation: 'Joint Treasurer' },
    { id: 10, name: 'Dr. Rahmatullah Galsoorker', designation: 'Executive Committee Member' },
    { id: 11, name: 'Maulana Javid Mohamed Eshak Karjikar', designation: 'Executive Committee Member' },
    { id: 12, name: 'Mr. Yaqub Abdul Latif Solkar', designation: 'Executive Committee Member' },
    { id: 13, name: 'Mr. Hasrat Murad Walile', designation: 'Executive Committee Member' },
    { id: 14, name: 'Mr. Anwar Ayyub Mhalunkar', designation: 'Executive Committee Member' },
    { id: 15, name: 'Mr. Kifayat Ali Giyasuddin Tisekar', designation: 'Executive Committee Member' },
    { id: 16, name: 'Mr. Mohammed Salim Kazi', designation: 'Executive Committee Member' },
    { id: 17, name: 'Mr. Ridwan Abdul Rahman Mullaji', designation: 'Executive Committee Member' },
    { id: 18, name: 'Mr. Nasar Jainuddin Parkar', designation: 'Executive Committee Member' },
    { id: 19, name: 'Mr. Mohamed Saeed Ali Mullaji', designation: 'Executive Committee Member' },
    { id: 20, name: 'Mr. Abrar Amanullah Shirshikar', designation: 'Executive Committee Member' },
    { id: 21, name: 'Mr. Mansur Ibrahim Dalwai', designation: 'Executive Committee Member' },
    { id: 22, name: 'Hafiz Samiulla Abdulla Firfire', designation: 'Executive Committee Member' },
    { id: 23, name: 'Mrs. Rukhsana Labib Fakih', designation: 'Executive Committee Member (Ladies Cell)' },
    { id: 24, name: 'Mrs. Humera Parvez Wadekar', designation: 'Executive Committee Member (Ladies Cell)' },
    { id: 25, name: 'Mr. Salim Umar Desai', designation: 'Ex Officio President' },
    { id: 26, name: 'Mr. Mohammed Saleh Burud', designation: 'Patron' },
    { id: 27, name: 'Dr. AbdulRazzak Rumane', designation: 'Advisor' },
    { id: 28, name: 'Maulana Nisar Daroge', designation: 'Advisor' },
  ];

  const felicitatedMembers = [
    'Maulana Javed M. E. Karjikar',
    'Dr. Rahmatullah Galsoorker',
    'Mr. Hasrat Walile',
    'Mr. AbdulWahab Bijle',
    'Mr. Mohammed Salim Kazi',
    'Mr. Farooq Kasim Jogilkar',
    'Mr. Mujahid Mulla',
    'Mr. Farooque Bray',
    'Mr. Yaqub Solkar',
    'Mr. Nasar Parkar',
  ];

  return (
    <div className="w-full px-4 py-16 bg-gray-100 mt-10 ">
      {/* AGM Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#5444CB]">AGM-2023</h1>

      {/* Content */}
      <section className="text-base sm:text-lg mb-6 space-y-4">
        <p>Kokan Welfare Society, Kuwait, conducted its 10th Annual General Body Meeting for the year 2023 on Friday, 13 January 2023 at Artistic Yoga & Pilates premises in Block 10, Salmiya, Kuwait.</p>
        <p>The meeting was attended by its elite members in person as well as virtually via Zoom in large numbers. The AGM started with a beautiful recitation of the Holy Quran by Maulana Javid Karjikar.</p>
        <p>KWS President, Mr. Aslam Thakur welcomed all members to the AGM, giving an overview of KWS activities and the work done in the past year. He explained how KWS has grown in the past 11 years and thanked its founders Mr. Mohamed Saleh Burud, Mr. AbdulRazzak Rumane, and Maulana Nisar Daroge for their support and guidance.</p>
        {/* ... More content as needed */}
      </section>

      {/* Executive Committee Table */}
      <section className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-[#5444CB]">KWS Executive Committee (2023 - 2024)</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Designation</th>
              </tr>
            </thead>
            <tbody>
              {executiveCommittee.map((member) => (
                <tr key={member.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border text-center">{member.id}</td>
                  <td className="px-4 py-2 border">{member.name}</td>
                  <td className="px-4 py-2 border">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Felicitated Members Table */}
      <section className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-[#5444CB]">Felicitated Members</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Name</th>
              </tr>
            </thead>
            <tbody>
              {felicitatedMembers.map((name, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border">{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-[#5444CB]">AGM Photo Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 40 }, (_, i) => (
            <div
              key={i}
              className="w-full cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={`/${i + 1}.jpg`}
                alt={`AGM Image ${i + 1}`}
                className="w-full h-auto rounded-lg shadow"
                onClick={() => window.open(`/${i + 1}.jpg`, '_blank')}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AGM2023;
