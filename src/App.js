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
    </div>
  );
}
export default App;
