import { React, useState } from "react";
import calculate from "./calculate";
function Display({ text }) {
  console.log(text);
  //   const calculate = () => {
  //     var operation = secondOperand[secondOperand.length - 1];
  //     var temp1 = parseInt(firstOperand.join("")),
  //       temp2 = parseInt(secondOperand.join(""));
  //     switch (operation) {
  //       case "+":
  //         setEquals(temp2 + temp1);
  //         break;
  //       case "-":
  //         setEquals(temp2 - temp1);
  //         break;
  //       case "x":
  //         setEquals(temp2 * temp1);
  //         break;
  //       case "/":
  //         setEquals(temp2 / temp1);
  //         break;
  //       default:
  //         setEquals(0);
  //     }
  //   };
  //   const handleClick = (e) => {
  //     var newItem = "";
  //     if (e.target.id === "clear") {
  //       setFirstOperand([]);
  //       setEquals("");
  //     } else if (
  //       e.target.id === "add" ||
  //       e.target.id === "subtract" ||
  //       e.target.id === "divide" ||
  //       e.target.id === "multiply"
  //     ) {
  //       setSecondOperand([...firstOperand, e.target.innerText]);
  //       setFirstOperand([]);
  //     } else if (e.target.id === "equals") {
  //       calculate();
  //       setFirstOperand([""]);
  //       setEquals(calculate);
  //     } else {
  //       for (var i = 0; i < buttons.length; i++) {
  //         if (e.target.id === buttons[i].props.id) {
  //           newItem = buttons[i].props.children;
  //         }
  //       }
  //       setFirstOperand([...firstOperand, newItem]);
  //     }
  //   };
  return <div id="display">{text}</div>;
}
export default Display;
