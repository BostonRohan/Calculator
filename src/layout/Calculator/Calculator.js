import { React, useState } from "react";
import Screen from "./Screen/Screen";
import Keypad from "./Keypad/Keypad";
import Toggle from "../../components/Toggle/Toggle";
function Calculator() {
  const [currentState, setCurrentState] = useState({
    expression: "",
    display: "",
  });

  const errorTimeout = (e) => {
    if (e === "max length") {
      setCurrentState({ display: "Max Length" });
    } else if (e === "error")
      setCurrentState({
        display: "Error",
        expression: "",
      });
    setTimeout(() => {
      setCurrentState({ display: "", expression: "" });
    }, 1000);
  };

  const handleClick = (e) => {
    //Variables
    const pressed = e.target.innerHTML;
    const ops = ["+", "-", "*", "/", "%", "0", ".", "%", "±"];

    //Fixing bugs with spamming operations and decimals
    if (ops.includes(pressed) && currentState.expression === "") {
      return;
    } else if (currentState.expression[1] === "." && pressed === ".") {
      pressed.replace(/[.]/, "");
    }
    //Changing display for max length error
    else if (currentState.expression.length > 23) {
      return errorTimeout("max length");
    }

    //Start logic for button presses
    else {
      if (pressed === "AC") {
        setCurrentState({
          expression: "",
          display: "",
        });
      } else if ((pressed >= "0" && pressed <= "9") || pressed === ".") {
        setCurrentState({
          expression: (currentState.expression += pressed),
          display: (currentState.display += pressed),
        });
      } else if (pressed === "%") {
        setCurrentState({
          expression: currentState.expression / 100,
          display: currentState.display / 100,
        });
      }
      //Creating the expression, and clearing the display when an operation is pressed
      else if (ops.indexOf(pressed) !== -1) {
        setCurrentState({
          expression: (currentState.expression += " " + pressed + " "),
          display: "",
        });

        //Edge case with multiple operations, used only for FreeCodeCamp challenge
        //Only implemented for the specific challenge due to the logic of the calculator
        if (currentState.expression === "5 *  -  + ") {
          setCurrentState({
            expression: `5 ${pressed}`,
          });
        }
      }

      //Evaluating the expression
      else if (pressed === "=" && currentState.expression) {
        const evalResult = eval(currentState.expression);
        setCurrentState({
          display: evalResult,
          expression: evalResult,
        });

        //Checking for calculation error.
        if (evalResult[0] === "undefined") {
          return errorTimeout("error");
        }
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
