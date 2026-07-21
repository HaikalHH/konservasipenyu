import type { Metadata } from "next";
import { FiAlertTriangle } from "react-icons/fi";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { assetPath } from "../lib/paths";

export const metadata: Metadata = { title: "Program Ekowisata" };

export default function ProgramPage() {
  return (
    <main>
      <Header active="program" />
      <section className="hero hero-program">
        <div className="hero-content">
          <h1>EKOWISATA</h1>
          <p>Program ekowisata konservasi penyu merupakan kegiatan wisata edukatif yang mengajak pengunjung mengenal kehidupan penyu, proses perlindungan telur, perawatan tukik, hingga pelepasannya ke laut. Program ini tidak hanya memberikan pengalaman berwisata, tetapi juga menumbuhkan kepedulian terhadap pelestarian penyu dan ekosistem laut.</p>
        </div>
      </section>

      <section className="tour-section" id="tur-konservasi">
        <div className="container">
          <h2 className="section-title">Tur Kawasan Konservasi</h2>
          <figure className="phone-frame">
            <video
              controls
              playsInline
              preload="metadata"
              poster={assetPath("/assets/tur-konservasi-web-poster.jpg")}
              aria-label="Video tur kawasan konservasi penyu"
            >
              <source src={assetPath("/assets/tur-konservasi-web.mp4")} type="video/mp4" />
              Browser Anda tidak mendukung pemutaran video.
            </video>
          </figure>
        </div>
        <img className="tour-turtle tour-turtle-left" src={assetPath("/assets/turtle-front.png")} alt="" aria-hidden="true" />
        <img className="tour-turtle tour-turtle-right" src={assetPath("/assets/turtle-side.png")} alt="" aria-hidden="true" />
        <img className="tour-reef" src={assetPath("/assets/coral-reef.png")} alt="" aria-hidden="true" />
      </section>

      <section className="program-rules">
        <div className="rules-card">
          <div className="rules-title">
            <h2>Aturan kunjungan</h2>
            <FiAlertTriangle size={40} aria-hidden="true" />
          </div>
          <ul>
            <li>Jangan menyentuh atau mengganggu penyu</li>
            <li>Buang sampah pada tempatnya, bawa pulang sampah Anda</li>
            <li>Jaga ketenangan dan hormati alam serta pengunjung lain</li>
          </ul>
        </div>
      </section>
      <Footer photoBand={false} />
    </main>
  );
}
