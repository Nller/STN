import React from "react";

import { cn } from "@/lib/utils";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const VideoHero = ({ className, ...props }: Props) => {
  return (
    <section
      className={cn(
        "mx-auto max-w-screen-xl px-6 pb-6 pt-24 sm:px-8",
        className,
      )}
      {...props}
    >
      <div className="p y-8 my-12 grid grid-flow-row grid-cols-1 gap-8  sm:grid-flow-col sm:grid-cols-2">
        <div className="h-full w-full p-4">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full rounded-lg bg-primary-background object-cover shadow-md sm:object-[top_0_right_-10rem] md:object-[top_0_right_-7rem] lg:object-center" // [clip-path:inset(1px_1px)]
          >
            <source src="/assets/videos/cafe_waitress.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="z-10 ml-auto flex w-full flex-col items-end justify-center gap-4 lg:w-9/12">
          <h3 className="text-3xl font-medium leading-relaxed text-[#131313] lg:text-4xl">
            Tu Restaurante Conectado, Sin&nbsp;Complicaciones
          </h3>
          <p className="text-justify font-rubik font-normal not-italic text-[#131313]">
            Inicia con todo incluido:{" "}
            <strong>1&nbsp;año de hosting seguro y gratuito en la nube</strong>,
            perfecto para mantener tu sistema POS siempre accesible para que te
            enfoques en lo que realmente importa, tu&nbsp;restaurante.
          </p>
          <p className="text-justify font-rubik font-normal not-italic text-[#131313]">
            Si prefieres una solución a largo plazo o un total control sobre el
            sistema, pregunta por nuestro{" "}
            <strong>plan de pago&nbsp;único</strong>, sin cuotas mensuales ni
            anuales. Podrás montar el sistema en tu propia computadora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
