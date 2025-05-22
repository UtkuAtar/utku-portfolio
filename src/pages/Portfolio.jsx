import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: 'RPG Oyun',
      description: "Python'ın pygame kütüphanesini kullanarak geliştirdiğim basit bir RPG oyun. Henüz geliştirme aşamasında.",
    },
    {
      title: 'Dosya Adı Değiştirme Uygulaması',
      description: 'C++ kullanarak yaptığım, belirli bir desene göre dosyaların toplu olarak adını değiştirebildiğim bir uygulama. Henüz geliştirme aşamasında.',
    },
    {
      title: 'Portfolyo WEB Sitesi',
      description: 'Projelerimi ve kendimi tanıttığım, yeteneklerimi de içeren basit bir web sitesi. Tamamlandı.',
    },
  ];

  return (
    <section
      className="text-white py-5"
      style={{ backgroundColor: '#6c757d', minHeight: '100vh', marginLeft: '220px' }}
    >
      <div className="container px-5">
        <h2 className="text-center fw-bold mb-5">Projelerim</h2>

        <div className="d-flex flex-column gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 shadow"
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                borderRadius: '12px',
              }}
            >
              <h5 className="fw-bold">{project.title}</h5>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
