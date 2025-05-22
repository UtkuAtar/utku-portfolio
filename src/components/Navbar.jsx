import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Utku Portfolio</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Ana Sayfa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Ben Kimim?</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">Yetenekler</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolyo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">İletişim</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
