import { FiClock, FiInstagram, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { assetPath } from "../lib/paths";

export function Footer({ photoBand = true }: { photoBand?: boolean }) {
  return (
    <>
      {photoBand && <div className="photo-band mangrove wave-photo" aria-hidden="true" />}
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
              <div className="footer-row"><FiPhone size={23} aria-hidden="true" /><p>+62 811-954-545</p></div>
            </div>
            <div className="footer-social">
              <h2 className="footer-heading">Media Sosial</h2>
              <div className="social-links">
                <a href="https://instagram.com/konservasipenyu.pramuka" target="_blank" rel="noreferrer" aria-label="Instagram Konservasi Penyu Pulau Pramuka"><FiInstagram /><span>@konservasipenyu.pramuka</span></a>
                <a href="https://youtube.com/@konservasipenyu.pramuka" target="_blank" rel="noreferrer" aria-label="YouTube Konservasi Penyu Pulau Pramuka"><FaYoutube /><span>konservasipenyu.pramuka</span></a>
                <a className="social-whatsapp" href="https://wa.me/62811954545" target="_blank" rel="noreferrer" aria-label="WhatsApp Konservasi Penyu Pulau Pramuka"><FaWhatsapp /><span>WhatsApp</span></a>
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
