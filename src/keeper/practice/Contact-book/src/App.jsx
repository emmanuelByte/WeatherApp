import React from "react";
import contact from "../contact";
import "../public/styles.css";
import Card from "./components/card";
// const
const App = () => {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contact.map((e, i) => (
        <Card
          key={i}
          name={e.name}
          email={e.email}
          tel={e.phone}
          img={e.imgURL}
        ></Card>
      ))}
    </div>
  );
};

export default App;
