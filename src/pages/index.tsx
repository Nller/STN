import React from "react";
import Hero from "@/layout/pos-restaurant/Hero";
import TestimonialCarousel from "@/layout/pos-restaurant/TestimonialCarousel";
import FeatureCards from "@/layout/pos-restaurant/FeatureCards";
import ClientLogoCarousel from "@/layout/pos-restaurant/ClientLogoCarousel";
import VideoHero from "@/layout/pos-restaurant/VideoHero";
import FeatureHero from "@/layout/pos-restaurant/FeatureHero";
import WhastappAppButton from "@/components/button";
import Contact from "@/components/contact";
import Pricing from "@/layout/pos-restaurant/Pricing";
import CardContainer from "@/components/Cards/CardContainer";

const Page = () => {
  return (
    <React.Fragment>
      <Hero id="hero" className="bg-primary-background" />
      <CardContainer />
      {/*<VideoHero id="video-hero" />*/}
      <ClientLogoCarousel id="client-logo-carousel" className="z-50" /> 
      {/*<FeatureHero id="feature-hero" />*/}
      {/*<FeatureCards id="feature-cards" />*/}
      <TestimonialCarousel id="testimonial-carousel" />
      <Pricing />
      <Contact/>
      <WhastappAppButton />
      
    </React.Fragment>
  );
};

export default Page;
