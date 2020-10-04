import styled from "@emotion/styled";
import React from "react";
const Temp = (props) => {
  const Temperature = styled.h1`
    font-size: 2rem;
    font-family: "Fira Sans", sans-serif;
  `;
  return <Temperature>{props.temp}°C</Temperature>;
};

export default Temp;
