import React from "react";
import { FaGamepad, FaCode, FaGlobe } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      icon: <FaGamepad className="text-primary fs-3 me-3" />,
      title: "RPG Oyun",
      desc: "Python'ın pygame kütüphanesini kullanarak geliştirdiğim basit bir RPG oyun. Henüz geliştirme aşamasında."
    },
    {
      icon: <FaCode className="text-success fs-3 me-3" />,
      title: "Dosya Adı Değiştirme Uygulaması",
      desc: "C++ kullanarak yaptığım, belirli bir desene göre dosyaların toplu olarak adını değiştirebildiğim bir uygulama. Henüz geliştirme aşamasında."
    },
    {
      icon: <FaGlobe className="text-warning fs-3 me-3" />,
      title: "Portfolyo WEB Sitesi",
      desc: "Projelerimi ve kendimi tanıttığım, yeteneklerimi de içeren basit bir web sitesi. Tamamlandı."
    }
  ];

  return (
    <section className="bg-dark text-white py-5" style={{ minHeight: "100vh", marginLeft: "220px" }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Projelerim</h2>
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-lg-10 mb-4"
            >
              <div className="bg-light text-dark p-4 rounded-4 shadow-sm d-flex align-items-start hover-glow transition-all">
                {project.icon}
                <div>
                  <h5 className="fw-bold">{project.title}</h5>
                  <p className="mb-0">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
