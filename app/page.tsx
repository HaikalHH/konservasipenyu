import type { Metadata } from "next";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "Beranda",
};

export default function HomePage() {
  return (
    <main>
      <Header active="home" />
      <section className="hero hero-home">
        <div className="hero-content">
          <h1>Jelajahi, Pelajari, Lestarikan</h1>
          <h2>Petualangan konservasi penyu di Pulau Pramuka</h2>
          <p>Nikmati pengalaman ekowisata yang tidak hanya menyenangkan, tetapi juga memberikan wawasan tentang kehidupan penyu dan pentingnya menjaga ekosistem laut. Di Konservasi Penyu Pulau Pramuka, setiap kunjungan menjadi kesempatan untuk mengenal proses penyelamatan, perawatan, dan pelestarian penyu secara lebih dekat.</p>
          <a className="primary-button" href="/reservasi">Rencanakan Kunjungan</a>
        </div>
      </section>

      <section className="section" id="tentang">
        <div className="container intro-grid">
          <div className="framed-photo">
            <img src="/assets/papan-konservasi.jpg" alt="Papan Balai Taman Nasional Kepulauan Seribu" />
          </div>
          <div>
            <h2 className="section-title">Mengenal Konservasi Penyu Pulau Pramuka</h2>
            <p className="section-copy">Kegiatan konservasi penyu di Pulau Pramuka telah berlangsung sejak tahun 1980-an sebagai upaya melindungi telur, tukik, dan penyu dewasa dari berbagai ancaman, seperti perburuan, kerusakan habitat, serta pencemaran laut.</p>
            <p className="section-copy">Dalam perkembangannya, kawasan ini menjadi bagian dari pengelolaan Taman Nasional Kepulauan Seribu dan berfungsi sebagai tempat pelestarian sekaligus pusat edukasi lingkungan. Pengunjung dapat melihat area perawatan penyu, mempelajari tahapan pertumbuhan penyu, serta memahami peran masyarakat dalam menjaga kelestarian ekosistem laut.</p>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2>Wisata yang Memberikan Dampak</h2>
        <p>Kunjungan Anda bukan sekadar perjalanan wisata. Setiap pengalaman, pengetahuan, dan kepedulian yang dibawa pulang menjadi bagian dari upaya bersama untuk menjaga keberlangsungan hidup penyu di masa depan.</p>
      </section>
      <div className="photo-band community" aria-hidden="true" />
      <Footer photoBand={false} />
    </main>
  );
}
