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
    } else if (currentState.expression[1] === "." && pressed === ".") {
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
      } else if (ops.indexOf(pressed) !== -1) {
        setCurrentState({
          expression: (currentState.expression += " " + pressed + " "),
          display: "",
        });
        if (currentState.expression === "5 *  -  + ") {
          setCurrentState({
            expression: `5 ${pressed}`,
          });
        }
      } else if (pressed === "=" && currentState.expression) {
        const evalResult = eval(currentState.expression);
        setCurrentState({
          display: evalResult,
          expression: evalResult,
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
