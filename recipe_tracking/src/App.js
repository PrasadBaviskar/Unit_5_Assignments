// import logo from "./logo.svg";
import "./App.css";
import { AddReceipe } from "./Components/AddReceipe";
import { Receipes } from "./Components/Receipies";
import { Details } from "./Components/Details";

function App() {
  return (
    <div className="App">
      <AddReceipe />
      <Receipes />
      <Details />
    </div>
  );
}

export default App;
