import logo from "./logo.svg";

import "./App.css";
import { Timer } from "./Components/Timer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer start={0} end={10} />
      </header>
    </div>
  );
}

export default App;
