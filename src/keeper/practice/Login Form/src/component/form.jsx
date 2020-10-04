import React from "react";
import Input from "./input";
function Form({ userIsRegistered }) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="password" />
      {!userIsRegistered && (
        <Input type="password" placeholder="Confirm password" />
      )}

      <button type="submit">{userIsRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
