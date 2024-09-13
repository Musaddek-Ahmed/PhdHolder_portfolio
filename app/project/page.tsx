import React from 'react'

const page = () => {
  const projectExperiences = [
    {
      title: "Co-investigator of the project: “Theoretical and Empirical Perspective of Migration Cost Differential Between Trafficked and Legal International Migration”",
      description: "Worked with Professor Dr. Mohammad Abdul Munim Joarder as the principal investigator, Shahjalal University of Science and Technology. Funded by SUST Research Center for School of Social Science.",
    },
    {
      title: "Co-investigator of the project: “A Study on Nature Based Tourism in Bangladesh”",
      description: "Organized by IUCN with Professor Dr. Enamul Haque as the principal investigator, East West University, Dhaka.",
    },
    {
      title: "Principal investigator of the project: “Investment Climate for the Women Entrepreneurs in Sylhet: An Examination of Cost Functional Efficiency”",
      description: "Small Research Grant by SUST Research Center for School of Social Science.",
    },
  ];

  return (
        <div className="bg-gradient-to-r from-pink-100 to-yellow-100 flex flex-col sm:px-24 px-5 py-5 sm:pt-60 pt-36">
      

      <div className="space-y-12">
        {projectExperiences.map((project, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
          >
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">{project.title}</h2>
            <p className="text-gray-700 text-lg">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page