import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { assetPath } from "../lib/paths";

export const metadata: Metadata = { title: "Edukasi & Konservasi" };

export default function EducationPage() {
  return (
    <main>
      <Header active="education" />
      <section className="hero hero-education">
        <div className="hero-content">
          <h1>Edukasi &amp; Konservasi</h1>
          <p>Kenali kehidupan penyu lebih dekat, mulai dari jenis-jenis penyu yang dilindungi, perjalanan hidupnya, hingga upaya penyelamatan yang dilakukan untuk menjaga keberlangsungan populasinya.</p>
        </div>
      </section>

      <section className="section education-intro" id="jenis-penyu">
        <div className="container">
          <h2 className="section-title">Mengenal Jenis-Jenis Penyu</h2>
          <p className="eyebrow">6 di antaranya ada di perairan Indonesia dan 2 jenis di Kepulauan Seribu</p>
          <div className="species-grid">
            <article className="species-card">
              <img className="species-visual" src={assetPath("/assets/penyu-hijau.png")} alt="Penyu hijau" />
              <h3>Penyu Hijau</h3>
              <em>Chelonia mydas</em>
              <ul>
                <li>Tempurung oval dan relatif halus</li>
                <li>Hidup di perairan dangkal dan padang lamun</li>
                <li>Makanan utama: lamun dan alga</li>
                <li>Berperan menjaga kesehatan padang lamun</li>
                <li>Terancam sampah plastik, perburuan, dan kerusakan habitat</li>
              </ul>
            </article>
            <article className="species-card">
              <img className="species-visual" src={assetPath("/assets/penyu-sisik.png")} alt="Penyu sisik" />
              <h3>Penyu Sisik</h3>
              <em>Eretmochelys imbricata</em>
              <ul>
                <li>Tempurung bermotif dengan sisik bertumpuk</li>
                <li>Memiliki paruh runcing seperti burung</li>
                <li>Hidup di sekitar terumbu karang</li>
                <li>Makanan utama: spons dan hewan laut kecil</li>
                <li>Terancam perdagangan tempurung dan kerusakan terumbu karang</li>
              </ul>
            </article>
            <article className="info-card">
              <h3>Siklus Hidup Penyu</h3>
              <p>Perjalanan hidup penyu dimulai ketika induk penyu naik ke pantai untuk bertelur. Telur-telur tersebut kemudian menetas menjadi tukik yang bergerak menuju laut.</p>
              <p>Tukik akan tumbuh dan menghabiskan sebagian besar hidupnya di lautan. Setelah dewasa, penyu betina akan kembali ke kawasan pantai tempat mereka menetas untuk bertelur dan memulai siklus kehidupan yang baru.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="care-section" id="aksi-konservasi">
        <div className="container care-grid">
          <article className="care-card">
            <h3>Perawatan dan Pelepasan Tukik</h3>
            <p>Setelah menetas, tukik akan diperiksa dan dirawat untuk memastikan kondisinya sehat sebelum dilepaskan ke laut. Perawatan dilakukan sesuai kebutuhan dan tetap mengutamakan perilaku alami tukik.</p>
            <p>Pelepasan tukik menjadi salah satu tahapan penting dalam konservasi. Tukik diarahkan menuju laut agar dapat memulai perjalanan hidupnya di habitat alami.</p>
          </article>
          <article className="care-card">
            <h3>Ancaman terhadap Penyu</h3>
            <p>Penyu menghadapi berbagai ancaman sejak masih berada di dalam telur hingga tumbuh dewasa. Ancaman tersebut dapat berasal dari alam maupun aktivitas manusia.</p>
            <p>Beberapa ancaman utama meliputi perburuan telur, perdagangan ilegal, pencemaran laut, sampah plastik, kerusakan habitat pantai, perubahan iklim, serta penyu yang tidak sengaja terjerat alat tangkap nelayan.</p>
          </article>
          <article className="care-card">
            <h3>Peran Pengunjung</h3>
            <p>Pengunjung dapat ikut mendukung konservasi melalui tindakan sederhana selama berada di kawasan konservasi.</p>
            <p>Jaga kebersihan, hindari menyentuh penyu tanpa arahan petugas, jangan menggunakan cahaya berlebihan saat mengambil gambar di penangkaran, dan ikuti seluruh ketentuan kunjungan.</p>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
