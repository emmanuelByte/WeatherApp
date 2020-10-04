import React, { useState } from "react";
import "./styles.css";
function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [state, setState] = useState(true);
  // const [names, setNames] = useState({});
  const handleClick = (event) => {
    let { name, value } = event.target;
    const v = value.slice(0, 1).toUpperCase();
    value = name !== "email" ? v + value.slice(1) : value.toLowerCase();
    setFullName((pre) => {
      setState(false);
      return { ...pre, [name]: value };
    });
  };
  return (
    <div className="container">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <h1>
          {state === true && "Come on Board"}
          {fullName.fname} &nbsp;
          {fullName.lname}
        </h1>
        <p>{fullName.email}</p>
        <input
          autoComplete="false"
          onChange={handleClick}
          type="text"
          name="fname"
          placeholder="First name"
          value={fullName.fname}
        />
        <input
          onChange={handleClick}
          type="text"
          name="lname"
          placeholder="Last Name"
          value={fullName.lname}
        />
        <input
          type="email"
          name="email"
          onChange={handleClick}
          value={fullName.email}
          placeholder="Type your email"
        />
        <button
          onClick={() => {
            // setNames({ fname: fullName.fname, lname: fullName.lname });
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
