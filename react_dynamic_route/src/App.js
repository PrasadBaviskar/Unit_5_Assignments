import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { AllProducts } from "./components/AllProducts";
import { ProductDetails } from "./components/ProductDetails";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/allProducts/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
