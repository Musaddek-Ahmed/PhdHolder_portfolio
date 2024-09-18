import React from 'react'
import { FaLaptopCode, FaLanguage, FaUsers, FaChalkboardTeacher } from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-gray-800 sm:px-24 px-5 py-5 sm:pt-60 pt-36 ">
    

    <div className="grid grid-cols-1 sm:grid-cols-2  gap-12 ">
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center">
        <FaChalkboardTeacher className="text-blue-600 text-5xl mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Associate Fellowship</h2>
        <p className="text-lg text-gray-600 text-center">Achieved on UK advanced higher Study (AFHEA)</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center">
        <FaLaptopCode className="text-green-600 text-5xl mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Software Proficiency</h2>
        <p className="text-lg text-gray-600 text-center">Stata, EViews, SPSS, Microsoft Office</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center">
        <FaLanguage className="text-red-600 text-5xl mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Language</h2>
        <p className="text-lg text-gray-600 text-center">English (fluent)</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center">
        <FaUsers className="text-yellow-600 text-5xl mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">General Skills</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 text-left">
          <li>Good team player</li>
          <li>Effective communication skills (written and oral)</li>
          <li>Ability to blend, work, and teach in a diverse environment</li>
          <li>Ability to raise the enthusiasm of students through effective engagement</li>
          <li>Effective virtual teaching</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default page