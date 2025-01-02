import React, { useState } from "react";

const ExecutiveCommittee = () => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const teamData = {
    "2018": { sections: [] },
    "2019": { sections: [] },
    "2020": { sections: [] },
    "2021": { sections: [] },
    "2022": {
      sections: [
        {
          title: "Introducing Our Esteemed Team",
          members: [
            { name: "Mr. Mohammed Shafi Alware", title: "Vice President", image: "/002.png" },
            { name: "Mr. Aslam Thakur", title: "President", image: "/001.png" },
            { name: "Mr. Muft Hamza Mujawar", title: "Vice President", image: "/003.png" },
            { name: "Mr. Faisal Mohammed Kasim Jogilkar", title: "Joint General Secretary", image: "/008.png" },
            { name: "Mr. Parvez Hussain Wadekar", title: "General Secretary", image: "/004.png" },
            { name: "Dr. Rahmatullah Galsoorker", title: "Joint General Secretary", image: "/006.png" },
            { name: "Mr. Amanullah Abbas Yelukar", title: "Joint General Secretary", image: "/009.png" },
            { name: "Mr. Labib Abbas Fakih", title: "Treasurer", image: "/005.png" },
            { name: "Mr. Anwar Ayyub Mhalukar", title: "Joint General Secretary", image: "/028.png" },
          ],
        },
        {
          title: "Executive Members",
          members: [
            { name: "Mr. Maulana Javed Karjikar", title: "Executive Member", image: "/012.png" },
            { name: "Mr. Yaqub Abdul Latif Solkar", title: "Executive Member", image: "/010.png" },
            { name: "Mr. Hasrat Murad Walile", title: "Executive Member", image: "/013.png" },
            { name: "Mr. Kifayat Ali Giyasuddin Tisekar", title: "Executive Member", image: "/016.png" },
            { name: "Mr. Mohammed Salim Kazi", title: "Executive Member", image: "/017.png" },
            { name: "Mr. Ridwan Abdul Rahman Mullaji", title: "Executive Member", image: "/018.png" },
            { name: "Mr. Nasar Jainuddin Parkar", title: "Executive Member", image: "/019.png" },
            { name: "Mr. Mohamed Saeed Ali Mullaji", title: "Executive Member", image: "/020.png" },
            { name: "Mr. Abrar Amanullah Shirshikar", title: "Executive Member", image: "/021.png" },
            { name: "Mr. Atif Azim Khanzada", title: "Executive Member", image: "/014.png" },
            { name: "Mr. Mansur Ibrahim Dalwai", title: "Executive Member", image: "/022.png" },
            { name: "Mr. Hafiz Samiulla Abdulla Firfire", title: "Executive Member", image: "/023.png" },
            { name: "Mr. Talib Ali Rumaney", title: "Joint Treasurer", image: "/015.png" },
          ],
        },
        {
          title: "Executive Members - Ladies Cell",
          members: [
            { name: "Ms. Ruksana Labib Fakih", title: "Executive Member", image: "/29.png" },
            { name: "Mrs. Humera Parvez Wadekar", title: "Executive Member", image: "/29.png" },
          ],
        },
        {
          title: "Advisory Board",
          members: [
            { name: "Mr. Salim Umar Desai", title: "Ex-Officio President", image: "/024.png" },
            { name: "Mr. Mohammed Saleh Burud", title: "Patron", image: "/025.png" },
            { name: "Maulana Nisar Daroge", title: "Advisor", image: "/026.png" },
            { name: "Dr. Abdul Razzak Rumane", title: "Advisor", image: "/027.png" },
          ],
        },
      ],
    },
    "2023": {
      sections: [
        {
          title: "Introducing Our Esteemed Team",
          members: [
            { name: "Mr. Muft Hamza Mujawar", title: "Vice President", image: "/003.png" },
            { name: "Mr. Aslam Thakur", title: "President", image: "/001.png" },
            { name: "Mr. Labib Abbas Fakih", title: "Vice President", image: "/005.png" },
            { name: "Mr. Faisal Mohammed Kasim Jogilkar", title: "Joint General Secretary", image: "/008.png" },
            { name: "Mr. Parvez Hussain Wadekar", title: "General Secretary", image: "/004.png" },
            { name: "Mr. Amanullah Abbas Yelukar", title: "Joint General Secretary", image: "/009.png" },
            { name: "Mr. Atif Azim Khanzada", title: "Joint Treasurer", image: "/014.png" },
            { name: "Mr. Mohammed Shafi Alware", title: "Treasurer", image: "/002.png" },
            { name: "Mr. Talib Ali Rumaney", title: "Joint Treasurer", image: "/015.png" },
          ],
        },
        {
          title: "Executive Members",
          members: [
            { name: "Dr. Rahmatullah Galsoorker", title: "Executive Member", image: "/006.png" },
            { name: "Mr. Maulana Javed Karjikar", title: "Executive Member", image: "/012.png" },
            { name: "Mr. Yaqub Abdul Latif Solkar", title: "Executive Member", image: "/010.png" },
            { name: "Mr. Hasrat Murad Walile", title: "Executive Member", image: "/013.png" },
            { name: "Mr. Anwar Ayyub Mhalukar", title: "Executive Member", image: "/028.png" },
            { name: "Mr. Kifayat Ali Giyasuddin Tisekar", title: "Executive Member", image: "/016.png" },
            { name: "Mr. Mohammed Salim Kazi", title: "Executive Member", image: "/017.png" },
            { name: "Mr. Ridwan Abdul Rahman Mullaji", title: "Executive Member", image: "/018.png" },
            { name: "Mr. Nasar Jainuddin Parkar", title: "Executive Member", image: "/019.png" },
            { name: "Mr. Mohamed Saeed Ali Mullaji", title: "Executive Member", image: "/020.png" },
            { name: "Mr. Abrar Amanullah Shirshikar", title: "Executive Member", image: "/021.png" },
            { name: "Mr. Mansur Ibrahim Dalwai", title: "Executive Member", image: "/022.png" },
            // { name: "Mr. Hafiz Samiulla Abdulla Firfire", title: "Executive Member", image: "/023.png" },
          ],
        },
        {
          title: "Executive Members - Ladies Cell",
          members: [
            { name: "Ms. Ruksana Labib Fakih", title: "Executive Member", image: "/29.png" },
            { name: "Mrs. Humera Parvez Wadekar", title: "Executive Member", image: "/29.png" },
          ],
        },
        {
          title: "Advisory Board",
          members: [
            { name: "Mr. Salim Umar Desai", title: "Ex-Officio President", image: "/024.png" },
            { name: "Mr. Mohammed Saleh Burud", title: "Patron", image: "/025.png" },
            { name: "Maulana Nisar Daroge", title: "Advisor", image: "/026.png" },
            { name: "Dr. Abdul Razzak Rumane", title: "Advisor", image: "/027.png" },
          ],
        },
      ],
    },
  };

  return (
    <div className="w-full min-h-screen mt-[50px]">
      {/* Header */}
      <div className="flex items-center justify-center mb-7">
        <h1 className="text-2xl font-semibold uppercase">Executive Committee</h1>
      </div>

      {/* Year Buttons */}
      <div className="btns flex-row flex items-center justify-center mx-2 space-x-0 mb-8">
          {["2023", "2022", "2021", "2020", "2019", "2018"].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`h-[30px] w-[100px] ${
                selectedYear === year
                  ? "bg-[#193540] text-white scale-80"
                  : "bg-white border-black text-black"
              } hover:bg-[#193540] hover:text-white active:bg-[#193540] border-[1.5px] transition-all duration-300`}
            >
              {year}
            </button>
          ))}
        </div>


      {/* Team Display */}
      <div className="px-12 md:mx- space-y-1">
        {teamData[selectedYear]?.sections.length > 0 ? (
          teamData[selectedYear]?.sections.map((section, idx) => (
            <div key={idx}>
              {/* Section Title */}
              <div className="flex  items-center justify-center mb-16">
                <h2 className="text-2xl font-semibold uppercase mt-8">{section.title}</h2>
              </div>

              {/* Render each member section with different styling */}
              <div className="flex flex-wrap gap-8 justify-center">
              {section.title === "Introducing Our Esteemed Team" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
    {section.members.map((member, index) => (
      <div
        key={index}
        className="bg-[#EDDCB9] w-full max-w-[250px] h-[300px] p-4 flex flex-col items-center justify-center hover:bg-[#193540] hover:text-white transition-all duration-300"
      >
        <div className="flex flex-col items-center justify-center text-center py-1">
          <img className="w-32 h-32 rounded-full" src={member.image} alt={member.name} />
          <p className="text-lg mt-4">{member.title}</p>
          <h3 className="text-xl font-semibold">{member.name}</h3>
        </div>
      </div>
    ))}
  </div>
)}


{section.title === "Executive Members" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {section.members.map((member, index) => (
      <div
        key={index}
        className="bg-[#EDDCB9] w-full max-w-[250px] h-[300px] p-4 flex flex-col items-center justify-center hover:bg-[#193540] hover:text-white transition-all duration-300"
      >
        <div className="flex flex-col items-center justify-center text-center py-1">
          <img className="w-24 h-24 rounded-full" src={member.image} alt={member.name} />
          <p className="text-lg mt-4">{member.title}</p>
          <h3 className="text-lg font-semibold break-words">{member.name}</h3>
        </div>
      </div>
    ))}
  </div>
)}


{section.title === "Executive Members - Ladies Cell" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
    {section.members.map((member, index) => (
      <div
        key={index}
        className="bg-[#EDDCB9] w-full max-w-[250px] h-[300px] p-4 flex flex-col items-center justify-center hover:bg-[#193540] hover:text-white transition-all duration-300"
      >
        <div className="flex flex-col items-center justify-center text-center py-1">
          <img className="w-24 h-24 rounded-full" src={member.image} alt={member.name} />
          <p className="text-lg mt-4">{member.title}</p>
          <h3 className="text-xl font-semibold">{member.name}</h3>
        </div>
      </div>
    ))}
  </div>
)}
{section.title === "Advisory Board" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
    {section.members.map((member, index) => (
      <div
        key={index}
        className="bg-[#EDDCB9] w-full max-w-[250px] h-[300px] p-4 flex flex-col items-center justify-center hover:bg-[#193540] hover:text-white transition-all duration-300"
      >
        <div className="flex flex-col items-center justify-center text-center py-1">
          <img className="w-24 h-24 rounded-full" src={member.image} alt={member.name} />
          <p className="text-lg mt-4">{member.title}</p>
          <h3 className="text-xl font-semibold">{member.name}</h3>
        </div>
      </div>
    ))}
  </div>
)}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center bg-gray-200 border border-black w-full h-[300px] text-center">
            <h2 className="text-lg font-semibold mb-4">Introducing Our Esteemed Team</h2>
            <p className="text-gray-500">No data available for the year {selectedYear}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExecutiveCommittee;
