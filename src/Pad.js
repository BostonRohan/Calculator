import { useState } from "react";
function Pad() {
  const [firstOperand, setFirstOperand] = useState([]);
  const [secondOperand, setSecondOperand] = useState([]);
  const [equals, setEquals] = useState();
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
  const calculate = () => {
    var operation = secondOperand[secondOperand.length - 1];
    var temp1 = parseInt(firstOperand.join("")),
      temp2 = parseInt(secondOperand.join(""));
    switch (operation) {
      case "+":
        setEquals(temp2 + temp1);
        break;
      case "-":
        setEquals(temp2 - temp1);
        break;
      case "x":
        setEquals(temp2 * temp1);
        break;
      case "/":
        setEquals(temp2 / temp1);
        break;
      default:
        setEquals(0);
    }
  };
  const handleClick = (e) => {
    var newItem = "";
    if (e.target.id === "clear") {
      setFirstOperand([]);
      setEquals("");
    } else if (
      e.target.id === "add" ||
      e.target.id === "subtract" ||
      e.target.id === "divide" ||
      e.target.id === "multiply"
    ) {
      setSecondOperand([...firstOperand, e.target.innerText]);
      setFirstOperand([]);
    } else if (e.target.id === "equals") {
      calculate();
      setFirstOperand([""]);
      setEquals(calculate);
    } else {
      for (var i = 0; i < buttons.length; i++) {
        if (e.target.id === buttons[i].props.id) {
          newItem = buttons[i].props.children;
        }
      }
      setFirstOperand([...firstOperand, newItem]);
    }
  };
  const buttons = buttonData.map((button) => {
    return (
      <button id={button.id} key={button.id} onClick={handleClick}>
        {button.innerText}
      </button>
    );
  });
  return (
    <div id="calculator">
      <div id="display">
        {firstOperand.length < 1 ? "0" : firstOperand}
        {equals}
      </div>
      <div>{buttons}</div>
    </div>
  );
}
export default Pad;
