// import logo from "./logo.svg";
import "./App.css";
import { AddReceipe } from "./Components/AddReceipe";
import { Receipes } from "./Components/Receipies";
import { Details } from "./Components/Details";
import { useState } from "react";

function App() {
  const [details, setDetails] = useState({});

  const showData = (r_data) => {
    setDetails(r_data);
  };

  return (
    <div className="App">
      <AddReceipe />
      <Receipes />
      <Details getdata={showData} details={details}/>
    </div>
  );
}

export default App;
