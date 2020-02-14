import React, { Fragment } from "react";

import preloader from "../assets/preloader.gif";

export const Preloader = () => (
  <Fragment>
    <img
      src={preloader}
      className="preloader"
      alt="Loading"
      data-testid="preloader"
    ></img>
  </Fragment>
);
