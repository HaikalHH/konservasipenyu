"use client";

import { FormEvent, useState } from "react";
import { FiSend } from "react-icons/fi";

export function ReservationForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="reservation-form" onSubmit={submit}>
      <h2>Formulir reservasi</h2>
      <p>Isi formulir di bawah ini untuk melakukan reservasi kunjungan</p>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Nama lengkap <span className="required">*</span></label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="whatsapp">WhatsApp <span className="required">*</span></label>
          <input id="whatsapp" name="whatsapp" inputMode="tel" autoComplete="tel" required />
        </div>
        <div className="form-field">
          <label htmlFor="date">Tanggal Kunjungan <span className="required">*</span></label>
          <input id="date" name="date" type="date" required />
        </div>
        <div className="form-field">
          <label htmlFor="participants">Jumlah peserta <span className="required">*</span></label>
          <input id="participants" name="participants" type="number" min="1" required />
        </div>
      </div>
      <button className="submit-button" type="submit"><FiSend aria-hidden="true" /> Kirim Reservasi</button>
      <p className="privacy-note">Data Anda aman dan hanya digunakan untuk keperluan reservasi</p>
      {sent && <p className="form-success" role="status">Reservasi tercatat. Tim konservasi akan menghubungi Anda melalui WhatsApp.</p>}
    </form>
  );
}
