import { Link } from "react-router-dom";
import profilePic from "../assets/profile.jpg"; // 🖼️ Kendi fotoğrafını bu dizine ekle

export default function Sidebar() {
  return (
    <div
      className="bg-dark text-white d-flex flex-column align-items-center py-4 px-2 position-fixed"
      style={{ width: "220px", height: "100vh" }}
    >
      <img
        src={profilePic}
        alt="Profil"
        className="rounded-circle mb-3"
        style={{ width: "120px", height: "120px", objectFit: "cover" }}
      />
      <h5 className="text-center mb-4">Utku Atar</h5>
      <nav className="d-flex flex-column gap-4 text-center w-100">
        <Link to="/" className="text-white text-decoration-none fw-bold">Ana Sayfa</Link>
        <Link to="/about" className="text-white text-decoration-none fw-bold">Ben Kimim?</Link>
        <Link to="/skills" className="text-white text-decoration-none fw-bold">Yetenekler</Link>
        <Link to="/portfolio" className="text-white text-decoration-none fw-bold">Portfolyo</Link>
        <Link to="/contact" className="text-white text-decoration-none fw-bold">İletişim</Link>
      </nav>
    </div>
  );
}
