import React from "react";
import {BrowserRouter as Router,Route,Routes}  from 'react-router-dom'
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import './css/bootstrap.min.css'


const App = ()=> {
  return (
    
    
    <Router>
      <Header />
      <main className="p-3">
        <Routes>
      <Route path="/home" element={<HomeScreen/>} exact/>
      <Route path="/product/:id" element={<ProductScreen/>} />
      </Routes>
        
      </main>
      <Footer />
      </Router>
    
  );
}

export default App;
