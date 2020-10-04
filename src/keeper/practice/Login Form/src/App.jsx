import React from "react";
import Form from "./component/form";
import "../public/styles.css";

var userIsRegistered = false;

const App = () => (
  <div className="container">
    <Form userIsRegistered={userIsRegistered} />
  </div>
);

export default App;
