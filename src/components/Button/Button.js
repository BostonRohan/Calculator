import React from "react";

const button = (props) => (
  <button className="btn" id={props.id} onClick={props.handleClick}>
    {props.children}
  </button>
);
export default button;
