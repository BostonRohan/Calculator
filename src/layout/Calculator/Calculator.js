import React from "react";
import Screen from "./Screen/Screen";
import Keypad from "./Keypad/Keypad";
import Toggle from "./Toggle/Toggle";
const calculator = () => (
  <main className="calculator">
    <Toggle />
    <Screen />
    <Keypad />
  </main>
);

export default calculator;
