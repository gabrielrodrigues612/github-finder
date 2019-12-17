import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <div className="text-center">
        <img src={spinner} alt="" style={{ width: "100px" }} />
      </div>
    </Fragment>
  );
};

export default Spinner;
