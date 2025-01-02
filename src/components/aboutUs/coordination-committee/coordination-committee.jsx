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
export default CoordinationCommittee;
