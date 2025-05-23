import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column flex-md-row min-vh-100">
        
       
        <div className="d-none d-md-block">
          <Sidebar />
        </div>

       
        <div className="d-md-none bg-dark text-white text-center py-3 shadow">
          <h5 className="m-0">Utku Atar</h5>
        </div>

        
        <div className="flex-grow-1 d-flex flex-column">
          <main className="flex-grow-1 p-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

         
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
