import React, { useState } from "react";

const ExecutiveCommittee = () => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const teamData = {
    "2018": { sections: [] }, // Add data for 2018 if available
    "2019": { sections: [] }, // Add data for 2019 if available
    "2020": { sections: [] }, // Add data for 2020 if available
    "2021": { sections: [] }, // Add data for 2021 if available
    "2022": {
      sections: [
        {
          title: "Introducing Our Esteemed Team",
          members: [
            { name: "Mr. Aslam Thakur", title: "President", image: "/t.jpg" },
            { name: "Mr. Muft Hamza Mujawar", title: "Vice President", image: "/t.jpg" },
            { name: "Mr. Labib Abbas Fakih", title: "Vice President", image: "/y.png" },
            { name: "Mr. Faisal Mohammed Kasim Jogilkar", title: "Joint General Secretary", image: "/1 (1).png" },
            { name: "Mr. Parvez Hussain Wadekar", title: "General Secretary", image: "/gs.png" },
            { name: "Mr. Amanullah Abbas Yelukar", title: "Joint General Secretary", image: "/jgs2.png" },
            { name: "Mr. Atif Azim Khanzada", title: "Joint Treasurer", image: "/jt1.png" },
            { name: "Mr. Mohammed Shafi Alware", title: "Treasurer", image: "/treasurer.png" },
            { name: "Mr. Talib Ali Rumaney", title: "Joint Treasurer", image: "/jt2.png" },
          ],
        },
        {
          title: "Executive Members",
          members: [
            { name: "Dr. Rahmatullah Galsoorker", title: "Executive Member", image: "/exec1.png" },
            { name: "Mr. Maulana Javed Karjikar", title: "Executive Member", image: "/exec2.png" },
            { name: "Mr. Yaqub Abdul Latif Solkar", title: "Executive Member", image: "/exec3.png" },
            { name: "Mr. Hasrat Murad Walile", title: "Executive Member", image: "/exec4.png" },
            { name: "Mr. Anwar Ayyub Mhalukar", title: "Executive Member", image: "/exec5.png" },
            { name: "Mr. Kifayat Ali Giyasuddin Tisekar", title: "Executive Member", image: "/exec6.png" },
            { name: "Mr. Mohammed Salim Kazi", title: "Executive Member", image: "/exec7.png" },
            { name: "Mr. Ridwan Abdul Rahman Mullaji", title: "Executive Member", image: "/exec8.png" },
            { name: "Mr. Nasar Jainuddin Parkar", title: "Executive Member", image: "/exec9.png" },
            { name: "Mr. Mohamed Saeed Ali Mullaji", title: "Executive Member", image: "/exec10.png" },
            { name: "Mr. Abrar Amanullah Shirshikar", title: "Executive Member", image: "/exec11.png" },
            { name: "Mr. Mansur Ibrahim Dalwai", title: "Executive Member", image: "/exec12.png" },
            { name: "Mr. Hafiz Samiulla Abdulla Firfire", title: "Executive Member", image: "/exec13.png" },
          ],
        },
        {
          title: "Executive Members - Ladies Cell",
          members: [
            { name: "Ms. Ruksana Labib Fakih", title: "Executive Member", image: "/ladies1.png" },
            { name: "Mrs. Humera Parvez Wadekar", title: "Executive Member", image: "/ladies2.png" },
          ],
        },
        {
          title: "Advisory Board",
          members: [
            { name: "Mr. Salim Umar Desai", title: "Ex-Officio President", image: "/advisory1.png" },
            { name: "Mr. Mohammed Saleh Burud", title: "Patron", image: "/advisory2.png" },
            { name: "Maulana Nisar Daroge", title: "Advisor", image: "/advisory3.png" },
            { name: "Dr. Abdul Razzak Rumane", title: "Advisor", image: "/advisory4.png" },
          ],
        },
      ],
    },
    "2023": {
      sections: [
        {
          title: "Introducing Our Esteemed Team",
          members: [
            { name: "Mr. Aslam Thakur", title: "President", image: "/t.jpg" },
            { name: "Mr. Muft Hamza Mujawar", title: "Vice President", image: "/t.jpg" },
            { name: "Mr. Labib Abbas Fakih", title: "Vice President", image: "/y.png" },
            { name: "Mr. Faisal Mohammed Kasim Jogilkar", title: "Joint General Secretary", image: "/1 (1).png" },
            { name: "Mr. Parvez Hussain Wadekar", title: "General Secretary", image: "/gs.png" },
            { name: "Mr. Amanullah Abbas Yelukar", title: "Joint General Secretary", image: "/jgs2.png" },
            { name: "Mr. Atif Azim Khanzada", title: "Joint Treasurer", image: "/jt1.png" },
            { name: "Mr. Mohammed Shafi Alware", title: "Treasurer", image: "/treasurer.png" },
            { name: "Mr. Talib Ali Rumaney", title: "Joint Treasurer", image: "/jt2.png" },
          ],
        },
        {
          title: "Executive Members",
          members: [
            { name: "Dr. Rahmatullah Galsoorker", title: "Executive Member", image: "/exec1.png" },
            { name: "Mr. Maulana Javed Karjikar", title: "Executive Member", image: "/exec2.png" },
            { name: "Mr. Yaqub Abdul Latif Solkar", title: "Executive Member", image: "/exec3.png" },
            { name: "Mr. Hasrat Murad Walile", title: "Executive Member", image: "/exec4.png" },
            { name: "Mr. Anwar Ayyub Mhalukar", title: "Executive Member", image: "/exec5.png" },
            { name: "Mr. Kifayat Ali Giyasuddin Tisekar", title: "Executive Member", image: "/exec6.png" },
            { name: "Mr. Mohammed Salim Kazi", title: "Executive Member", image: "/exec7.png" },
            { name: "Mr. Ridwan Abdul Rahman Mullaji", title: "Executive Member", image: "/exec8.png" },
            { name: "Mr. Nasar Jainuddin Parkar", title: "Executive Member", image: "/exec9.png" },
            { name: "Mr. Mohamed Saeed Ali Mullaji", title: "Executive Member", image: "/exec10.png" },
            { name: "Mr. Abrar Amanullah Shirshikar", title: "Executive Member", image: "/exec11.png" },
            { name: "Mr. Mansur Ibrahim Dalwai", title: "Executive Member", image: "/exec12.png" },
            { name: "Mr. Hafiz Samiulla Abdulla Firfire", title: "Executive Member", image: "/exec13.png" },
          ],
        },
        {
          title: "Executive Members - Ladies Cell",
          members: [
            { name: "Ms. Ruksana Labib Fakih", title: "Executive Member", image: "/ladies1.png" },
            { name: "Mrs. Humera Parvez Wadekar", title: "Executive Member", image: "/ladies2.png" },
          ],
        },
        {
          title: "Advisory Board",
          members: [
            { name: "Mr. Salim Umar Desai", title: "Ex-Officio President", image: "/advisory1.png" },
            { name: "Mr. Mohammed Saleh Burud", title: "Patron", image: "/advisory2.png" },
            { name: "Maulana Nisar Daroge", title: "Advisor", image: "/advisory3.png" },
            { name: "Dr. Abdul Razzak Rumane", title: "Advisor", image: "/advisory4.png" },
          ],
        },
      ],
    },
  };

  return (
    <div className="w-full min-h-screen mt-[50px]">
      {/* Header */}
      <div className="flex items-center justify-center mb-7">
        <h1 className="text-2xl font-semibold capitalize">Executive Committee</h1>
      </div>

      {/* Year Buttons */}
      <div className="btns flex-row flex items-center justify-center space-x-0 mb-8">
        {["2023", "2022", "2021", "2020", "2019", "2018"].map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`h-[30px] w-[100px]  ${
              selectedYear === year
                ? "bg-[#548477] text-white"
                : "bg-white border-black text-black"
            } hover:bg-[#75bdaa] active:bg-[#548477] border-[1.5px] transition-colors duration-300`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Team Display */}
      <div className="px-20 space-y-1">
        {teamData[selectedYear]?.sections.length > 0 ? (
          teamData[selectedYear]?.sections.map((section, idx) => (
            <div key={idx}>
              {/* Section Title */}
              <div className="flex items-center justify-center mb-16">
                <h2 className="text-xl font-semibold capitalize">{section.title}</h2>
              </div>

              {/* Member Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {section.members.map((member, index) => (
                  <div
                    key={index}
                    className="w-[250px] h-[160px] bg-[#548477] text-white relative transition-transform transform hover:scale-105 duration-300"
                  >
                    {/* Image */}
                    <div
                      className="relative w-full h-[100px] flex justify-center items-center -mt-5 top-[-20px]"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-[80px] h-[100px] border-white"
                      />
                    </div>

                    {/* Member Info */}
                    <div className="flex flex-col items-center justify-center py-1">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm">{member.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-lg text-gray-500">
            No data available for the year {selectedYear}.
          </div>
        )}
      </div>
    </div>
  );
};

export default ExecutiveCommittee;
