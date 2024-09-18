import React from 'react'
import Card from '../components/card';

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
      link: ''
    },
    {
      title: "Recovering Slackness in Diffusion of ICS: A Clean Cooking Technology in Bangladesh.",
      authors: "Hasanuzzaman, S., Husain, M.A., and Bakth, N.",
      year: "2022",
      journal: "International Journal of Energy, Environment, and Economics, Vol. 29(1)",
      link: ''
    },
    {
      title: "Policy Impact on Food Price in South Asian Countries.",
      authors: "Bakth, N. and McTier, A.",
      year: "2021",
      journal: "Sust Studies (Special Issue on Bangladesh Development Perspectives: Issues of Economics Justice and Morality)",
      link: ''
    },
    {
      title: "Labor Market Responses to Job Vulnerability: A Micro Study in Sylhet.",
      authors: "Sultana, M., N. Bakth, and M. A. L. Mahmud",
      year: "2013",
      journal: "Development Review, Vol. 23: 43 – 51",
      link: ''
    },
    {
      title: "Exploring the role of Child Labor in Family Income in an Urban area of Bangladesh.",
      authors: "Sultana, M., S. Hasanuzzaman, & N. Bakth",
      year: "2012",
      journal: "Journal of Social Science, Faculty of Social Sciences, Begum Rokeya University, Rongpur, Bangladesh, Vol. 1(1): 137-150",
      link: ''
    },
    {
      title: "Awareness and capacity building in fisheries management: An impact analysis of CBFM training in Sunamganj Haor area of Bangladesh.",
      authors: "Bakth, N. and M.M.H Kajal",
      year: "2007",
      journal: "Bangladesh Journal of Fisheries (Special Issue, 2007) 30:125-135",
      link: ''
    },
  ];
  return (
    <div className="bg-gray-800 flex flex-col sm:px-24 px-5 py-5 sm:pt-60 pt-36 ">
    

    <div className="space-y-12">
    {publications.map((publications, index) => (
          <Card
            key={index}
            title={publications.title}
            description={''}
            authors={publications.authors}
            year= {publications.year}
            journal= {publications.journal}
            link= {publications.link}

          />
        ))}
        </div>
    </div>

  )
}

export default page