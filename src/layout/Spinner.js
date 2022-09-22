import React, { Fragment } from "react";
import spinnerImage from "../layout/spinner.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={spinnerImage}
      alt="loading..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Spinner;
