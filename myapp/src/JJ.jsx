import React, { useState } from "react";

const JJ = () => {
  const [order, setOrder] = useState({
    isFreeShipping: false,
    course: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(order)
  };
  const handelShipping = (e) => {
    e.preventDefault();
    const { name, checked } = e.target;
    setOrder({ ...order, [name]: checked });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };
  return (
    <div>
      <form action="">
        <div>
          <input
            onChange={handelShipping}
            value={order.isFreeShipping}
            name="isFreeShipping"
            type="checkbox"
          />{" "}
          Free Shipping
        </div>

        <select
          onChange={handleChange}
          name="course"
          id="course"
          value={order.course}
        >
          <option value="angular">Angular</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
        </select>

        <button onClick={handelSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default JJ;
