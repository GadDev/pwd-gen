import "./App.css";

import { useState } from "react";

import { genPwd } from "./utils/genPwd";
function App() {
  const [value, setValue] = useState("");
  // const [length, setLength] = useState;

  const handleClick = () => {
    let pwd = genPwd(17);
    setValue(pwd);
  };

  return (
    <div className="App">
      <h1>MP-Password generator</h1>
      <div>
        <label htmlFor="password">
          <input type="text" value={value} placeholder="Create Password" />
        </label>
      </div>
      <button onClick={() => handleClick()}>Generate Password</button>
      <button onClick={() => setValue("")}>Reset</button>
    </div>
  );
}

export default App;
