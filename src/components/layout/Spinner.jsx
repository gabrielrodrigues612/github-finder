import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="" style={{ width: "100px" }} />
    </Fragment>
  );
};

export default Spinner;
