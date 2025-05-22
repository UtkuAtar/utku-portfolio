import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      {/* Tüm ekranı kaplayan yapı */}
      <div className="d-flex min-vh-100">
        {/* Sabit sol menü */}
        <Sidebar />

        {/* Sağ taraf: içerik + footer */}
        <div
          className="flex-grow-1 d-flex flex-column"
          style={{ marginLeft: "220px" }} // Sidebar genişliğiyle eşit
        >
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer her zaman sayfanın altında kalır */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}
