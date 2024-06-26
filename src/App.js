import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <div className="App  ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
