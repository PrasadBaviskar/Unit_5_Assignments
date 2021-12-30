import "./App.css";
import { Timer } from "./Components/Timer";

function App() {
  return (
    <div className="App">
      <Timer start={0} end={10}/>
    </div>
  );
}

export default App;
