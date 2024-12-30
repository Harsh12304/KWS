import React, { useState } from "react";

const CoordinationCommittee = () => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const teamData = {
    "2018": { sections: [] }, // Add data for 2018 if available
    "2019": { sections: [] }, // Add data for 2019 if available
    "2020": { sections: [] }, // Add data for 2020 if available
    "2021": { sections: [] }, // Add data for 2021 if available
    "2022": { sections: [] }, // Add data for 2022 if available
    "2023": { sections: [] }, // Add data for 2023 if available
  };

  return (
    <div className="w-full min-h-screen mt-[50px]">
      {/* Header */}
      <div className="flex items-center justify-center mb-7">
        <h1 className="text-2xl font-semibold capitalize">Volunteer Committee</h1>
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
      <div className="px-20 md:mx-20 space-y-1">
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
                    className="w-[250px] h-[160px] bg-[#548477] text-black relative transition-transform transform hover:scale-105 duration-300"
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
          <div className="flex flex-col items-center justify-center bg-gray-200 border border-black w-full h-[300px] text-center">
            <h2 className="text-lg font-semibold mb-4">Introducing Our Esteemed Team</h2>
            <p className="text-gray-500">No data available for the year {selectedYear}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoordinationCommittee;
