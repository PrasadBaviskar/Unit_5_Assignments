import "./App.css";
import { Navbar } from "./components/Navbar";
import { UserStatus } from "./components/UserStatus";
function App() {
  return (
    <div className="App">
      <Navbar />
      <UserStatus />
      {/* <h1>App</h1> */}
    </div>
  );
}

export default App;
