import { React, useState, useEffect } from "react";
import { setTheme } from "./themes";
function Toggle() {
  const [togClass, setTogClass] = useState("dark");
  let theme = localStorage.getItem("theme");
  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);
  return (
    <div className="toggle">
      {togClass === "light" ? (
        <label className="switch">
          <input type="checkbox" onClick={handleOnClick} checked />
          <span className="slider round" />
        </label>
      ) : (
        <label className="switch">
          <input type="checkbox" onClick={handleOnClick} />
          <span className="slider round" />
        </label>
      )}
    </div>
  );
}
export default Toggle;
