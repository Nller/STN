// components/CardContainer.tsx
import React from 'react';
import Card from './Card';



interface CardContainerProps {
  cardsData: Array<{
    title: string;
    description: string;
    imageUrl: string;
  }>;
}

const CardContainer: React.FC = () => {
    return (
      <div>
        <h1 className="text-3xl text-center font-bold my-8  text-gray-700">EXPLORA LA FAMILIA RISE</h1>
        <div data-aos="fade-right" className="flex flex-col items-center sm:flex-row sm:justify-evenly">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      
    );
  };


  const cardsData = [
    {
      title: 'Rise Kombucha',
      description: 'Descripción de ejemplo para la tarjeta 1.',
      imageUrl: '/assets/images/imagen1.png',
    },
    {
      title: 'Rise Kombucha',
      description: 'Descripción de ejemplo para la tarjeta 2.',
      imageUrl: '/assets/images/botellas1.png',
    },
    {
      title: 'Rise Kombucha 3',
      description: 'Descripción de ejemplo para la tarjeta 3.',
      imageUrl: '/assets/images/imagen1.png',
    },
    
];
export default CardContainer;