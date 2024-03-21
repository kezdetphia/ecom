import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <div className="App  ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
