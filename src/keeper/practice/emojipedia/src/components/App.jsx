import React from "react";
import emojipedia from "../emojipedia";
import "../../public/styles.css";
import Term from "./Term";

function App() {
  return (
    <div>
      <h1>
        <span onClick={(e) => console.log(e.type)}>emojipedia</span>
      </h1>
      <input
        type="text"
        onKeyPress={(e) => e.key === "Enter" && console.log(e.key)}
      />
      <dl className="dictionary">
        {emojipedia.map((e, i) => (
          <Term
            name={e.name}
            key={i}
            meaning={e.meaning}
            emoji={e.emoji}
          ></Term>
        ))}
      </dl>
    </div>
  );
}

export default App;
