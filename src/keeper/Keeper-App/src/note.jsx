import React from "react";
import notes from "./notes";
const Note = ({ title, note }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{note}</p>
    </div>
  );
};

export default () => {
  return (
    <div>
      {notes.map((e, i) => {
        return <Note title={e.title} note={e.content} key={i}></Note>;
      })}
    </div>
  );
};
