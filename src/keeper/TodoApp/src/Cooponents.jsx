import React from "react";
const Li = ({ item }) => {
  return <li>{item} </li>;
};
const Heading = ({ name }) => {
  return (
    <div className="heading">
      <h1>{name}</h1>
    </div>
  );
};
const Form = ({ heading, input, button }) => {
  return (
    <div className="form">
      {heading} {input} {button}
    </div>
  );
};
const Input = ({ handle }) => {
  return <input type="text" onChange={handle} />;
};

export { Form };

export { Heading };
export { Input };
export { Li };
