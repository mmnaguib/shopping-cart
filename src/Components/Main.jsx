import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import NavigateButtons from "./NavigateButtons";

const Main = () => {
  return (
    <Fragment>
      <Navbar />
      <Slider />
      <NavigateButtons />
    </Fragment>
  );
};

export default Main;
