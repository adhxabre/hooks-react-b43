import React, { useState } from "react";

import Form from "./components/form";

import "./styles/global.css";

function App() {
  return (
    <>
      <Form />
      <div className="formGroup">
        <label htmlFor="username" className="formLabel">
          Username
        </label>
        <input
          id="username"
          placeholder="Input username"
          className="formInput"
        />
      </div>
    </>
  );
}

export default App;
