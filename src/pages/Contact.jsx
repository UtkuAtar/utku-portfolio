import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaInstagram } from 'react-icons/fa';
import MobileMenu from '../components/MobileMenu';

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <MobileMenu />
      <section
        className="text-white py-5"
        style={{
          backgroundColor: '#6c757d',
          marginLeft: isMobile ? '0px' : '220px',
          paddingLeft: '15px',
          paddingRight: '15px',
          minHeight: '100vh',
        }}
      >
        <div className="container px-2 px-md-5">
          <h2 className="text-center fw-bold mb-5">İletişim</h2>

          <div
            className="card mb-4 p-4 shadow text-white"
            style={{ backgroundColor: '#212529', borderRadius: '10px' }}
          >
            <h4 className="fw-bold mb-3">Kişisel Bilgiler</h4>
            <p><FaEnvelope className="me-2" /> atarutku1@gmail.com</p>
            <p><FaPhone className="me-2" /> +90 541 914 05 86</p>
            <p>
              <FaGithub className="me-2" />
              <a
                href="https://github.com/UtkuAtar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                github.com/UtkuAtar
              </a>
            </p>
            <p>
              <FaInstagram className="me-2" />
              <a
                href="https://instagram.com/utkuuatar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                instagram.com/utkuuatar
              </a>
            </p>
          </div>

          <div
            className="card p-4 shadow text-white"
            style={{ backgroundColor: '#212529', borderRadius: '10px' }}
          >
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">Adınız</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Adınızı girin"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">E-posta</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="E-posta adresinizi girin"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">Mesajınız</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Mesajınızı yazın"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
