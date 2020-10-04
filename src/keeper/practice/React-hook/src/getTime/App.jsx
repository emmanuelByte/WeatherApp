import styled from "@emotion/styled";
import React, { useState } from "react";
const App = () => {
  const Div = styled.div`
    margin: 0 auto;
    text-align: center;
  `;
  const [time, setTime] = useState("TIME");
  function update() {
    setTime(new Date().toLocaleTimeString());
    setInterval(update, 1000);
  }
  return (
    <Div>
      <h1>{time}</h1>
      <button onClick={() => update()}>Get Time</button>
    </Div>
  );
};

export default App;
