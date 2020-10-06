import React from "react";
const Heading = ({ name }) => {
  return (
    <div className="heading">
      <h1>{name}</h1>
    </div>
  );
};
function Form({ input, inChange, addCard }) {
  return (
    <div className="form">
      <Input input={input} inChange={inChange} addCard={addCard} />
      <Button addCard={addCard} />
    </div>
  );
}

function Input({ input, inChange, addCard }) {
  return (
    <input
      type="text"
      value={input}
      onKeyPress={(e) => addCard(e)}
      onChange={inChange}
    />
  );
}
function Button({ addCard }) {
  return (
    <button onClick={(e) => addCard(e)}>
      <span>ADD</span>
    </button>
  );
}

const Lists = ({ card, onHandle }) => {
  return (
    <ul>
      {card.map((e, i) => (
        <TodoItem onHandle={onHandle} key={i} id={i} item={e} />
      ))}
    </ul>
  );
};

const TodoItem = ({ item, id, onHandle }) => {
  return (
    <li
      onClick={() => {
        onHandle(id);
      }}
    >
      {item}
    </li>
  );
};
export { Button };
export { Lists };
export { Form };
export { Input };
export { TodoItem };
export { Heading };
