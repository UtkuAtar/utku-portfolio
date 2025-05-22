import { Link } from "react-router-dom";
import profilePic from "../assets/profile.jpg";

export default function Sidebar() {
  return (
    <div
      className="bg-dark text-white d-flex flex-column align-items-center py-4 px-2 position-fixed"
      style={{
        width: "220px",
        height: "100vh",
        borderRight: "2px solid #2b2f33"
      }}
    >
      <img
        src={profilePic}
        alt="Profil"
        className="rounded-circle mb-3"
        style={{ width: "120px", height: "120px", objectFit: "cover" }}
      />
      <h5 className="text-center mb-4 fw-bold">Utku Atar</h5>

      <nav className="d-flex flex-column gap-4 w-100">
        <Link
          to="/"
          className="text-white text-decoration-none fw-bold d-flex align-items-center"
        >
          <span style={{ color: "#0d6efd", marginRight: "10px" }}>➜</span> Ana Sayfa
        </Link>
        <Link
          to="/about"
          className="text-white text-decoration-none fw-bold d-flex align-items-center"
        >
          <span style={{ color: "#0d6efd", marginRight: "10px" }}>➜</span> Hakkımda
        </Link>
        <Link
          to="/skills"
          className="text-white text-decoration-none fw-bold d-flex align-items-center"
        >
          <span style={{ color: "#0d6efd", marginRight: "10px" }}>➜</span> Yeteneklerim
        </Link>
        <Link
          to="/portfolio"
          className="text-white text-decoration-none fw-bold d-flex align-items-center"
        >
          <span style={{ color: "#0d6efd", marginRight: "10px" }}>➜</span> Projelerim
        </Link>
        <Link
          to="/contact"
          className="text-white text-decoration-none fw-bold d-flex align-items-center"
        >
          <span style={{ color: "#0d6efd", marginRight: "10px" }}>➜</span> İletişim
        </Link>
      </nav>
    </div>
  );
}
