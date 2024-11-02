import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SelectedProduct from "./components/SelectedProduct";
import Carousel from "./components/Carousel";
import Pagination from "./components/Pagination";
import BilingForm from "./components/BilingForm";
// At the top of src/App.js
import TagManager from "react-gtm-module";

const App = () => {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-W37VFBVB",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="selectedproduct" element={<SelectedProduct />} />
          <Route path="bilingform" element={<BilingForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
