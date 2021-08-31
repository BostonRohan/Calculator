import { React, useEffect } from "react";
import "./styles/App.css";
import Calculator from "./layout/Calculator/Calculator";
import { keepTheme } from "./components/Toggle/themes";
function App() {
  useEffect(() => {
    keepTheme();
  });
  return (
    <div className="App">
      <Calculator />
      <footer className="credit">Created by Boston Rohan</footer>
    </div>
  );
}
export default App;
