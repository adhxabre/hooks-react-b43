import React, { useState } from "react";

export default function StateFunc() {
  const [data, setData] = useState({ email: "", username: "", password: "" });

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" name="email" onChange={handleOnChange} />
      </div>
      <div>
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleOnChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
