import React, { useState } from "react";

const Users = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const handelChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const addData = (e) => {
    e.preventDefault();
    setUsers(name);
    console.log(users);
  };
  return (
    <div>
      <form action="oncSubmit">
        <p>Name</p>
        <input type="text" onChange={handelChange} name="" id="" value={name} />
        <button onClick={addData}>add</button>
      </form>
    </div>
  );
};

export default Users;
