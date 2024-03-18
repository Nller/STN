import React, { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay, { type AutoplayType } from "embla-carousel-autoplay";
import { Icons } from "@/components/Icons";

type Props = {
  listTestimonials?: {
    name: string;
    image: string;
    business?: string;
    city?: string;
    rating: string;
    testimonial: string;
  }[];
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const TestimonialCarousel = ({
  listTestimonials = defaultTestimonials,
  className,
  ...props
}: Props) => {
  const autoplayPlugin = useRef<AutoplayType>(
    Autoplay({
      delay: 2500,
      jump: false,
      stopOnInteraction: false,
      stopOnFocusIn: false,
      stopOnMouseEnter: false,
    }),
  );

  return (
    <section
      className={cn(
        "mx-auto max-w-screen-xl px-6 pb-6 pt-24 sm:px-8",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col justify-center text-center">
        <h3 className="text-4xl text-center font-bold my-2  text-gray-700">
          Voces de Nuestros Clientes
        </h3>
        <p className="mx-auto my-2 w-10/12 text-center font-rubik font-normal not-italic leading-normal text-zinc-500 sm:w-7/12 lg:w-6/12">
          Descubre lo que nuestros clientes aman de nosotros
        </p>
      </div>
      <div className="flex w-full flex-col py-12">
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {listTestimonials.map((listTestimonial, index) => (
              <CarouselItem
                key={index}
                className="flex basis-5/6 font-rubik font-normal not-italic md:basis-1/2 lg:basis-1/3"
              >
                <div className="flex flex-col rounded-lg border-2 border-[#dddddd] p-8 transition-colors hover:border-primary">
                  <div className="flex w-full flex-col items-stretch xl:flex-row xl:items-center">
                    <div className="order-2 flex xl:order-1">
                      <Image
                        src={listTestimonial.image}
                        className="object-contain object-top"
                        width={50}
                        height={50}
                        // quality={40}
                        alt="Client Picture"
                      />
                      <div className="ml-5 flex flex-col text-left">
                        <p className="text-lg capitalize text-[#0b132a]">
                          {listTestimonial.name}
                        </p>
                        <p className="text-sm capitalize text-[#4f5665]">
                          {/* {listTestimonial.business} */}
                          {/* {listTestimonial.business &&
                            listTestimonial.city &&
                            ", "} */}
                          {listTestimonial.city}
                        </p>
                      </div>
                    </div>
                    <div className="order-1 ml-auto flex flex-none items-center xl:order-2">
                      {/* <p className="text-sm">{listTestimonial.rating}</p> */}
                      <span className="ml-4 flex">
                        <span className="ml-4 flex">
                          <Icons.star
                            width={12}
                            height={12}
                            className="fill-[#fcbf49]"
                          />
                          {/*  */}
                        </span>
                      </span>
                    </div>
                  </div>
                  <p className="mt-5 text-left text-[#4f5665]">
                    “{listTestimonial.testimonial}”
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex w-full items-center justify-end">
            <div className="mt-4 flex w-auto flex-none justify-between">
              <CarouselPrevious
                className="mx-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-primary bg-white stroke-primary text-primary transition-colors hover:bg-primary hover:stroke-white"
                onMouseDown={() => {
                  // eslint-disable-next-line
                  autoplayPlugin.current?.stop();
                }}
                onMouseUp={() => {
                  // eslint-disable-next-line
                  autoplayPlugin.current?.play();
                }}
                onMouseLeave={() => {
                  // eslint-disable-next-line
                  if (!autoplayPlugin.current?.isPlaying()) {
                    // eslint-disable-next-line
                    autoplayPlugin.current?.play();
                  }
                }}
              >
                <Icons.arrowLeft width={24} height={24} />
              </CarouselPrevious>
              <CarouselNext
                className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-primary bg-white stroke-primary text-primary transition-colors hover:bg-primary hover:stroke-white"
                onMouseDown={() => {
                  // eslint-disable-next-line
                  autoplayPlugin.current?.stop();
                }}
                onMouseUp={() => {
                  // eslint-disable-next-line
                  autoplayPlugin.current?.play();
                }}
                onMouseLeave={() => {
                  // eslint-disable-next-line
                  if (!autoplayPlugin.current?.isPlaying()) {
                    // eslint-disable-next-line
                    autoplayPlugin.current?.play();
                  }
                }}
              >
                <Icons.arrowRight width={24} height={24} />
              </CarouselNext>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

const defaultTestimonials = [
  {
    name: "Robert Quispe",
    image: "/assets/images/pos-restaurant/client-picture.png",
    business: "Sabores Criollos",
    city: "Lima",
    rating: "5",
    testimonial:
      "Estamos contentos con la integración perfecta de este sistema con nuestros dispositivos POS. La opción de facturación electrónica es una gran ventaja para cumplir con los requisitos de SUNAT. Un pequeño ajuste y sería perfecto.",
  },
  {
    name: "Leslie Janampa",
    image: "/assets/images/pos-restaurant/client-picture.png",
    business: "Café Aromático",
    city: "Lima",
    rating: "5",
    testimonial:
      "Muy satisfecha con la facturación electrónica y la capacidad de personalizar la interfaz. Sería genial si hubiera más opciones de diseño, pero en general, un excelente sistema para nuestro café.",
  },
  {
    name: "Alejandro Rodríguez",
    image: "/assets/images/pos-restaurant/client-picture.png",
    business: "La Parrillita",
    city: "Lima",
    rating: "5",
    testimonial:
      "Nuestro restaurante ha experimentado una transformación increíble desde que adoptamos este POS. Además, la facturación electrónica ha sido un gran alivio, especialmente con opciones manuales y automáticas. ¡Recomendado al 100%!",
  },
  {
    name: "Manuel Cuadros",
    image: "/assets/images/pos-restaurant/client-picture.png",
    business: "Fusion Gourmet",
    city: "Lima",
    rating: "4",
    testimonial:
      "Nos llegó en tiempo récord, y eso nos encantó. La personalización es buena, aunque un poco complicada al principio. En general, buen producto. ¡Gracias,\u00A0PixelCamp!",
  },
  {
    name: "Paola De la Cruz",
    image: "/assets/images/pos-restaurant/client-picture.png",
    business: "Aromas del Mar",
    city: "Lima",
    rating: "5",
    testimonial:
      "El precio es bastante accesible y se integra bien con nuestro sistema. A veces necesitamos soporte, y hasta ahora, PixelCamp ha sido rápido en ayudarnos. Buen servicio en general.",
  },
];

export default TestimonialCarousel;
