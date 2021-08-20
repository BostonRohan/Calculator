import { React, useState } from "react";
function Pad({ numButtons, operationButtons }) {
  const [expression, setExpression] = useState("");
  const calculate = () => {
    setExpression(eval(expression));
  };
  const display = (symbol) => {
    if (/^0{2,}/.test(expression) || symbol === "AC") {
      setExpression("");
    } else if (symbol === "=") {
      calculate(expression);
    } else {
      setExpression((prev) => prev + symbol);
    }
  };
  const displayOperationButtons = operationButtons.map((button) => {
    return (
      <button
        id={button.id}
        key={button.id}
        onClick={() => display(button.innerText)}
      >
        {button.innerText}
      </button>
    );
  });
  const displayNumButtons = numButtons.map((button) => {
    return (
      <button
        id={button.id}
        key={button.id}
        onClick={() => display(button.innerText)}
      >
        {button.innerText}
      </button>
    );
  });
  return (
    <div>
      <div id="display">{expression || "0"}</div>
      {displayNumButtons}
      {displayOperationButtons}
    </div>
  );
}
export default Pad;
