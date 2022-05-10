import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import "./css/bootstrap.min.css";
import PromotionScreen from "./Screens/PromotionScreen";
import ScrollToTop from "./Components/ScrollToTop";
import CartScreen from "./Screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="p-3">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />

            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart">
              <Route index element={<CartScreen />} />
              <Route path=":id" element={<CartScreen />} />
            </Route>
            <Route path="/promotions" element={<PromotionScreen />} />
          </Routes>
        </ScrollToTop>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
