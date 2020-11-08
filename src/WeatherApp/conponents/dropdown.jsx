import React from "react";
const Dropdown = ({
  dBool,
  setDbool,
  changeValue,
  dropdown,
  countries,
  // cities,
  getWeather,
  setCountry,
}) => {
  //   console.log(cities);

  return (
    <div className="dropdown d1" style={{ display: dBool ? "block" : "none" }}>
      <ul>
        {dropdown.map((e, i) => {
          return (
            <li
              key={i}
              onClick={(e) => {
                const v = e.target.firstChild.innerText;
                const s = countries.find((ele) => ele.name === v);
                if (s.code) setCountry(s.code);
                changeValue(v);
                setDbool(false);
                // console.log(country, "real");
              }}>
              <p>{!undefined && e.name}</p>
              <p>{!undefined && e.country}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
