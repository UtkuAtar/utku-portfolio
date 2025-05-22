export default function Portfolio() {
  const projects = [
    {
      title: "Hesap Makinesi",
      description: "React kullanarak geliştirdiğim basit hesap makinesi uygulaması."
    },
    {
      title: "Hava Durumu Uygulaması",
      description: "Gerçek zamanlı hava durumu verilerini gösteren uygulama."
    },
    {
      title: "To-Do List",
      description: "Görev ekleme, tamamlama ve silme özellikli yapılacaklar uygulaması."
    }
  ];

  return (
<section className="text-dark py-5 w-100">
    <div className="container-fluid px-5">
      <h2 className="text-center mb-5 display-6 fw-bold border-bottom pb-2">Portfolyo</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
