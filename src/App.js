import React from "react";
import CricketProvider from "./Context/CricketProvider";
import Hello from "./Components/Hello"

function App() {
  return (
    <CricketProvider>
      <Hello/>
    </CricketProvider>
  );
}

export default App;
