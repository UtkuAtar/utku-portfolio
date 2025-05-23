import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <small>&copy; {new Date().getFullYear()} Utku Atar | Tüm Hakları Saklıdır.</small>
    </footer>
  );
}
