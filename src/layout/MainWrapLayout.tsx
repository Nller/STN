import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const MainWrapLayout = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >,
) => {
  return (
    <React.Fragment>
      <Header />
      <main {...props} />
      <Footer />
    </React.Fragment>
  );
};

export default MainWrapLayout;
