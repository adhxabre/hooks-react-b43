import React, { useReducer } from "react";

let counter = 0;

export default function VarFunc() {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const Inc = () => {
    counter = counter + 1;
    forceUpdate();
  };

  const Dec = () => {
    counter = counter - 1;
    forceUpdate();
  };

  console.log(counter);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={Inc}>Inc</button>
      <button onClick={Dec}>Dec</button>
    </>
  );
}
