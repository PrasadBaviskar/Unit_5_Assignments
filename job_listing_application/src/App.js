// import logo from './logo.svg';
import { Route, Routes } from "react-router";
import "./App.css";
import { Homepage } from "./Components/Homepage";
import { Jobs } from "./Components/Jobs";
import { Login } from "./Components/Login";
import { Navbar } from "./Components/Navbar";
import { PrivateRoute } from "./Components/PrivateRouter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<PrivateRoute> <Jobs /> </PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;