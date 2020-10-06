import React, { useState } from "react";
const Note = ({ title, note }) => {
  const [card, setCard] = useState([]);
  const [input, setInput] = useState({ title: "", content: "" });
  const [isbool, setbool] = useState(true);
  function onAdd() {
    const { title, content } = input;
    if (title && content) {
      setCard((pre) => [...pre, input]);
      setInput({ title: "", content: "" });
      setbool((pre) => !pre);
    }
  }
  function onDelete(i) {
    setCard((pre) => pre.filter((e, id) => id !== i));
  }
  function onInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    setInput((pre) => {
      return {
        ...pre,
        [name]: value,
        delete: "delete",
      };
    });
  }

  return (
    <>
      <div
        className="plus"
        style={{ display: isbool ? "none" : "block" }}
        onClick={() => setbool((pre) => !pre)}
      >
        +
      </div>
      <div className="field" style={{ display: isbool ? "flex" : "none" }}>
        <button onClick={() => setbool((pre) => !pre)}>-</button>
        <input
          type="text"
          name="title"
          onChange={(e) => onInput(e)}
          placeholder="Title"
          value={input.title}
        />
        <textarea
          type="text"
          name="content"
          value={input.content}
          onChange={(e) => onInput(e)}
          placeholder="Note"
        />
        <button
          onClick={() => {
            onAdd();
          }}
        >
          Add
        </button>
      </div>
      <section>
        {card.map((e, i) => (
          <div className="note" key={i}>
            <h1>{e.title}</h1>
            <div className="c">
              <p>{e.content}</p>
              <button onClick={() => onDelete(i)}>{e.delete}</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Note;
