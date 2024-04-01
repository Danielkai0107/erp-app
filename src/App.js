import React from "react";
import Navbar from "./components/Navbar";
import BuyPage from "./pages/BuyPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestockPage from "./pages/RestockPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BuyPage />} />
        <Route path="/Restock" element={<RestockPage />} />
      </Routes>
    </Router>
  );
};

export default App;
