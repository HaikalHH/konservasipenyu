import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { assetPath } from "../lib/paths";

type Rect = [x: number, y: number, width: number, height: number];

const PAGE_WIDTH = 1024.5;

const navigation = [
  { href: "/", label: "Beranda", rect: [474, 31, 78, 64] as Rect },
  { href: "/edukasi", label: "Edukasi & Konservasi", rect: [552, 31, 172, 64] as Rect },
  { href: "/program", label: "Program Ekowisata", rect: [724, 31, 164, 64] as Rect },
  { href: "/reservasi", label: "Reservasi", rect: [888, 31, 91, 64] as Rect },
];

export function rectStyle(rect: Rect, pageHeight: number): CSSProperties {
  const [x, y, width, height] = rect;
  return {
    left: `${(x / PAGE_WIDTH) * 100}%`,
    top: `${(y / pageHeight) * 100}%`,
    width: `${(width / PAGE_WIDTH) * 100}%`,
    height: `${(height / pageHeight) * 100}%`,
  };
}

function ExternalLinks({ pageHeight }: { pageHeight: number }) {
  return (
    <>
      <a
        className="canvas-hit-area"
        style={rectStyle([794, pageHeight - 300, 196, 36], pageHeight)}
        href="https://instagram.com/konservasipenyu.pramuka"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram Konservasi Penyu Pulau Pramuka"
      />
      <a
        className="canvas-hit-area"
        style={rectStyle([794, pageHeight - 264, 196, 36], pageHeight)}
        href="https://youtube.com/@konservasipenyu.pramuka"
        target="_blank"
        rel="noreferrer"
        aria-label="YouTube Konservasi Penyu Pulau Pramuka"
      />
    </>
  );
}

export function PdfPage({
  page,
  height,
  alt,
  children,
}: {
  page: 1 | 2 | 3 | 4;
  height: number;
  alt: string;
  children?: ReactNode;
}) {
  return (
    <main className="pdf-site-page">
      <div
        className="pdf-canvas"
        style={{ aspectRatio: `${PAGE_WIDTH} / ${height}` }}
      >
        <img
          className="pdf-page-image"
          src={assetPath(`/assets/web-page-${page}.webp`)}
          alt={alt}
          width={3074}
          height={page === 2 ? 6912 : 5184}
          draggable={false}
        />

        <nav aria-label="Navigasi utama">
          {navigation.map((item) => (
            <Link
              key={item.href}
              className="canvas-hit-area"
              href={item.href}
              style={rectStyle(item.rect, height)}
              aria-label={item.label}
            />
          ))}
        </nav>

        <ExternalLinks pageHeight={height} />
        {children}
      </div>
    </main>
  );
}
