import React from "react";

interface CardProps {
    institution: string;
    duration: string;
    degree: string;
    completion: string;
    thesis: string;
    supervisors: string;
    merit: string;
    rank: string;
}

const Card2: React.FC<CardProps> = ({ institution, duration, degree, completion, thesis, supervisors, merit, rank }) => {
  return (
    <div className="bg-black w-full rounded-lg p-4 shadow-lg">
      <div className="flex p-2 gap-1">
        <div className="">
          <span className="bg-red-500 inline-block center w-3 h-3 rounded-full" />
        </div>
        <div className="circle">
          <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full" />
        </div>
        <div className="circle">
          <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full" />
        </div>
      </div>
      <div className="card__content mt-4">
      <h2 className="text-2xl font-semibold text-gray-100">{institution}</h2>
    <p className="text-gray-100 text-lg">{duration}</p>
    <p className="mt-2 text-xl font-medium text-gray-100">{degree}</p>
    {completion && <p className="text-gray-100">{completion}</p>}
    {thesis && <p className="text-gray-100 italic">{thesis}</p>}
    {supervisors && <p className="text-gray-100">{supervisors}</p>}
    {merit && <p className="text-gray-100">{merit}</p>}
    {rank && <p className="text-gray-100">{rank}</p>}
  </div>
      </div>
  );
};

export default Card2;
