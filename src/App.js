import React from "react";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

function Content() {
  return (
    <>
      <h1>This is a content</h1>
      <button>Click Me</button>
    </>
  );
}

export default App;
