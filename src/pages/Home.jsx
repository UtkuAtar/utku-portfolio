import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // React Router Link
import backgroundImage from "../assets/background.jpg";
import MobileMenu from "../components/MobileMenu";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <MobileMenu />
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          marginLeft: isMobile ? "0px" : "220px",
          padding: "0 15px",
          color: "white"
        }}
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <h1 className="display-5 fw-bold">Utku Atar</h1>

        <p className="lead px-2 px-md-5">
          Full Stack Geliştirici • SwiftUI ile modern iOS uygulama geliştirme • WEB geliştirme
        </p>

        <Link to="/contact" className="btn btn-primary btn-lg my-3 w-100 w-md-auto">
          İletişim İçin Tıkla!
        </Link>

        <div className="d-flex gap-4 fs-4 flex-wrap justify-content-center mt-3">
          <a
            href="https://github.com/UtkuAtar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/utku-atar-00696a254/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://instagram.com/utkuuatar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </section>
    </>
  );
}
