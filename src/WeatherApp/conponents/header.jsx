import React from "react";

const style = {
  fontSize: 20 + "px",
  position: "absolute",
  left: 2 + "rem",
  top: 1 + "rem",
};
const Head = ({ bool }) => {
  return (
    <header>
      <h1 style={bool ? style : {}}>Today's weather</h1>
    </header>
  );
};

export default Head;
