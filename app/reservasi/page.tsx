import type { Metadata } from "next";
import { PdfPage, rectStyle } from "../components/PdfPage";
import { PdfReservationOverlay } from "../components/PdfReservationOverlay";

export const metadata: Metadata = { title: "Reservasi" };

export default function ReservationPage() {
  return (
    <PdfPage page={4} height={1728} alt="Reservasi kunjungan konservasi penyu Pulau Pramuka">
      <PdfReservationOverlay />
      <a
        className="canvas-hit-area"
        style={rectStyle([0, 576, 1024.5, 576], 1728)}
        href="https://maps.google.com/?q=Pulau+Pramuka"
        target="_blank"
        rel="noreferrer"
        aria-label="Buka lokasi Pulau Pramuka di Google Maps"
      />
    </PdfPage>
  );
}
