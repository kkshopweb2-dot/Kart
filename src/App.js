import React from "react";
import Navbar from "./components/Navbar";
import FilterSidebar from "./components/FilterSidebar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="home-layout">
        <FilterSidebar />
        <main className="main-content">
          <h1 className="text-2xl font-bold">Products</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
