import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import NavigateButtons from "./NavigateButtons";
import Products from "./Products";
import Footer from "./Footer";
import ProductSection from "./ProductSection";

const Main = () => {
  return (
    <Fragment>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <ProductSection />
      <Footer />
    </Fragment>
  );
};

export default Main;
