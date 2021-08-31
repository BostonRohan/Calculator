import React from "react";
import KeypadRow from "./KeypadRow/KeypadRow";
import Button from "../../../components/Button/Button";

const keypad = (props) => (
  <section className="keypad">
    <KeypadRow>
      <Button handleClick={props.handleClick} id="clear">
        AC
      </Button>
      <Button handleClick={props.handleClick} id="plus-minus">
        ±
      </Button>
      <Button handleClick={props.handleClick} id="percent">
        %
      </Button>
      <Button handleClick={props.handleClick} id="divide">
        /
      </Button>
    </KeypadRow>
    <KeypadRow>
      <Button handleClick={props.handleClick} id="seven">
        7
      </Button>
      <Button handleClick={props.handleClick} id="eight">
        8
      </Button>
      <Button handleClick={props.handleClick} id="nine">
        9
      </Button>
      <Button handleClick={props.handleClick} id="multiply">
        *
      </Button>
    </KeypadRow>
    <KeypadRow>
      <Button handleClick={props.handleClick} id="four">
        4
      </Button>
      <Button handleClick={props.handleClick} id="five">
        5
      </Button>
      <Button handleClick={props.handleClick} id="six">
        6
      </Button>
      <Button handleClick={props.handleClick} id="subtract">
        -
      </Button>
    </KeypadRow>
    <KeypadRow>
      <Button handleClick={props.handleClick} id="one">
        1
      </Button>
      <Button handleClick={props.handleClick} id="two">
        2
      </Button>
      <Button handleClick={props.handleClick} id="three">
        3
      </Button>
      <Button handleClick={props.handleClick} id="add">
        +
      </Button>
    </KeypadRow>
    <KeypadRow>
      <Button handleClick={props.handleClick} id="zero">
        0
      </Button>
      <Button handleClick={props.handleClick} id="decimal">
        .
      </Button>
      <Button handleClick={props.handleClick} id="equals">
        =
      </Button>
    </KeypadRow>
  </section>
);
export default keypad;
