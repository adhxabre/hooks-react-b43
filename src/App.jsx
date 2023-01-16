import React from "react";

function App() {
  function Greetings() {
    return alert("Pagi cuy")
  }

  return (
    <>
      <h1>Kalo ini di klik, ada message nya cuy</h1>
      <button onClick={Greetings}>Klik disini cuy</button>

      <h1>Kalo ini di klik, ada message nya cuy</h1>
      <button onClick={() => alert("Pagi cuy")}>Klik disini cuy</button>
    </>
  );
}

export default App;
