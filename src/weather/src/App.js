import styled from "@emotion/styled";
import React from "react";

import WeatherCard from "./components/conponent";
const APP = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  
  /* width: fit-content; */
`;

const App = () => {
  return (
    <APP>
      <title>Weather App</title>
      <WeatherCard temp={40} />

      <WeatherCard temp={0} />
      <WeatherCard temp={15} />
      <WeatherCard temp={20} />
      <WeatherCard temp={-20} />
      <WeatherCard temp={-5} />
    </APP>
  );
};

export default App;
