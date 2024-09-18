import React from 'react'

const page = () => {
  const publications = [
    {
      title: "How are Bangladeshi migrants adapting to Scottish schooling? A case study in the city of Aberdeen.",
      authors: "Bakth, N. N.",
      year: "2023",
      journal: "Granite 8(1)",
      link: "https://doi.org/10.57064/2164/22340",
    },
    {
      title: "Temporary environmental migration and child truancy: An investigation among hard-to-reach families in Bangladesh.",
      authors: "Bakth, N., & Hasanuzzaman, S.",
      year: "2022",
      journal: "Journal of Social and Economic Development, 1-18",
    },
    {
      title: "Recovering Slackness in Diffusion of ICS: A Clean Cooking Technology in Bangladesh.",
      authors: "Hasanuzzaman, S., Husain, M.A., and Bakth, N.",
      year: "2022",
      journal: "International Journal of Energy, Environment, and Economics, Vol. 29(1)",
    },
    {
      title: "Policy Impact on Food Price in South Asian Countries.",
      authors: "Bakth, N. and McTier, A.",
      year: "2021",
      journal: "Sust Studies (Special Issue on Bangladesh Development Perspectives: Issues of Economics Justice and Morality)",
    },
    {
      title: "Labor Market Responses to Job Vulnerability: A Micro Study in Sylhet.",
      authors: "Sultana, M., N. Bakth, and M. A. L. Mahmud",
      year: "2013",
      journal: "Development Review, Vol. 23: 43 – 51",
    },
    {
      title: "Exploring the role of Child Labor in Family Income in an Urban area of Bangladesh.",
      authors: "Sultana, M., S. Hasanuzzaman, & N. Bakth",
      year: "2012",
      journal: "Journal of Social Science, Faculty of Social Sciences, Begum Rokeya University, Rongpur, Bangladesh, Vol. 1(1): 137-150",
    },
    {
      title: "Awareness and capacity building in fisheries management: An impact analysis of CBFM training in Sunamganj Haor area of Bangladesh.",
      authors: "Bakth, N. and M.M.H Kajal",
      year: "2007",
      journal: "Bangladesh Journal of Fisheries (Special Issue, 2007) 30:125-135",
    },
  ];
  return (
    <div className="bg-gray-800 flex flex-col sm:px-24 px-5 py-5 sm:pt-60 pt-36 ">
    

    <div className="space-y-12">
      {publications.map((publication, index) => (
        <div
          key={index}
          className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">{publication.title}</h2>
          <p className="text-lg text-gray-600 mb-1">{publication.authors} ({publication.year})</p>
          <p className="text-lg text-gray-600 italic">{publication.journal}</p>
          {publication.link && (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200 mt-2 block"
            >
              Read more
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
  )
}

export default page