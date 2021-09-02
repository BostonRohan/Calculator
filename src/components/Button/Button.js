import React from "react";

const Button = (props) => (
  <button className="btn" id={props.id} onClick={props.handleClick}>
    {props.children}
  </button>
);
export default Button;
