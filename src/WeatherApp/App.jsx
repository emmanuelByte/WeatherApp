import React, { useState } from "react";
import "./style.css";
import "./conponents/header";
import Head from "./conponents/header";
import Search from "./conponents/search";
import MainWeather from "./conponents/mainWeather";

const App = () => {
  const [data, setData] = useState({});

  const [bool, setBool] = useState(false);
  return (
    <div className="main">
      <Head bool={bool} />
      <Search setData={setData} setBool={setBool} bool={bool} />
      <MainWeather
        name={data.name}
        sys={data.sys}
        weather={data.weather}
        main={data.main}
        wind={data.wind}
        bool={bool}
      />
    </div>
  );
};

export default App;
