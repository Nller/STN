// export const AppConfig = {
//   site_name: "PixelCamp",
//   url: "https://pixelcamp.pe",
//   title: "Pixel Camp",
//   description:
//     "Servicios de consultoría y desarrollo de aplicaciones web y móviles.",
//   locale: "es",
// };

export type AppHeaderMenuItemType = {
  name: string;
  path: string;
  subMenus?: AppHeaderMenuItemType[];
};

const headerMenuConfig = [
  {
    name: "Inicio",
    path: "#",
  },
  {
    name: "Servicios",
    path: "#services",
  },
  {
    name: "Nosotros",
    path: "#us",
  },
];

const metaConfig = {
  site_name: "PixelCamp",
  url: "https://pixelcamp.pe",
  title: "Pixel Camp",
  description:
    "Servicios de consultoría y desarrollo de aplicaciones web y móviles.",
  locale: "es",
};

const whatsappInfo = {
  "POS Restaurante": {
    phone: "51919190687",
    message: "Hola! Estoy interesado en el sistema de POS para Restaurantes",
  },
};

const whatsappLink = (
  whatsappInfoKey: keyof typeof whatsappInfo,
  customMessage?: string,
) => {
  const { phone } = whatsappInfo[whatsappInfoKey];
  const message = customMessage ?? whatsappInfo[whatsappInfoKey].message;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

const AppConfig = {
  ...metaConfig,
  headerMenuConfig,
  whatsappInfo,
  whatsappLink,
};

export default AppConfig;
