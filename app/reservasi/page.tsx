import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ReservationForm } from "../components/ReservationForm";
import { assetPath } from "../lib/paths";

export const metadata: Metadata = { title: "Reservasi" };

const prices = [
  ["Umum", "Mancanegara", "Rp 150.000"],
  ["Umum", "Domestik", "Rp 5.000"],
  ["Rombongan", "Mancanegara", "Rp 100.000"],
  ["Rombongan", "Domestik", "Rp 3.000"],
];

export default function ReservationPage() {
  return (
    <main>
      <Header active="reservation" />
      <section className="reservation-hero">
        <div className="container">
          <h1 className="reservation-heading">Reservasi</h1>
          <p className="reservation-lead">Reservasi kunjungan Anda ke Pulau Pramuka dan dukung pelestarian penyu serta ekosistem laut yang indah.</p>
          <div className="reservation-grid">
            <ReservationForm />
            <div>
              <div className="price-grid">
                {prices.map(([type, audience, price]) => (
                  <div className="price-card" key={`${type}-${audience}`}>
                    <strong>{type}<br />({audience})</strong>
                    <span>{price}<br />/ orang</span>
                  </div>
                ))}
              </div>
              <p className="contribution">100% kontribusi digunakan untuk program konservasi &amp; edukasi</p>
              <table className="hours-table">
                <thead><tr><th>Hari</th><th>Waktu</th></tr></thead>
                <tbody>
                  <tr><td>Senin - Jumat</td><td>08.00 s/d 16.00</td></tr>
                  <tr><td>Sabtu - Minggu</td><td>07.00 s/d 16.00</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section" id="lokasi">
        <div className="container">
          <h2>Lokasi dan akses menuju Pulau Pramuka</h2>
          <a href="https://maps.google.com/?q=Pulau+Pramuka" target="_blank" rel="noreferrer" aria-label="Buka lokasi Pulau Pramuka di Google Maps">
            <img className="map-frame" src={assetPath("/assets/peta-pulau-pramuka.png")} alt="Peta lokasi pusat konservasi penyu di Pulau Pramuka" />
          </a>
        </div>
      </section>

      <section className="reservation-cta">
        <div className="container">
          <h2>Jelajahi, Pelajari, <span>Lestarikan</span></h2>
          <h2>Petualangan konservasi penyu di Pulau Pramuka</h2>
        </div>
      </section>
      <Footer photoBand={false} />
    </main>
  );
}
