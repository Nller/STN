import React, { useEffect, useState } from "react";

import { Sortable } from "@/components/dnd/2 - Presets/Sortable/Sortable";
import { arraySwap, rectSwappingStrategy } from "@dnd-kit/sortable";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";

type Props = {
  featureCards?: {
    icon: React.ReactNode;
    title: string;
    content: string;
  }[];
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const FeatureCards = ({
  featureCards = defaultCards,
  className,
  ...props
}: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMounted(true);
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={cn(
        "mx-auto max-w-screen-xl px-6 pb-6 pt-24 sm:px-8",
        className,
      )}
      {...props}
    >
      {isMounted && windowWidth > 992 ? (
        <Sortable
          useDragOverlay={true}
          Container={(props: any) => (
            <ul
              {...props}
              className="inline-grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            />
          )}
          strategy={rectSwappingStrategy}
          items={featureCards.map((featureCard, index) => {
            return {
              id: index.toString(),
              content: (
                <article
                  key={index}
                  className="mx-auto flex h-full max-w-sm transform flex-col rounded-xl fill-gray-800 py-1 text-gray-800 outline-dotted transition-transform duration-500 hover:-translate-y-1 hover:fill-primary hover:text-primary"
                >
                  <div className="flex items-center justify-center py-4">
                    {featureCard.icon}
                  </div>
                  <div className="flex items-center justify-center">
                    <h2 className="min-h-18 px-4 text-center text-3xl font-bold transition-colors duration-300">
                      {featureCard.title}
                    </h2>
                  </div>
                  <div className="flex flex-grow items-center justify-center">
                    <p className="p-4 text-center font-rubik text-base font-medium not-italic leading-relaxed text-gray-600">
                      {featureCard.content}
                    </p>
                  </div>
                </article>
              ),
            };
          })}
          reorderItems={arraySwap}
          getNewIndex={({ id, items, activeIndex, overIndex }) =>
            arraySwap(items, activeIndex, overIndex).indexOf(id)
          }
        />
      ) : (
        <div className="grid grid-cols-1 gap-8 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((featureCard, index) => (
            <article
              key={index}
              className="mx-auto flex h-full max-w-sm transform flex-col rounded-xl fill-gray-800 py-1 text-gray-800 outline-dotted transition-transform duration-500 hover:-translate-y-1 hover:fill-primary hover:text-primary"
            >
              <div className="flex items-center justify-center py-4">
                {featureCard.icon}
              </div>
              <div className="flex items-center justify-center">
                <h2 className="px-4 text-center text-3xl font-bold transition-colors duration-300">
                  {featureCard.title}
                </h2>
              </div>
              <div className="flex flex-grow basis-0 items-center justify-center">
                <p className="p-4 text-center font-rubik text-base font-medium not-italic leading-relaxed text-gray-600">
                  {featureCard.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

const defaultCards = [
  {
    icon: <Icons.FeatureCards.order width="80" height="80" />,
    title: "Pedidos Digitales",
    content:
      "Optimiza la toma de pedidos con un proceso digitalizado que reduce los tiempos de espera y aumenta la satisfacción del cliente.",
  },
  {
    icon: <Icons.FeatureCards.multiDevice width="80" height="80" />,
    title: "Compatible con cualquier dispositivo",
    content:
      "Accede a la gestión completa de tu restaurante desde cualquier lugar y en el dispositivo de tu elección, asegurando flexibilidad y acceso constante.",
  },
  {
    icon: <Icons.FeatureCards.statistics width="80" height="80" />,
    title: "Reportes y Estadísticas",
    content:
      "Obtén reportes detallados y estadísticas en tiempo real para tomar decisiones informadas basadas en datos precisos y actuales. Ejemplo: ventas diarías y totales, ventas por tipo de pago, etc.",
  },
  {
    icon: <Icons.FeatureCards.receipt width="80px" height="80px" />,
    title: "Recibos personalizados",
    content:
      "Personaliza los recibos con tu logo, colores, información de contacto, redes sociales, etc.",
  },
  {
    icon: <Icons.FeatureCards.printer width="80px" height="80px" />,
    title: "Tickets de pedidos para cocina",
    content:
      "Mantén informados a tus cocineros y personal con impresiones automáticas y en tiempo real.",
  },
  {
    icon: <Icons.FeatureCards.electronicInvoicing width="80px" height="80px" />,
    title: "Facturación Electrónica",
    content:
      "Simplifica la facturación electrónica y la conexión con SUNAT, incluyendo la emisión de boletas electrónicas y aceptando diversos métodos de pago.",
  },
];

export default FeatureCards;
