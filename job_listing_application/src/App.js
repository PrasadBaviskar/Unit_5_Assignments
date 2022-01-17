// import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import './App.css';
import { Homepage } from './Components/Homepage';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
