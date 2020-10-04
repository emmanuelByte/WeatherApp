import React from "react";
import emojipedia from "../emojipedia";
import "../../public/styles.css";
import Term from "./Term";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
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
