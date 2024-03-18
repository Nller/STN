import React from "react";
import { Open_Sans, Lora, Rubik } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "700"],
});

const FontsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              --font-open-sans: ${openSans.style.fontFamily};
              --font-lora: ${lora.style.fontFamily};
              --font-rubik: ${rubik.style.fontFamily};
            }`,
        }}
      />
      {children}
    </React.Fragment>
  );
};

export default FontsLayout;
