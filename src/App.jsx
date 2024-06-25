/* eslint-disable no-unused-vars */
import React from "react";
import "./css/app.css";
import Currency from "./components/currency";
function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        flexDirection: "column",
      }}
    >
      <Currency />
    </div>
  );
}

export default App;
