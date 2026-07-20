import { FiClock, FiInstagram, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { assetPath } from "../lib/paths";

export function Footer({ photoBand = true }: { photoBand?: boolean }) {
  return (
    <>
      {photoBand && <div className="photo-band mangrove" aria-hidden="true" />}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logos footer-logos">
                <img src={assetPath("/assets/logo-taman-nasional.png")} alt="Logo Taman Nasional Kepulauan Seribu" />
                <img src={assetPath("/assets/logo-konservasi.png")} alt="Logo Konservasi Pulau Pramuka" />
              </div>
              <p>Konservasi Penyu Pulau Pramuka</p>
              <p>Bagian dari kawasan Taman Nasional Kepulauan Seribu.</p>
            </div>
            <div className="footer-info">
              <h2 className="footer-heading">Informasi Kunjungan</h2>
              <div className="footer-row">
                <FiMapPin size={25} aria-hidden="true" />
                <p>Desa Wisata Pulau Pramuka, Kelurahan Pulau Panggang, Kecamatan Kepulauan Seribu Utara, Kabupaten Administrasi Kepulauan Seribu, DKI Jakarta.</p>
              </div>
              <div className="footer-row"><FiClock size={23} aria-hidden="true" /><p>08.00 s/d 15.00</p></div>
              <div className="footer-row"><FiPhone size={23} aria-hidden="true" /><p>+62 81563936299</p></div>
            </div>
            <div className="footer-social">
              <h2 className="footer-heading">Media Sosial</h2>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
                <a href="https://wa.me/6281563936299" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Konservasi Penyu Pulau Pramuka. Hak cipta dilindungi.</p>
            <p>Dikelola oleh Balai Taman Nasional Kepulauan Seribu.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
