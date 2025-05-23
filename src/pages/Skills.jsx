import React, { useEffect, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase } from 'react-icons/fa';
import { SiSwift } from 'react-icons/si';

const skills = [
  { name: 'SwiftUI', icon: <SiSwift size={40} />, level: 75 },
  { name: 'HTML', icon: <FaHtml5 size={40} />, level: 75 },
  { name: 'CSS', icon: <FaCss3Alt size={40} />, level: 75 },
  { name: 'JavaScript', icon: <FaJs size={40} />, level: 80 },
  { name: 'React', icon: <FaReact size={40} />, level: 75 },
  { name: 'C#', icon: null, level: 50 },
  { name: 'C++', icon: null, level: 50 },
  { name: 'SQL', icon: <FaDatabase size={40} />, level: 35 },
  { name: 'Python', icon: <FaPython size={40} />, level: 50 },
];

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="bg-dark text-white min-vh-100"
      style={{
        marginLeft: isMobile ? '0px' : '220px',
        paddingLeft: '15px',
        paddingRight: '15px',
      }}
    >
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4 border-bottom pb-2">Yeteneklerim</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col">
              <div
                className="card text-center h-100 border-0 shadow-sm p-4"
                style={{ backgroundColor: '#4e5a65', borderRadius: '12px' }}
              >
                <div className="mb-2" style={{ height: '40px' }}>
                  {skill.icon}
                </div>
                <h5 className="fw-bold mb-3">{skill.name}</h5>
                <div className="progress" style={{ height: '10px' }}>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-2">{skill.level}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
