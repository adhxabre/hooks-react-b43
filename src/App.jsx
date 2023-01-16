import React, { useState } from "react";

function App() {
  const [data, setData] = useState(0);

  // let data = 0;

  function Inc() {
    return setData(data + 1);
  }

  function Dec() {
    if (data === 0) return;
    return setData(data - 1);
  }

  return (
    <>
      <h1>{data}</h1>
      <button onClick={Inc}>Increment</button>
      <button onClick={Dec}>Decrement</button>
    </>
  );
}

export default App;
