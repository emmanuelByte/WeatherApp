import React from "react";
import Avater from "./avater";
export default ({ name, img, tel, email }) => (
  <div>
    <div className="card">
      <div className="top">
        <h2>{name}</h2>
        <Avater img={img}></Avater>
      </div>
      <div className="bottom">
        <p>{tel} </p>
        <p>{email} </p>
      </div>
    </div>
  </div>
);
