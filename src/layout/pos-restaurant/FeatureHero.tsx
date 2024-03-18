import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";

type Props = {
  listFeatures?: string[];
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const FeatureHero = ({
  listFeatures = defaultFeatures,
  className,
  ...props
}: Props) => {
  return (
    <section
      className={cn(
        "mx-auto max-w-screen-xl px-6 pb-6 pt-24 sm:px-8",
        className,
      )}
      {...props}
    >
      <div
        className="grid grid-flow-row grid-rows-[repeat(2,minmax(0,auto));] gap-8
sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-1"
      >
        <div className="mx-auto flex w-full flex-col items-end justify-center gap-4 lg:w-9/12">
          <h3 className="text-3xl font-medium leading-relaxed text-[#131313] lg:text-4xl">
            Juntos hacia el éxito de tu negocio
          </h3>
          <p className="font-rubik font-normal not-italic text-[#131313]">
            Nos esforzamos por tu bienestar, porque tu triunfo es nuestro
            objetivo: <strong>¡Aumenta tus ventas y gasta&nbsp;menos!</strong>
          </p>
          <ul className="ml-8 list-inside self-start font-rubik text-base font-normal not-italic text-[#131313]">
            {listFeatures.map((listFeature, index) => (
              <li
                key={index}
                className="circle-check custom-list relative transition-[scale] duration-300 hover:[scale:1.05]"
              >
                {listFeature}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-full w-full p-4">
          <Image
            src="/assets/images/pos-restaurant/feature-hero.png"
            alt="Feature Hero"
            width={560}
            height={302}
          />
        </div>
      </div>
    </section>
  );
};

const defaultFeatures = [
  "Moderno, flexible y personalizable para cada negocio.",
  "Ideal para bares, restaurantes, cafeterías, pizzerías, y\u00A0más.",
  "Permite procesas varias órdenes al mismo tiempo.",
  "Soporte de expertos a tu disposición.",
];

export default FeatureHero;
