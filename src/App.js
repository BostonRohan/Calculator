import React from "react";
import Pad from "./Pad";
import "./App.css";
function App() {
  const buttonData = [
    {
      id: "equals",
      innerText: "=",
    },
    {
      id: "zero",
      innerText: "0",
    },
    {
      id: "one",
      innerText: "1",
    },
    {
      id: "two",
      innerText: "2",
    },
    {
      id: "three",
      innerText: "3",
    },
    {
      id: "four",
      innerText: "4",
    },
    {
      id: "five",
      innerText: "5",
    },
    {
      id: "six",
      innerText: "6",
    },
    {
      id: "seven",
      innerText: "7",
    },
    {
      id: "eight",
      innerText: "8",
    },
    {
      id: "nine",
      innerText: "9",
    },
    {
      id: "add",
      innerText: "+",
    },
    {
      id: "subtract",
      innerText: "-",
    },
    {
      id: "multiply",
      innerText: "x",
    },
    {
      id: "divide",
      innerText: "/",
    },
    {
      id: "decimal",
      innerText: ".",
    },
    {
      id: "clear",
      innerText: "AC",
    },
  ];
  return (
    <div className="App">
      <Pad buttonData={buttonData} />
    </div>
  );
}
export default App;
