import styled from "@emotion/styled";
import React from "react";
const Icon = () => {
  const Img = styled.img`
    width: 100%;
    height: 100px;
    margin: 0 auto;
  `;
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=80f76ad75f0a232870871d18f8f925eb";
  let img = "https://openweathermap.org/img/wn/03d@2x.png";
  // http: console.log(img);
  return <Img src={img} alt="weather icon" />;
};

export default Icon;
