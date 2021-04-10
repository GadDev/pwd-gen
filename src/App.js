import "./App.css";

import { useState } from "react";

import { genPwd } from "./utils/genPwd";
function App() {
  const [value, setValue] = useState("");
  const [pwdStrength, setPwdStrength] = useState("16");

  const handleClick = () => {
    let pwd = genPwd(pwdStrength);
    setValue(pwd);
  };

  return (
    <div className="App">
      <header>
        <h1>MP-Password generator</h1>
      </header>
      <main>
        <section>
          <div>
            <label htmlFor="pwd-strength">
              Set the password length
              <input
                id="pwd-strength"
                type="number"
                value={pwdStrength}
                onChange={(e) => setPwdStrength(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input type="text" value={value} placeholder="Create Password" />
            </label>
          </div>
          <button onClick={() => handleClick()}>Generate Password</button>
          <button onClick={() => setValue("")}>Reset</button>
        </section>
      </main>
    </div>
  );
}

export default App;
