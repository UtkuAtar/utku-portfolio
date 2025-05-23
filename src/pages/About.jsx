import React, { useEffect, useState } from "react";
import {
  FaUserAlt,
  FaGraduationCap,
  FaSchool,
  FaUniversity,
  FaLanguage,
  FaGlobeEurope
} from "react-icons/fa";
import MobileMenu from "../components/MobileMenu";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <MobileMenu />
      <section
        className="bg-dark text-white py-5"
        style={{
          minHeight: "100vh",
          marginLeft: isMobile ? "0px" : "220px",
          paddingLeft: "15px",
          paddingRight: "15px"
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-10">
              <div className="card bg-secondary text-light shadow-lg border-0 p-4 rounded-4">
                <div className="d-flex align-items-start mb-3 flex-wrap">
                  <FaUserAlt size={32} className="me-3 mt-1 text-primary" />
                  <h2 className="fw-bold">Hakkımda</h2>
                </div>

                <p>
                  Merhaba! Ben Utku Atar. 21 yaşındayım.
                  Balıkesir Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. Bölüme 2022'de girdim.
                  WEB Geliştirme, Veritabanı Yönetimi ve Mobil Uygulama Geliştirme alanlarına ilgi duyuyorum.
                  HTML, CSS, JavaScript, C#, C++, SwiftUI, SQL gibi alanlarda orta seviye bilgi sahibiyim.
                  Bunlar haricinde spor yapmayı seviyorum. Lisanslı olarak karate ve futbol müsabakalarına katıldım.
                  Hobi olarak ise basketbol, yüzme, müzik prodüksiyonu alanlarına ilgiliyim.
                </p>

                <p>
                  Önceden Frontend teknolojileri (HTML, CSS, JavaScript, React, Bootstrap) ile arayüz geliştirme üzerine
                  yoğunlaşsam da bu aralar SwiftUI ile mobil uygulama geliştirme üzerine yoğunlaştım.
                  Bu portfolyo sitesi ise genel olarak beni tanıtmak ve yazılım alanındaki projelerimi sunmak amacıyla yaptığım bir websitedir.
                </p>

                <p>
                  Takım çalışmasına uyumluyum, kendimi geliştirmeye ve yeni şeyler öğrenmeye açığım.
                  Daha fazlası için <a href="/contact" className="text-decoration-none text-info fw-bold">iletişim</a> bölümünden bana ulaşabilirsiniz.
                </p>


                <hr className="text-light my-4" />
                <div className="bg-dark bg-opacity-50 rounded-4 p-4 mb-4">
                  <h4 className="text-info d-flex align-items-center mb-3">
                    <FaGraduationCap className="me-2" /> Eğitim
                  </h4>
                  <div className="ps-1 ps-md-3">
                    <div className="d-flex align-items-start mb-2 hover-zoom text-light">
                      <FaSchool className="me-2 text-warning" />
                      <span>Bilecik Refik Arslan Öztürk Fen Lisesi</span>
                    </div>
                    <div className="d-flex align-items-start hover-zoom text-light">
                      <FaUniversity className="me-2 text-success" />
                      <span>Balıkesir Üniversitesi Bilgisayar Mühendisliği (2022)</span>
                    </div>
                  </div>
                </div>

               
                <div className="bg-dark bg-opacity-50 rounded-4 p-4">
                  <h4 className="text-info d-flex align-items-center mb-3">
                    <FaLanguage className="me-2" /> Diller
                  </h4>
                  <div className="ps-1 ps-md-3">
                    <div className="d-flex align-items-start mb-2 hover-zoom text-light">
                      <FaGlobeEurope className="me-2 text-primary" />
                      <span>İngilizce <span className="ms-2 text-white-50">(B2)</span></span>
                    </div>
                    <div className="d-flex align-items-start hover-zoom text-light">
                      <FaGlobeEurope className="me-2 text-primary" />
                      <span>Almanca <span className="ms-2 text-white-50">(A1)</span></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
