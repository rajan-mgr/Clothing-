import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Men from "./pages/Men.jsx"
import Women from "./pages/Women.jsx";
import Explore from "./pages/Explore.jsx"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/men" element={<Men/>}/> 
          <Route path="/women" element={<Women/>}/> 
          <Route path="/explore" element={<Explore/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
