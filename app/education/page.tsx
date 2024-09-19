import React from 'react'
import Card2 from '../components/card2';

const page = () => {
  const educationDetails = [
    {
      institution: "University of Aberdeen, United Kingdom",
      duration: "2019 – 2023",
      degree: "PhD Economics",
      completion: "Completed on November, 2023",
      thesis: "Thesis Title: “The Socioeconomic Causes of Schooling Non-Attendance: The Case of Bangladesh.”",
      supervisors: "Supervisors: Prof. Keith A. Bender, Prof. Ioannis Theodossiou",
      merit: '',
      rank: '',
    },
    {
      institution: "University of Glasgow, UK",
      duration: "2013 – 2014",
      degree: "MSc. Economic Development",
      completion: '',
      thesis: '',
      supervisors: '',
      merit: "With merit",
      rank: ''
    },
    {
      institution: "Shahjalal University of Science and Technology, Sylhet, Bangladesh",
      duration: "2004 – 2005",
      degree: "M.SS. Economics",
      completion: '',
      thesis: '',
      supervisors: '',
      merit: '',
      rank: "Ranked 1st Position",
    },
    {
      institution: "Shahjalal University of Science and Technology, Sylhet, Bangladesh",
      duration: "2001 – 2004",
      degree: "B.S.S. Economics",
      completion: '',
      thesis: '',
      supervisors: '',
      merit: '',
      rank: "Ranked 1st Position",
    },
  ];


  return (
    <div className="bg-gray-800 flex flex-col sm:px-24 px-5 py-5 sm:pt-60 pt-36 ">

<div className="space-y-12">    
{educationDetails.map((edu, index) => (
  <Card2
    key={index}
    institution={edu.institution}
    duration={edu.duration}
    degree={edu.degree}
    completion={edu.completion}
    thesis={edu.thesis}
    supervisors={edu.supervisors}
    merit={edu.merit}
    rank={edu.rank}
  />
))}   
</div>  
    
  </div>
);
  
}

export default page