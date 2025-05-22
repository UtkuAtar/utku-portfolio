export default function Contact() {
  return (
    <section className="text-dark py-5 w-100">
      <div className="container-fluid px-5">
        <h2 className="text-center mb-5 display-6 fw-bold border-bottom pb-2">İletişim</h2>

        {/* Butonlar */}
        <div className="d-flex flex-column align-items-center gap-3">
          <a
            href="https://instagram.com/utkuuatar" 
            target="_blank"
            className="btn btn-outline-primary btn-lg w-auto"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://github.com/UtkuAtar" 
            target="_blank"
            className="btn btn-dark btn-lg w-auto"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
