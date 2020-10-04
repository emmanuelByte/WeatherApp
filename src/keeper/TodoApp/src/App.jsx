import React, { useState } from "react";
import "../public/styles.css";
const App = () => {
  const [card, setCard] = useState([]);
  const [input, setInput] = useState("");
  const addCard = () => {
    setCard((prev) => {
      // prev = new Set(prev);
      return [...prev, input];
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>Todo List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onMouseOut={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={addCard}>
          <span>ADD</span>
        </button>
      </div>
      <div>
        <ul>
          {card.map((e, i) => (
            <div>
              <input type="checkbox" className={e} name={i} />
              <li>{e}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
