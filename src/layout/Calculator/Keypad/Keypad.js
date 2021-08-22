import React from "react";
import KeypadRow from "./KeypadRow/KeypadRow";
import Button from "../../../components/Button/Button";

const keypad = () => (
  <section className="keypad">
    <KeypadRow>
      <Button id="clear">AC</Button>
      <Button id="plus-minus">+/-</Button>
      <Button id="percent">%</Button>
      <Button id="divide">/</Button>
    </KeypadRow>
    <KeypadRow>
      <Button id="seven">7</Button>
      <Button id="eight">8</Button>
      <Button id="nine">9</Button>
      <Button id="multiply">x</Button>
    </KeypadRow>
    <KeypadRow>
      <Button id="four">4</Button>
      <Button id="five">5</Button>
      <Button id="six">6</Button>
      <Button id="subtract">-</Button>
    </KeypadRow>
    <KeypadRow>
      <Button id="one">1</Button>
      <Button id="two">2</Button>
      <Button id="three">3</Button>
      <Button id="add">+</Button>
    </KeypadRow>
    <KeypadRow>
      <Button id="zero">0</Button>
      <Button id="decimal">.</Button>
      <Button id="equals">=</Button>
    </KeypadRow>
  </section>
);
export default keypad;
