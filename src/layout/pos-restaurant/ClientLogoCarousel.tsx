import React, { useRef } from "react";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

type Props = {
  clientLogos?: string[];
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const ClientLogoCarousel = ({
  clientLogos = defaultLogos,
  className,
  ...props
}: Props) => {
  const plugin = useRef(
    Autoplay({
      delay: 100,
      stopOnInteraction: false,
      jump: false,
      stopOnFocusIn: false,
    }),
  );

  return (
    <section
      className={cn(
        "to-white-500 w-full bg-gradient-to-b from-[#f8f8f8] py-12",
        className,
      )}
      {...props}
    >
      <div data-aos="fade-left" className="mx-auto flex w-full max-w-screen-xl flex-col justify-center gap-8 px-6 text-center sm:px-8 lg:px-16">
        <div className="flex w-full flex-col">
          <h3 className="text-4xl text-center font-bold my-2  text-gray-700">
            Nuestros Socios Estratégicos
          </h3>
          <p className="mx-auto my-2 w-10/12 text-center font-rubik font-normal not-italic leading-normal text-zinc-500 sm:w-7/12 lg:w-6/12">
            Empresas de confianza que respaldan nuestro servicio
          </p>
        </div>
        <Carousel
          opts={{
            loop: true,
            dragFree: true,
            duration: 10000,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {clientLogos.map((logo, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 opacity-50 transition-opacity duration-300 hover:opacity-100 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div key={index}>
                  <Image
                    alt="Client Logo"
                    src={logo}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "50px" }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

const defaultLogos = [
  "/assets/images/logo/logo1.jpg",
  "/assets/images/logo/logo2.png",
  "/assets/images/logo/logo3.png",
  "/assets/images/logo/logo4.png",
  "/assets/images/logo/logo5.png",
  "/assets/images/logo/logo1.jpg",
  "/assets/images/logo/logo2.png",
  "/assets/images/logo/logo3.png",
  "/assets/images/logo/logo4.png",
  "/assets/images/logo/logo5.png",
];

export default ClientLogoCarousel;
