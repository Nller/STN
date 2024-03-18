import React, { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import Link from "next/link";
import AppConfig from "@/utils/AppConfig";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay, { type AutoplayType } from "embla-carousel-autoplay";

type Props ={
  images?: string[];
}& React.DetailedHTMLProps<
React.HTMLAttributes<HTMLDivElement>,
HTMLDivElement
>;


const Hero = ({ images = defaultImages, className, ...props }: Props) => {
  const autoplayPlugin = useRef(Autoplay({ delay: 1500, jump: false }));
  return (
    <section style={{ width: '100%', height: '100vh' , padding: '0'}} className={cn("mx-auto  px-6  sm:px-8", className)} {...props}>
      <Carousel opts={{ loop: true, dragFree: false,}} plugins={[autoplayPlugin.current]} className="w-full">
        <CarouselContent >
          {images.map((image, index) => (
            <CarouselItem style={{ padding: '0' }} key={index} className="flex w-full justify-center items-center">
              <Image style={{ width: '100%', height: '100vh'}} src={image} alt={`Image ${index}`} width={900} height={650} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );

};
const defaultImages = [
  "/assets/images/10.png",
  "/assets/images/11.png",  
  "/assets/images/12.png",
];
export default Hero; 