import React from "react";

function getMajor() {
  return "fullstack";
}

const companyName = "Dumbways.id";

function App() {
  return (
    <>
      <p>
        Welcome to {getMajor()} class at {companyName}
      </p>
    </>
  );
}

export default App;
