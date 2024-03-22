import React from "react";

const getStyleName = (btn) => {
  const className = {
    "=": "opt",
    "+": "opt",
    X: "opt",
    "/": "opt",
    "-": "opt",
    0: "zero",
  };
  return className[btn];
};

const Btn = ({ value }) => {
  //   console.log(value);
  return (
    <>
      <button className={`${getStyleName(value)} btn`}>{value}</button>
    </>
  );
};

export default Btn;
