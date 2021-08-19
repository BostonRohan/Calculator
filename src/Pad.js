import { React, useState } from "react";
import Display from "./Display";
import calculate from "./calculate.js";
function Pad({ buttonData }) {
  const [changeDisplay, setChangeDisplay] = useState([]);
  const handleClick = (e) => {
    if (e.target.innerText === "AC") {
      setChangeDisplay("");
    } else if (
      e.target.innerText === "+" ||
      e.target.innerText === "-" ||
      e.target.innerText === "/" ||
      e.target.innerText === "x"
    ) {
      calculate(changeDisplay);
    } else {
      setChangeDisplay([...changeDisplay, e.target.innerText]);
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
      <Display text={changeDisplay.length > 0 ? changeDisplay : "0"} />
      {buttons}
    </div>
  );
}
export default Pad;
