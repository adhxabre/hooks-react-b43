import React from "react";

import List from "./components/list";

function App() {
  const data = [1, 2, 3, 4];

  return (
    <>
      <List ListData={data} Chordata="felis catus" />
    </>
  );
}

export default App;
