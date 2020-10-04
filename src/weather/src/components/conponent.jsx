import styled from "@emotion/styled";
import React from "react";
import Icon from "./icon";
import CardLocation from "./location";
import Temp from "./temperature";
import Condition from "./condition";
let t;
const WeatherCard = (props) => {
  let highColor = 0;
  let lowColor = 0;
  let red = 0;
  let blue = 255;
  t = props.temp;
  if (props.temp > 12) {
    highColor = (1 - (props.temp - 12) / 28) * 255 * 2;
    lowColor = highColor - 255;
    red = 255;
    blue = 0;
  } else {
    highColor = (1 - (props.temp + 20) / 32) * 255 * 2;
    lowColor = highColor - 255;
  }
  console.log(highColor, lowColor);
  const Card = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Fira+Sans&family=Merriweather&display=swap");
    background: linear-gradient(
      to top,
      rgb(${red}, ${highColor}, ${blue}),
      rgb(${red}, ${lowColor}, ${blue})
    );
    text-align: center;
    margin: 2rem auto;
    width: 200px;

    font-family: "Merriweather", serif;
    color: #fff;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 15px;
    padding: 1rem 2rem 2rem;
  `;
  return (
    <Card>
      <CardLocation></CardLocation>
      <Icon></Icon>
      <Temp temp={t}></Temp>
      <Condition></Condition>
    </Card>
  );
};

export default WeatherCard;
