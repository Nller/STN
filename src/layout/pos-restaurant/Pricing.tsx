import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
const storyTitle = "La Historia de Kombucha del Sol: tu bebida refrescante y saludable";
const storyText ="En lo alto de los majestuosos Andes peruanos, nació Kombucha del Sol, una empresa dedicada a compartir la alegría y vitalidad de la kombucha con el mundo. Todo comenzó con la visión de crear una bebida refrescante, llena de sabor y beneficios para la salud.";
const OurStory = ({ className, ...props }: Props) => {
  
  return (
    
    <section
      className={cn(
        "m-0 flex px-6 pb-6 pt-24 sm:px-8",
        "bg-gradient-to-b from-primary-background/50 to-white",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-screen-xl flex-col sm:flex-row justify-center items-center px-6 text-center sm:px-8">
        <div data-aos="fade-down-right" className="w-full sm:w-2/5 mb-8 sm:mb-0">
          {/* Aquí colocamos la imagen a la izquierda */}
          <img src="/assets/images/kam1.png" alt="Imagen de ejemplo" className="w-full h-50% rounded-md"
          />
        </div>
        <div className="w-full sm:w-3/5">
          {/* Aquí colocamos el texto a la derecha */}
          <h3 className="text-right my-8 text-2xl font-bold leading-relaxed text-[#131313] sm:text-3xl lg:text-4xl">
            {storyTitle}
          </h3>
          <p className="my-2 text-right leading-normal">
            {storyText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
