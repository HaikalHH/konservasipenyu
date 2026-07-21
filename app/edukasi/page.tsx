import type { Metadata } from "next";
import { PdfPage } from "../components/PdfPage";

export const metadata: Metadata = { title: "Edukasi & Konservasi" };

export default function EducationPage() {
  return <PdfPage page={2} height={2304} alt="Edukasi dan konservasi penyu Pulau Pramuka" />;
}
