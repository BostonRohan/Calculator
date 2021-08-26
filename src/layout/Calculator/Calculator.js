import { React, useState } from "react";
import Screen from "./Screen/Screen";
import Keypad from "./Keypad/Keypad";
import Toggle from "../../components/Toggle/Toggle";
function Calculator() {
  const [currentState, setCurrentState] = useState({
    expression: "",
    display: "",
    operation: "",
  });
  const handleClick = (e) => {
    console.log(currentState.expression);
    const pressed = e.target.innerHTML;
    const ops = ["+", "-", "*", "/", "%", "0", "."];
    if (ops.includes(pressed) && currentState.expression === "") {
      return;
    } else if (
      currentState.expression &&
      currentState.expression.indexOf(".") === 1 &&
      pressed === "."
    ) {
      pressed.replace(/[.]/, "");
    } else {
      if (pressed === "AC") {
        setCurrentState({
          expression: "",
          display: "",
          result: 0,
        });
      } else if ((pressed >= "0" && pressed <= "9") || pressed === ".") {
        setCurrentState({
          expression: (currentState.expression += pressed),
          display: (currentState.display += pressed),
        });
      } else if (ops.indexOf(pressed) !== -1)
        setCurrentState({
          expression: (currentState.expression += " " + pressed + " "),
          display: "",
        });
      else if (pressed === "=" && currentState.expression) {
        var repeat = false;
        console.log(repeat);
        for (var i = 0; i < currentState.expression.length; i++) {
          if (
            currentState.expression[i] === "+" ||
            currentState.expression[i] === "-" ||
            currentState.expression[i] === "*" ||
            (currentState.expression[i + 1] === "/" &&
              currentState.expression[i + 1] === "+") ||
            currentState.expression[i + 1] === "-" ||
            currentState.expression[i + 1] === "/" ||
            currentState.expression[i + 1] === "*"
          ) {
            repeat = true;
          }
        }
        if (repeat) {
          setCurrentState({
            expression:
              currentState.expression[0] +
              "" +
              currentState.expression[currentState.expression.length - 3] +
              "" +
              currentState.expression[currentState.expression.length - 1],
          });
        }
        const evalResult = eval(currentState.expression);
        const result = Number.isInteger(evalResult)
          ? evalResult
          : evalResult.toFixed(1);
        setCurrentState({
          display: result,
        });
      }
    }
  };
  return (
    <main className="calculator">
      <Toggle />
      <Screen display={currentState.display} />
      <Keypad handleClick={handleClick} />
    </main>
  );
}
export default Calculator;
