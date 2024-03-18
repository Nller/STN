import "../styles/global.css";

import { useEffect } from "react";
import type { AppProps } from "next/app";
import { type NextPage } from "next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MainSeoLayout } from "@/layout/MainSeoLayout";
import MainFontsLayout from "@/layout/MainFontsLayout";
import MainWrapLayout from "@/layout/MainWrapLayout";
/*
useEffect(() => {
  AOS.init({
       duration: 800,
       once: false,
     })
}, [])
*/
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      //offset: 100,
      duration: 800,
      once: false,
    });
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <MainSeoLayout>
      <MainFontsLayout>
        <MainWrapLayout>
          <Component {...pageProps} />
        </MainWrapLayout>
      </MainFontsLayout>
    </MainSeoLayout>
  );
}
