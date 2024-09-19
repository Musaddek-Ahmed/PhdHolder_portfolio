'use client'

import React from "react";
import styled from "styled-components";
import { IconType } from 'react-icons';

interface CardProps {
    icon: IconType;
    title: string;
    description: string;
    year: string;
}

const Card3: React.FC<CardProps> = ({ icon: Icon, title, description, year }) => {
  return (
    <StyledWrapper>
      <div className="cards">
        <figure className="card">
          <figcaption className="card_title">
          <Icon className="text-purple-400 text-5xl mb-4" />
          <h2 className="sm:text-2xl text-xl text-center font-bold text-gray-100 mb-2">{title}</h2>
          <p className="text-lg text-gray-300 text-center">{description}</p>
          {year && <p className="text-sm text-gray-400 mt-4">{year}</p>}
          </figcaption>
        </figure>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards {
  perspective: 900px;
}

.card {
  width: 600px;
  height: 290px;
  background: #16161d;
  border: 2px solid #555555;
  border-radius: 4px;
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
  transition: transform .5s;
}

.card:hover {
  transform: translateZ(10px) rotateX(10deg) rotateY(10deg);
}

.card_title {
  color: #fff;
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-80%);
  transition: transform .5s;
  font: 700 1.5rem monospace;
  text-shadow: -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
}

.card:hover .card_title {
  transform: translateZ(5px);
}
`;

export default Card3;
