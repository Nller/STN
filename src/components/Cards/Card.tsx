import React from 'react';

interface CardProps {
  
  title: string;
  description: string;
  imageUrl: string;
  classname?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm overflow-hidden px-11 py-6 my-4 bg-gray-100">
      <div className="font-bold text-xl mb-2">{title}</div>
      
      <div className="relative h-60 ">
        <img className="w-full h-full object-contain object-center duration-500 hover:scale-110" src={imageUrl} alt={title} />
      </div>
      <div className="px-6 py-6">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;