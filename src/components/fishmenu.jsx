import React, { useState } from "react";

const usabilityHeuristics = [
  { id: 1, label: "UH#1", details: "Visibility of system status" },
  { id: 2, label: "UH#2", details: "Match between system and the real world" },
  { id: 3, label: "UH#3", details: "User control and freedom" },
  { id: 4, label: "UH#4", details: "Consistency and standards" },
  { id: 5, label: "UH#5", details: "Error prevention" },
  { id: 6, label: "UH#6", details: "Recognition rather than recall" },
  { id: 7, label: "UH#7", details: "Flexibility and efficiency of use" },
  { id: 8, label: "UH#8", details: "Aesthetic and minimalist design" },
  { id: 9, label: "UH#9", details: "Help users recognize, diagnose, and recover from errors" },
  { id: 10, label: "UH#10", details: "Help and documentation" },
];

const FisheyeMenu = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="flex justify-center  w-full  min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4">
      <div className="flex mt-[65vh] justify-between w-full h-fit  mx-4 max-w-6xl">
        {usabilityHeuristics.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setActiveItem(item.id)}
            onMouseLeave={() => setActiveItem(null)}
            className={`relative flex flex-col items-center w-20 h-20 p-4 mx-2 rounded-full shadow-lg bg-white transition-all duration-300 scale-100  ${
              activeItem === item.id ? "w-48 h-auto scale-125" : " h-16"
            }`}
          >
            <div className="font-semibold text-lg text-gray-800">{item.label}</div>
            {activeItem === item.id && (
              <div className="mt-2 text-sm text-gray-600 text-center">
                {item.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FisheyeMenu;
