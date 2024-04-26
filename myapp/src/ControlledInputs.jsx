import React, { useState } from "react";

const ControlledInputs = () => {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
    phonenumber: "",
  });

  const showData = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form className="form">
      <h4>User Form</h4>

      <div className="form-row">
        <h4 htmlFor="name" className="form-h4">
          Name
        </h4>
        <input
          onChange={handleChange}
          type="text"
          className="form-input"
          id="name"
          name="name"
          value={userData.name}
        />
      </div>

      <div className="form-row">
        <h4 htmlFor="email" className="form-h4">
          Email
        </h4>
        <input
          onChange={handleChange}
          type="email"
          className="form-input"
          id="email"
          name="email"
          value={userData.email}
        />
      </div>

      <div className="form-row">
        <h4 htmlFor="password" className="form-h4">
          Password
        </h4>
        <input
          onChange={handleChange}
          type="password"
          className="form-input"
          id="password"
          name="password"
          value={userData.password}
        />
      </div>

      <div className="form-row">
        <h4 htmlFor="phonenumber" className="form-h4">
          Phone Number
        </h4>
        <input
          onChange={handleChange}
          type="text"
          className="form-input"
          id="phonenumber"
          name="phonenumber"
          value={userData.phonenumber}
        />
      </div>

      <button onClick={showData} type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};

export default ControlledInputs;
