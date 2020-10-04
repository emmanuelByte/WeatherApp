import React, { useState } from "react";
import "../public/styles.css";
import { Li, Form, Heading } from "./Cooponents";

const App = () => {
  const [card, setCard] = useState([]);
  const [input, setInput] = useState("");
  const addCard = () => {
    document.querySelector(".form").childNodes[0].value = "";
    setCard((prev) => {
      // prev = new Set(prev);

      return [
        ...prev,
        input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase(),
      ];
    });
  };
  const hide = (event) => {
    if (event.target.checked)
      document.querySelector("ul div").childNodes[1].style.textDecoration =
        "line-through";
    else
      document.querySelector("ul div").childNodes[1].style.textDecoration =
        "none";
  };

  return (
    <div className="container">
      <Form
        heading={<Heading name={"Todo List"} />}
        input={
          <Input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        }
        button={
          <button onClick={addCard}>
            <span>ADD</span>
          </button>
        }
      ></Form>
      <div>
        <ul>
          {card.map((e, i) => (
            <div>
              <input type="checkbox" onClick={hide} key={e} />
              <Li item={e} onClick={hide} key={i}></Li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
