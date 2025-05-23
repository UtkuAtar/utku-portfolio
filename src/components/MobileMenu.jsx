import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="d-md-none bg-dark text-white px-3 py-2 d-flex justify-content-between align-items-center shadow-sm">
        <h5 className="mb-0">Utku Atar</h5>
        <button
          className="btn btn-outline-light"
          onClick={toggleMenu}
          aria-label="Menüyü Aç"
        >
          ☰
        </button>
      </div>

      {open && (
        <div
          className="position-fixed top-0 start-0 bg-dark text-white w-75 h-100 shadow"
          style={{ zIndex: 1050 }}
        >
          <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
            <h5 className="mb-0">Menü</h5>
            <button className="btn-close btn-close-white" onClick={closeMenu}></button>
          </div>

          <nav className="d-flex flex-column p-3 gap-3">
            <Link to="/" className="text-white text-decoration-none fw-bold" onClick={closeMenu}>Ana Sayfa</Link>
            <Link to="/about" className="text-white text-decoration-none fw-bold" onClick={closeMenu}>Hakkımda</Link>
            <Link to="/skills" className="text-white text-decoration-none fw-bold" onClick={closeMenu}>Yeteneklerim</Link>
            <Link to="/portfolio" className="text-white text-decoration-none fw-bold" onClick={closeMenu}>Projelerim</Link>
            <Link to="/contact" className="text-white text-decoration-none fw-bold" onClick={closeMenu}>İletişim</Link>
          </nav>
        </div>
      )}
    </>
  );
}
