import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import AppConfig from "@/utils/AppConfig";
import WhastappAppButton from "@/components/button";

type Props = {
  listLinks?: {
    displayName: string;
    link: string;
    icon?: React.ReactNode;
  }[];
};

const Header = ({ listLinks = defaultLinks }: Props) => {
  const [activeLink, setActiveLink] = useState<string>();
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 580);
    });
  }, []);
  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-30 w-full font-rubik font-normal not-italic transition-[padding,background-color]",
          "bg-primary-background text-lg",
          {
            "bg-white pt-0 shadow-md": scrollActive,
            "py-2": !scrollActive,
          },
        )}
        style={{ backgroundColor: scrollActive ? "#FFFFFF" : 'transparent', color: scrollActive ? "#000000" : "#ffffff" }}
      >
        <nav className="mx-auto grid max-w-screen-xl grid-flow-col px-6 py-3 sm:px-8 sm:py-4 lg:px-16">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href="/">
              <Image
                alt="Logo"
                src="/assets/images/logo/logo_black_1x.png"
                width={128}
                height={32}
              />
            </Link>
          </div>
          <ul className="col-start-4 col-end-8 hidden items-center text-[#131313] lg:flex">
            {listLinks.map((listLink, index) => (
              <li key={index}>
                <LinkScroll
                  href={`#${listLink.link}`}
                  activeClass="active"
                  to={listLink.link}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink(listLink.link);
                  }}
                  className={cn(
                    "animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2",
                    {
                      "animation-active text-primary":
                        activeLink === listLink.link,
                      "text-[#FFFFFF] hover:text-primary":
                        activeLink !== listLink.link && !scrollActive,
                      "text-[#000000] hover:text-primary":
                        activeLink !== listLink.link && scrollActive,
                    },
                  )}
                  style={{ fontSize: activeLink === listLink.link ? "1.2em" : "1em", fontWeight: activeLink === listLink.link ? "bold" : "normal" }}
                >
                  {listLink.displayName}
                </LinkScroll>
              </li>
            ))}
          </ul>
          <div className="col-start-10 col-end-12 flex items-center justify-end font-medium">
            <Link
              href={AppConfig.whatsappLink("POS Restaurante")}
              target="_blank"
              className="hover:shadow-orange rounded-l-full rounded-r-full border border-primary bg-white px-5 py-2 font-bold capitalize tracking-wide text-primary outline-none transition-colors hover:bg-primary hover:text-white sm:px-8"
            >
              Contactar
            </Link>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}
      <nav className="shadow-t fixed bottom-0 left-0 right-0 z-20 bg-white px-4 font-rubik font-normal not-italic sm:px-8 lg:hidden">
        <div className="sm:px-3">
          <ul className="flex w-full items-center justify-between text-[#131313]">
            {listLinks.map((listLink, index) => (
              <li key={index}>
                <LinkScroll
                  href={`#${listLink.link}`}
                  activeClass="active"
                  to={listLink.link}
                  spy={true}
                  smooth={true}
                  duration={800}
                  onSetActive={() => {
                    setActiveLink(listLink.link);
                  }}
                  className={cn(
                    "mx-1 flex flex-col items-center border-t-2 px-3 py-2 text-xs transition-colors sm:mx-2 sm:px-4",
                    {
                      "border-primary text-primary":
                        activeLink === listLink.link,
                      "border-transparent": activeLink !== listLink.link,
                    },
                    "fill-none",
                  )}
                  style={{ fontSize: activeLink === listLink.link ? "1.2em" : "1em", fontWeight: activeLink === listLink.link ? "bold" : "normal" }}
                >
                  {listLink.icon}
                  {listLink.displayName}
                </LinkScroll>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

const defaultLinks = [
  {
    displayName: "Inicio",
    link: "hero",
    icon: <Icons.Header.about className="h-6 w-6" stroke="currentColor" />,
  },
  {
    displayName: "Funciones",
    link: "feature-cards",
    icon: <Icons.Header.features className="h-6 w-6" stroke="currentColor" />,
  },
  {
    displayName: "Testimonios",
    link: "testimonial-carousel",
    icon: (
      <Icons.Header.testimonial className="h-6 w-6" stroke="currentColor" />
    ),
  },
  {
    displayName: "Precios",
    link: "pricing",
    icon: <Icons.Header.pricing className="h-6 w-6" stroke="currentColor" />,
  },
];

export default Header;
