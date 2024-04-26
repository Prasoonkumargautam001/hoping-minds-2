import React, { useState } from "react";
import { userData } from "./FinalData";
import DataShow from "./DataShow";

const UseStateArray = () => {
  const [user, setUser] = useState(userData);
  const deleteData = (id) => {
    setUser(userData.filter((data) => data.id != id));
  }
  console.log(user);
  return (
    <div className="flex">
      {user.map((data) => {
        const { age, id, name } = data;
        return (
          <div>
            <DataShow
              deleteData={() => deleteData(id)}
              key={id}
              age={age}
              name={name}
            />
          </div>
        );
      })}
      <button onClick={()=>setUser([])}>Clear</button>
    </div>
  );
};

export default UseStateArray;
