"use client";

import { FormEvent, useState } from "react";
import { rectStyle } from "./PdfPage";

const PAGE_HEIGHT = 1728;

export function PdfReservationOverlay() {
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Reservasi siap dikirim. Silakan hubungi pengelola untuk konfirmasi akhir.");
  }

  return (
    <form className="pdf-reservation-form" onSubmit={submit} aria-label="Formulir reservasi kunjungan">
      <label className="sr-only" htmlFor="pdf-name">Nama lengkap</label>
      <input id="pdf-name" name="name" required autoComplete="name" style={rectStyle([83, 362, 168, 28], PAGE_HEIGHT)} />

      <label className="sr-only" htmlFor="pdf-whatsapp">Nomor WhatsApp</label>
      <input id="pdf-whatsapp" name="whatsapp" required inputMode="tel" autoComplete="tel" style={rectStyle([280, 362, 168, 28], PAGE_HEIGHT)} />

      <label className="sr-only" htmlFor="pdf-date">Tanggal kunjungan</label>
      <input id="pdf-date" name="date" required placeholder="" style={rectStyle([83, 417, 168, 28], PAGE_HEIGHT)} />

      <label className="sr-only" htmlFor="pdf-participants">Jumlah peserta</label>
      <input id="pdf-participants" name="participants" required inputMode="numeric" style={rectStyle([280, 417, 168, 28], PAGE_HEIGHT)} />

      <button className="pdf-submit" type="submit" style={rectStyle([194, 455, 168, 36], PAGE_HEIGHT)} aria-label="Kirim Reservasi" />
      <p className="sr-only" aria-live="polite">{message}</p>
    </form>
  );
}
