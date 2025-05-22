import React from "react";
import { FaUserAlt } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-dark text-white py-5" style={{ minHeight: "100vh", marginLeft: "220px" }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-10">
            <div className="card bg-secondary text-light shadow-lg border-0 p-4">
              <div className="d-flex align-items-start mb-3">
                <FaUserAlt size={32} className="me-3 mt-1 text-primary" />
                <h2 className="fw-bold">Hakkımda</h2>
              </div>
              <p>
                Merhaba! Ben Utku Atar. 21 yaşındayım. Bilecik Refik Arslan Öztürk Fen Lisesi mezunuyum.
                Balıkesir Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. Bölüme 2022'de girdim.
                WEB Geliştirme, Veritabanı Yönetimi ve Mobil Uygulama Geliştirme alanlarına ilgi duyuyorum.
                HTML, CSS, JavaScript, C#, C++, SwiftUI, SQL gibi alanlarda orta seviye bilgi sahibiyim.
                Bunlar haricinde spor yapmayı seviyorum. Lisanslı olarak karate ve futbol müsabakalarına katıldım.
                Hobi olarak ise basketbol, yüzme, müzik prodüksiyonu alanlarına ilgiliyim.
              </p>
              <p>
                Önceden Frontend teknolojileri (HTML, CSS, JavaScript, React, Bootstrap) ile arayüz geliştirme üzerine
                yoğunlaşsam da bu aralar SwiftUI ile mobil uygulama geliştirme üzerine yoğunlaştım. Bu portfolyo sitesi ise
                genel olarak beni tanıtmak ve yazılım alanındaki projelerimi sunmak amacıyla yaptığım bir websitedir.
              </p>
              <p>
                Takım çalışmasına uyumluyum, kendimi geliştirmeye ve yeni şeyler öğrenmeye açığım.
                Daha fazlası için <a href="/contact" className="text-decoration-none text-info fw-bold">iletişim</a> bölümünden bana ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
