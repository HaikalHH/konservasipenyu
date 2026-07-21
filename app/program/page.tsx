import type { Metadata } from "next";
import { PdfPage, rectStyle } from "../components/PdfPage";
import { PdfTourVideo } from "../components/PdfTourVideo";

export const metadata: Metadata = { title: "Program Ekowisata" };

export default function ProgramPage() {
  return (
    <PdfPage page={3} height={1728} alt="Program ekowisata dan tur kawasan konservasi penyu">
      <PdfTourVideo style={rectStyle([413, 665, 199, 422], 1728)} />
    </PdfPage>
  );
}
