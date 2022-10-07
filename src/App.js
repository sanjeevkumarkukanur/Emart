import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/product/:id" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
