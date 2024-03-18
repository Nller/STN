import React from "react";


const WhastappAppButton = () => {
    const handleWhastappButtonClick = () => {
        window.open('https://wa.me/919190687', '_blank');

    };

    return (
        <a href="https://wa.me/919190687" target="_blank" rel="noopener noreferrer" onClick={handleWhastappButtonClick} className="fixed bottom-8 right-8 z-50">
            <img
            src="/assets/images/imagen_2024-02-21_175543538-removebg-preview.png"
            alt="WhatsApp"
            width={80} 
            height={80} 
            className="hover:shadow-orange transition-all duration-300"
            
            />

        </a>
            
    );
};
export default WhastappAppButton;