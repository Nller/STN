import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-6 pb-6 pt-24 sm:px-8">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-6xl font-medium text-[#131313]">404</h1>
          <h2 className="text-4xl font-medium text-[#131313] md:text-5xl">
            Ups, esta página no existe
          </h2>
          <p className="mb-6 mt-4 font-rubik text-lg font-medium not-italic text-gray-600 sm:text-base">
            No se puede encontrar la página que estás buscando. Vuelva a
            verificar la URL y intenta otra vez. Te invitamos a visitar nuestra
            página de inicio.
          </p>
          <Link
            href="/"
            className="rounded-lg bg-primary px-12 py-3 text-lg font-bold text-white outline-none transition-transform hover:scale-105 lg:px-16 lg:py-4"
          >
            Ir a la página de inicio
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
