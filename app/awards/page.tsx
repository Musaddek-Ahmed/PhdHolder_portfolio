import React from 'react'
import { FaAward, FaMedal, FaUniversity } from "react-icons/fa";

const page = () => {
  const awards = [
    {
      title: "Fully Funded Commonwealth Scholarship",
      description: "To pursue PhD at the University of Aberdeen.",
      year: "2019 – 2023",
      icon: <FaUniversity className="text-purple-600 text-5xl mb-4" />,
    },
    {
      title: "Commonwealth Shared Scholarship",
      description: "For Masters in Economic Development.",
      year: "2013 – 2014",
      icon: <FaMedal className="text-blue-600 text-5xl mb-4" />,
    },
    {
      title: "Vice Chancellors (SUST) Medals",
      description: "For BSS and MSS in Bangladesh.",
      icon: <FaAward className="text-yellow-500 text-5xl mb-4" />,
    },
    {
      title: "Prime Minister Gold Medal Award",
      description: "For BSS in Bangladesh.",
      year: "2005",
      icon: <FaAward className="text-red-600 text-5xl mb-4" />,
    },
  ];
  return (
    <div className="bg-gradient-to-r from-pink-100 to-yellow-100 flex flex-col sm:px-24 px-5 py-5 sm:pt-60 pt-36">
    
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {awards.map((award, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center">
          {award.icon}
          <h2 className="sm:text-2xl text-xl text-center font-bold text-gray-700 mb-2">{award.title}</h2>
          <p className="text-lg text-gray-600 text-center">{award.description}</p>
          {award.year && <p className="text-sm text-gray-500 mt-4">{award.year}</p>}
        </div>
      ))}
    </div>
  </div>
  )
}

export default page