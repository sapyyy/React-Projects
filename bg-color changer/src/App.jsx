import { useState } from "react";
import { Button } from "../components/Button";

function App() {
  const [bgColor, setBgColor] = useState("#FFFFFF");

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full h-screen p-15 justify-center flex items-end"
    >
      <Bar>
        <Button color="red" hash="#F50705" state={setBgColor}></Button>
        <Button color="yellow" hash="#bcb300" state={setBgColor}></Button>
        <Button color="black" hash="#444444" state={setBgColor}></Button>
        <Button color="purple" hash="#7F007B" state={setBgColor}></Button>
        <Button color="green" hash="#008200" state={setBgColor}></Button>
        <Button color="blue" hash="#0201FE" state={setBgColor}></Button>
        <Button color="default" hash="#FF5730" state={setBgColor}></Button>
      </Bar>
    </div>
  );
}

function Bar({ children }) {
  return (
    <div className="w-4/5 h-17 flex justify-around items-center rounded-2xl border-2 border-slate-800 overflow-hidden">
      {children}
    </div>
  );
}

export default App;
