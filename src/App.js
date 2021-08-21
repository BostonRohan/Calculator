import { React, useState, useRef } from "react";
import {
  otherButtonData,
  numButtonData,
  operationButtonData,
} from "./buttondata";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("0");
  const [operation, setOperation] = useState(undefined);
  const previous = useRef(expression);
  const handleClick = (e) => {
    const { innerText } = e.target;
    console.log(innerText);

    if (!Number.isNaN(Number(innerText))) {
      if (expression === "0") {
        setExpression(innerText);
      } else {
        setExpression(expression + innerText);
      }
      return;
    }
    switch (innerText) {
      case "AC":
        setExpression("0");
        previous.current = undefined;
        break;
      case ".":
        if (!expression.includes(".")) {
          setExpression(expression + innerText);
        }
        break;
    }
  };
  return (
    <div className="App">
      <div id="display">{expression}</div>
      <div className="buttons">
        {otherButtonData.map((button) => (
          <button id={button.id} key={button.id} onClick={handleClick}>
            {button.innerText}
          </button>
        ))}
        {numButtonData.map((button) => (
          <button id={button.id} key={button.id} onClick={handleClick}>
            {button.innerText}
          </button>
        ))}
        {operationButtonData.map((button) => (
          <button id={button.id} key={button.id} onClick={handleClick}>
            {button.innerText}
          </button>
        ))}
      </div>
    </div>
  );
}
export default App;
