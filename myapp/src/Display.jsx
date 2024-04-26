import React, { useRef } from "react";
import { userData } from "./data";
import { useState } from "react";

const Display = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const userRef = useRef({
    name: "",
    email: "",
  });
  const [state, setState] = useState(userRef.current);

  const handelOnSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
    };

    setState(newUser);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form action="onSubmit" onSubmit={handelOnSubmit}>
        <p>Name</p>
        <input
          htmlFor="name"
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          htmlFor="name"
          type="email"
          name=""
          value={email}
          id=""
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">SUbmit</button>
      </form>
      <h2>User Details</h2>
      {
        <div>
          <h1>Name: {state.name}</h1>
          <h2>Email : {state.email}</h2>
        </div>
      }
    </div>
  );
};

export default Display;
