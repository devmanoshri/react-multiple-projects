import React from "react";

const Alert2 = ({ type, msg }) => {
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert2;
