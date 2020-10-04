import styled from "@emotion/styled";
import React from "react";
const CardLocation = () => {
  const Location = styled.div`
    text-align: center;
  `;
  const City = styled.h1`
    font-family: "McLaren", cursive;
    font-size: 2.5rem;
  `;
  const Country = styled.h3``;
  return (
    <Location>
      <City>Lagos</City>
      <Country>NG</Country>
    </Location>
  );
};

export default CardLocation;
