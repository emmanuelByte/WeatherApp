import styled from "@emotion/styled";
import React, { useState } from "react";
const App = () => {
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Btn = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
  `;
  let [count, setcount] = useState(0);
  console.log(count, setcount);
  return (
    <Div>
      <h1>{count} Count</h1>
      <Btn>
        <button onClick={() => setcount(++count)}>+</button>
        <button onClick={() => setcount(--count)}>-</button>
      </Btn>
    </Div>
  );
};
export default App;
