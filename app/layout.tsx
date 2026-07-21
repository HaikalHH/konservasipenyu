import type { Metadata } from "next";
import { assetPath, basePath } from "./lib/paths";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "./globals.css";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (productionHost ? `https://${productionHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Konservasi Penyu Pulau Pramuka",
    template: "%s | Konservasi Penyu Pulau Pramuka",
  },
  description:
    "Jelajahi program ekowisata, edukasi, dan konservasi penyu di Pulau Pramuka, Kepulauan Seribu.",
  icons: {
    icon: `${basePath}/assets/logo-konservasi.png`,
    shortcut: `${basePath}/assets/logo-konservasi.png`,
  },
  openGraph: {
    title: "Jelajahi, Pelajari, Lestarikan",
    description: "Konservasi Penyu Pulau Pramuka",
    type: "website",
    images: [{ url: `${basePath}/og.png`, width: 1536, height: 864, alt: "Konservasi Penyu Pulau Pramuka" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jelajahi, Pelajari, Lestarikan",
    description: "Konservasi Penyu Pulau Pramuka",
    images: [`${basePath}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="preload" as="image" href={assetPath("/assets/web-page-1.webp")} />
      </head>
      <body>{children}</body>
    </html>
  );
}
