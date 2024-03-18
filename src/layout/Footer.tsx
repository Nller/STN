import { Icons } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] py-20 font-rubik font-medium not-italic">
      <div className="mx-auto grid w-full max-w-screen-xl grid-flow-row grid-rows-1 gap-4 px-6 sm:grid-flow-col sm:gap-10 sm:px-8 lg:px-16">
        <div className="col-start-1 col-end-4 row-span-2 flex flex-col items-start sm:col-span-4 sm:col-end-5 ">
          <Link href="" className="mb-6">
            <Image
              alt="Logo"
              src="/assets/images/logo/logo_black_1x.png"
              width={128}
              height={32}
            />
          </Link>
          <p className="mb-4">
            Somos una empresa de desarrollo de software que busca ayudar a las
            empresas a digitalizarse y automatizar sus procesos.
          </p>
          <div className="-mx-2 mb-8 mt-2 flex w-full">
            {[
              {
                name: "Facebook",
                href: "https://www.facebook.com/pixelcampco",
                icon: (
                  <Icons.Logos.facebook
                    width={24}
                    height={24}
                    className="fill-primary"
                  />
                ),
              },
              {
                name: "Instagram",
                href: "",
                icon: (
                  <Icons.Logos.instagram
                    width={24}
                    height={24}
                    className="fill-primary"
                  />
                ),
              },
              {
                name: "Twitter",
                href: "",
                icon: (
                  <Icons.Logos.twitter
                    width={24}
                    height={24}
                    className="fill-primary"
                  />
                ),
              },
              // {
              //   name: "Github",
              //   href: "",
              //   icon: <Icons.Logos.github width={24} height={24} className="fill-primary"  />
              // },
            ].map(({ name, href, icon }, index) => (
              <div
                key={index}
                className="mx-2 flex items-center justify-center rounded-full bg-white p-2 shadow-md"
              >
                <Link aria-label={name} href={href}>
                  {icon}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-gray-600">
            ©{new Date().getFullYear()} - PixelCamp
          </p>
        </div>
        <div className="row-span-2 flex flex-col sm:col-span-2 sm:col-start-7 sm:col-end-9">
          <p className="mb-4 text-lg font-medium text-[#131313]">Servicios</p>
          <ul className="text-[#4f5665] ">
            <li className="transition-color my-2 cursor-pointer hover:text-primary">
              Consultoría de Software
            </li>
            <li className="transition-color my-2 cursor-pointer hover:text-primary">
              Desarrollo Personalizado
            </li>
            <li className="transition-color my-2 cursor-pointer hover:text-primary">
              POS para Restaurantes
            </li>
          </ul>
        </div>
        <div className="row-span-2 flex flex-col sm:col-span-2 sm:col-start-9 sm:col-end-11">
          <p className="mb-4 text-lg font-medium text-[#131313]">Recursos</p>
          <ul className="text-[#4f5665]">
            <li className="transition-color my-2 cursor-pointer hover:text-primary">
              Preguntas Frecuentes
            </li>
            <li className="transition-color my-2 cursor-pointer hover:text-primary">
              Materiales Educativos
            </li>
            <li className="transition-color my-2 cursor-pointer hover:text-primary">
              Política de Privacidad
            </li>
            <li className="transition-color my-2 cursor-pointer hover:text-primary">
              Terminos y Condiciones
            </li>
          </ul>
        </div>
        <div className="row-span-2 flex flex-col sm:col-span-2 sm:col-start-11 sm:col-end-13">
          <p className="mb-4 text-lg font-medium text-[#131313]">Soporte</p>
          <ul className="text-[#4f5665]">
            <li className="transition-color my-2 cursor-pointer hover:text-primary">
              info@pixelcamp.pe
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
