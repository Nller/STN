import React from "react";

import AppConfig from "@/utils/AppConfig";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/layout/GoogleAnalytics";
import FacebookPixel from "@/layout/FacebookPixel";
import { NextSeo } from "next-seo";
import { Meta } from "./Meta";

function MainSeoLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Meta />
      <NextSeo
        title={AppConfig.title}
        description={AppConfig.description}
        openGraph={{
          title: AppConfig.title,
          url: AppConfig.url,
          description: AppConfig.description,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: [
            {
              url: `${AppConfig.url}/assets/images/logo/og-logo.png`,
              type: "image/png",
              alt: AppConfig.title,
              width: 512,
              height: 512,
            },
          ],
        }}
      />
      <Analytics />
      <SpeedInsights />
      <GoogleAnalytics />
      <FacebookPixel />
      {children}
    </React.Fragment>
  );
}

export {
  Analytics as VercelAnalytics,
  SpeedInsights as VercelSpeedInsights,
  GoogleAnalytics,
  FacebookPixel,
  NextSeo,
  Meta,
  MainSeoLayout,
};
