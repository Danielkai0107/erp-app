import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BuyAddPage from "./pages/Buy/BuyAddPage";
import BuySearchPage from "./pages/Buy/BuySearchPage";
import BuyDetailPage from "./pages/Buy/BuyDetailPage";
import RestockAddPage from "./pages/Restock/RestockAddPage";
import RestockSearchPage from "./pages/Restock/RestockSearchPage";
import RestockDetailPage from "./pages/Restock/RestockDetailPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/BuyAddPage" element={<BuyAddPage />} />
        <Route path="/BuySearchPage" element={<BuySearchPage />} />
        <Route path="/BuyDetailPage" element={<BuyDetailPage />} />
        <Route path="/RestockAddPage" element={<RestockAddPage />} />
        <Route path="/RestockSearchPage" element={<RestockSearchPage />} />
        <Route path="/RestockDetailPage" element={<RestockDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
