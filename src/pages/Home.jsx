import backgroundImage from "../assets/background.jpg";

export default function Home() {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        marginLeft: "220px",
      }}
      className="d-flex flex-column justify-content-center align-items-center text-center"
    >
      <h1 className="display-4 fw-bold">Utku Atar</h1>
      <p className="lead">
        Full Stack Geliştirici • SwiftUI ile modern iOS uygulama geliştirme • WEB geliştirme
      </p>
      <a href="/contact" className="btn btn-primary btn-lg my-3">
        İletişim İçin Tıkla!
      </a>
      <div className="d-flex gap-3 fs-4">
        <a
          href="https://github.com/UtkuAtar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://linkedin.com/Utku-Atar"
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
  );
}
