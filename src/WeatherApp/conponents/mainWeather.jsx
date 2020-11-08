import React from "react";
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};

function getTime(distance) {
  const hours = distance.getHours();
  const minutes = distance.getMinutes();
  return `${hours}:${minutes}`;
}

const today = new Date().toLocaleDateString("en-US", options);
const MainWeather = ({ name, sys, weather, main, wind, bool }) => {
  sys = sys ? sys : {};
  weather = weather ? weather[0] : {};
  main = main ? main : {};
  wind = wind ? wind : {};
  //   console.log(weather);
  let src;
  if (weather.icon)
    src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  if (name && sys && weather && main && wind)
    return (
      <div className="mainweather" style={{ display: bool ? "flex" : "none" }}>
        <div className="location">
          <h3>{name + "," + sys.country}</h3>
          <p>{today}</p>
        </div>
        <div className="status">
          <div className="img">
            <img src={src} alt="" />
          </div>
          <div>
            <p>{main.temp}°C</p>
            <p>{weather.description}</p>
          </div>
        </div>
        <div className="overview">
          <div>
            <p>{main.temp_max}°C</p>
            <p>High</p>
          </div>
          <div>
            <p> {wind.speed}mph </p>
            <p>Wind</p>
          </div>
          {/* /////////////// */}
          <div>
            <p>{getTime(new Date(sys.sunrise * 1000))}</p>
            <p>Sunrise</p>
          </div>
          <div>
            <p>{main.temp_min}°C</p>
            <p>Low</p>
          </div>

          <div>
            <p>{wind.deg}°θ</p>
            <p>Direction</p>
          </div>

          <div>
            <p>{getTime(new Date(sys.sunset * 1000))}</p>
            <p>Sunset</p>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div
        className="mainweather"
        style={{ display: bool ? "flex" : "none" }}></div>
    );
};

export default MainWeather;
