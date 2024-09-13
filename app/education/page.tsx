import React from 'react'

const page = () => {
  const educationDetails = [
    {
      institution: "University of Aberdeen, United Kingdom",
      duration: "2019 – 2023",
      degree: "PhD Economics",
      completion: "Completed on November, 2023",
      thesis: "Thesis Title: “The Socioeconomic Causes of Schooling Non-Attendance: The Case of Bangladesh.”",
      supervisors: "Supervisors: Prof. Keith A. Bender, Prof. Ioannis Theodossiou",
    },
    {
      institution: "University of Glasgow, UK",
      duration: "2013 – 2014",
      degree: "MSc. Economic Development",
      merit: "With merit",
    },
    {
      institution: "Shahjalal University of Science and Technology, Sylhet, Bangladesh",
      duration: "2004 – 2005",
      degree: "M.SS. Economics",
      rank: "Ranked 1st Position",
    },
    {
      institution: "Shahjalal University of Science and Technology, Sylhet, Bangladesh",
      duration: "2001 – 2004",
      degree: "B.S.S. Economics",
      rank: "Ranked 1st Position",
    },
  ];


  return (
    <div className="bg-gradient-to-r from-pink-100 to-yellow-100 flex flex-col sm:px-24 px-5 py-5 sm:pt-60 pt-36 ">
{educationDetails.map((edu, index) => (
  <div
    key={index}
    className="mb-10 p-6 bg-white shadow-lg rounded-lg border-l-4 border-gray-800 transform transition duration-500 hover:scale-105"
  >
    <h2 className="text-2xl font-semibold text-gray-700">{edu.institution}</h2>
    <p className="text-gray-600 text-lg">{edu.duration}</p>
    <p className="mt-2 text-xl font-medium text-gray-700">{edu.degree}</p>
    {edu.completion && <p className="text-gray-600">{edu.completion}</p>}
    {edu.thesis && <p className="text-gray-600 italic">{edu.thesis}</p>}
    {edu.supervisors && <p className="text-gray-600">{edu.supervisors}</p>}
    {edu.merit && <p className="text-gray-600">{edu.merit}</p>}
    {edu.rank && <p className="text-gray-600">{edu.rank}</p>}
  </div>
))}   

    
  </div>
);
  
}

export default page