import React from 'react';

const AGM2023 = () => {
  // Data for the Executive Committee Table
  const executiveCommittee = [
    { id: 1, name: "Mr. Aslam Ismail Thakur", designation: "President" },
    { id: 2, name: "Mufti Hamza Kasim Mujawar", designation: "Vice President" },
    { id: 3, name: "Mr. Labib Abbas Fakih", designation: "Vice President" },
    { id: 4, name: "Mr. Parvez Hussain Wadekar", designation: "General Secretary" },
    { id: 5, name: "Mr. Faisal Mohamed Kasim", designation: "Joint General Secretary" },
    { id: 6, name: "Mr. Amanullah Abbas Yelukar", designation: "Joint General Secretary" },
    { id: 7, name: "Mr. Mohammed Shafi Alware", designation: "Treasurer" },
    { id: 8, name: "Mr. Atif Azim Khanzada", designation: "Joint Treasurer" },
    { id: 9, name: "Mr. Talib Ali Rumaney", designation: "Joint Treasurer" },
    { id: 10, name: "Dr. Rahmatullah Galsoorker", designation: "Executive Committee Member" },
    { id: 11, name: "Maulana Javid Mohamed Eshak Karjikar", designation: "Executive Committee Member" },
    { id: 12, name: "Mr. Yaqub Abdul Latif Solkar", designation: "Executive Committee Member" },
    { id: 13, name: "Mr. Hasrat Murad Walile", designation: "Executive Committee Member" },
    { id: 14, name: "Mr. Anwar Ayyub Mhalunkar", designation: "Executive Committee Member" },
    { id: 15, name: "Mr. Kifayat Ali Giyasuddin Tisekar", designation: "Executive Committee Member" },
    { id: 16, name: "Mr. Mohammed Salim Kazi", designation: "Executive Committee Member" },
    { id: 17, name: "Mr. Ridwan Abdul Rahman Mullaji", designation: "Executive Committee Member" },
    { id: 18, name: "Mr. Nasar Jainuddin Parkar", designation: "Executive Committee Member" },
    { id: 19, name: "Mr. Mohamed Saeed Ali Mullaji", designation: "Executive Committee Member" },
    { id: 20, name: "Mr. Abrar Amanullah Shirshikar", designation: "Executive Committee Member" },
    { id: 21, name: "Mr. Mansur Ibrahim Dalwai", designation: "Executive Committee Member" },
    { id: 22, name: "Hafiz Samiulla Abdulla Firfire", designation: "Executive Committee Member" },
    { id: 23, name: "Mrs. Rukhsana Labib Fakih", designation: "Executive Committee Member (Ladies Cell)" },
    { id: 24, name: "Mrs. Humera Parvez Wadekar", designation: "Executive Committee Member (Ladies Cell)" },
    { id: 25, name: "Mr. Salim Umar Desai", designation: "Ex Officio President" },
    { id: 26, name: "Mr. Mohammed Saleh Burud", designation: "Patron" },
    { id: 27, name: "Dr. AbdulRazzak Rumane", designation: "Advisor" },
    { id: 28, name: "Maulana Nisar Daroge", designation: "Advisor" },
  ];

  // Data for the Felicitated Members Table
  const felicitatedMembers = [
    "Maulana Javed M. E. Karjikar",
    "Dr. Rahmatullah Galsoorker",
    "Mr. Hasrat Walile",
    "Mr. AbdulWahab Bijle",
    "Mr. Mohammed Salim Kazi",
    "Mr. Farooq Kasim Jogilkar",
    "Mr. Mujahid Mulla",
    "Mr. Farooque Bray",
    "Mr. Yaqub Solkar",
    "Mr. Nasar Parkar",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* AGM Heading */}
      <h1 className="text-4xl font-bold text-center mb-6">AGM-2023</h1>

      {/* Content */}
      <section className="text-lg mb-6 space-y-4">
        <p>Kokan Welfare Society, Kuwait, conducted its 10th Annual General body Meeting for the year 2023 on Friday, 13 January 2023 at Artistic Yoga & Pilates premises in Block 10, Salmiya, Kuwait.</p>
        <p>The meeting was attended by its elite members in person as well as virtually via zoom in large numbers. The AGM started with a beautiful recitation of the holy Quran by Maulana Javid Karjikar.</p>
        <p>KWS President, Mr. Aslam Thakur welcomed all members to the AGM, giving an overview of KWS activities and briefed about the work done by KWS in the past year. He explained how KWS has grown in the past 11 years and thanked its founders Mr. Mohamed Saleh Burud, Mr. AbdulRazak Rumane and Maulana Nisar Daroge for their support and guidance. He also thanked the teams at KWS who work hard for each and every task assigned.</p>
        <p>KWS Patron, Mr. Mohamed Saleh Burud addressed the crowd and expressed his happiness of being associated with KWS. He explained how the previous organizations had failed and thanked KWS for accepting his advice of striking a balance in their approach, thus uniting community members and going strong year upon year for the past 11 years.</p>
        <p>KWS Ex-Officio President Mr. Salim Desai, also expressed his pleasure of being associated with KWS. He explained how KWS from time to time has been innovating new ideas to ensure that every community member benefits from its efforts.</p>
        <p>Mr. Parvez Wadekar, General Secretary for KWS presented his reports for the year 2022 and gave an overview of how KWS operates for every event. He explained how KWS works with various teams connected together by the Office Bearers, Executive Committee Members, Coordination Committee Members, Voluntary Committee Members and the Women Cell. He explained the purpose of the 5 zones Kuwait is divided into and how working in a decentralized manner helps in reaching all of Kuwait.</p>
        <p>KWS Treasurer, Mr. Labib Fakih presented the financial report for the year 2022 audited by Mr. Tanveer Khot. He explained the process of Membership Benefit Scheme (MBS) and how multiple zonal teams are involved in supporting KWS for its day-to-day activities. He briefed of how the Jamaat back in India are connected with KWS to help the poor and requested all members from different Jamaats present in Kuwait to come join KWS and strengthen KWS.</p>
        <p>Changes to the byelaws were presented by Mr. Parvez, informing the attendees that in the past years AGM and Election were held every year which gave very less time for the team to work, hence the Executive Committee members have approved that henceforth AGM will be held every year, but elections will be held once in two years.</p>
        <p>The General Secretary’s report, Audited Financials and changes to Byelaws were approved by all present.</p>
        <p>The election commissioner appointed for this AGM, Mr. Muzaffar Parkar (General Manager of Dadabhai Travel) announced names of the applicants who were elected as part of the new Office Bearers and Executive Committee. He was happy to see new changes in the Office Bearers and urged other community members to come forward and be part of KWS management.</p>
      </section>

      {/* Executive Committee Table */}
      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-center mb-4">KWS Executive Committee (2023 - 2024)</h2>
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
        <h2 className="text-3xl font-semibold text-center mb-4">Felicitated Members</h2>
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

      {/* Concluding Section */}
      <section className="text-lg mb-6">
        <p>Vice President, Mr. Mohammed Shafi Alware thanked all attendees for attending the AGM and being part of KWS. He thanked all working committees EC, CC, VC and Women Cell, without whom KWS would not be what they are today. He went on to specially thank Mr. Muzaffar Parkar for being the Election Commissioner, Mr. Tanveer Khot for Auditing the Financials, Mr. Liyakat Halde (Owner of Khau Galli Restaurant) for the dinner and Mr. Khalil Rumane (Owner of Marwah) for always supporting with food and for the office provided to KWS.</p>
        <p className="mt-4">The AGM was very professionally coordinated by Mr. Yaqub Solkar and concluded with a mesmerizing lecture and Dua by Vice President, Mufti Hamza.</p>
        <p className="mt-4">Delicious Dinner was served from Khau Galli Restaurant and Marwah Restaurant which was enjoyed by all present.</p>
      </section>

      {/* Photo Gallery */}
      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-center mb-4">AGM Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 40 }, (_, i) => (
            <div key={i} className="w-full cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <img src={`/${i + 1}.jpg`} alt={`AGM Image ${i + 1}`} className="w-full h-auto rounded-lg shadow" onClick={() => window.open(`/${i + 1}.jpg`, '_blank')} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AGM2023;
