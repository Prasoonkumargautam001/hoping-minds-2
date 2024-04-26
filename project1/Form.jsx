import React from "react";
import { useState } from "react";

const Form = () => {
  const [isLogedIn, setLogedIn] = useState(false);
  const [userName, setUserName] = useState("")
  const handelChange = (e)=>{
    e.preventDefault()
    setUserName(e.target.value)
  }
  return (
    <div>
      {isLogedIn ? 
        <div>
          <h1>{userName}</h1>
        </div>
      : 
        <div className="form">
          
          <input id="userName" onChange={handelChange} value={userName} type="text" placeholder="UserName" />
          <input type="text" placeholder="Password" />
          <button onClick={()=>setLogedIn(true)}>Login</button>
        </div>
      }
    </div>
  );
};

export default Form;
