import React, { useState } from "react";
import "../public/styles.css";
import { Heading, Lists, Form } from "./Cooponents";
const App = () => {
  const [card, setCard] = useState([]);
  const [input, setInput] = useState("");
  const addCard = (e) => {
    if (e.key === "Enter" && input) {
      setCard((prev) => [...prev, input]);
      setInput("");
    } else if (e.type === "click") {
      setCard((prev) => [...prev, input]);
      setInput("");
    }
  };
  const onHandle = (id) => {
    setTimeout(() => {
      setCard((pre) => pre.filter((e, i) => i !== id));
    }, 200);
  };
  const inChange = (e) => {
    let value = e.target.value;
    value = value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
    setInput(value);
  };
  return (
    <div className="container">
      <Heading name={"Todo List"} />
      <Form input={input} inChange={inChange} addCard={addCard} />
      <Lists card={card} onHandle={onHandle} />
    </div>
  );
};

export default App;
