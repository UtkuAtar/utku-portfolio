export default function Skills() {
  const skills = [
    { name: "HTML"},
    { name: "CSS",},
    { name: "JavaScript"},
    { name: "React",},
    { name: "Swift"},
  ];

  return (
    <section className="bg-light text-dark py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-6 fw-bold border-bottom pb-2">Yeteneklerim</h2>
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-6 col-md-3 text-center" key={index}>
              <div className="card shadow-sm p-3">
                <div className="fs-1 mb-2">{skill.icon}</div>
                <h5 className="card-title">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
