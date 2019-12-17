import React from "react";

function Alert({ alert, setAlertClick }) {
  return (
    alert !== null && (
      <div onClick={setAlertClick} className={`alert alert-${alert.type}`}>
        <i className="fas fa info circle"></i> {alert.msg}
      </div>
    )
  );
}

export default Alert;
