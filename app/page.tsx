import type { Metadata } from "next";
import Link from "next/link";
import { PdfPage, rectStyle } from "./components/PdfPage";

export const metadata: Metadata = {
  title: "Beranda",
};

export default function HomePage() {
  return (
    <PdfPage page={1} height={1728} alt="Beranda Konservasi Penyu Pulau Pramuka">
      <Link
        className="canvas-hit-area"
        href="/reservasi"
        style={rectStyle([57, 390, 190, 52], 1728)}
        aria-label="Rencanakan Kunjungan"
      />
    </PdfPage>
  );
}
