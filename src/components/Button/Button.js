import React from "react";

const button = (props) => (
  <button className="btn" id={props.id}>
    {props.children}
  </button>
);
export default button;
