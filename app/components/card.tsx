import React from "react";

interface CardProps {
  title: string;
  description: string;
  authors: string;
  year: string;
  journal: string;
  link:string;
}

const Card: React.FC<CardProps> = ({ title, description, authors, year, journal, link }) => {
  return (
    <div className="bg-gray-900 w-full rounded-lg p-4 shadow-lg">
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
        <h2 className="text-2xl font-bold py-2 text-gray-100">{title}</h2>
        <p className="text-md text-gray-300">{description}</p>
        <p className="text-lg text-gray-300 mb-1">{authors} {(year)}</p>
        <p className="text-lg text-gray-300 italic">{journal}</p>
        {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200 mt-2 block"
            >
              Read more
            </a>
          )}
      </div>
    </div>
  );
};

export default Card;
