import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:5173";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: {
      default: "Konservasi Penyu Pulau Pramuka",
      template: "%s | Konservasi Penyu Pulau Pramuka",
    },
    description:
      "Jelajahi program ekowisata, edukasi, dan konservasi penyu di Pulau Pramuka, Kepulauan Seribu.",
    icons: {
      icon: "/assets/logo-konservasi.png",
      shortcut: "/assets/logo-konservasi.png",
    },
    openGraph: {
      title: "Jelajahi, Pelajari, Lestarikan",
      description: "Konservasi Penyu Pulau Pramuka",
      type: "website",
      images: [{ url: imageUrl, width: 1536, height: 864, alt: "Konservasi Penyu Pulau Pramuka" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Jelajahi, Pelajari, Lestarikan",
      description: "Konservasi Penyu Pulau Pramuka",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="preload" as="image" href="/assets/hero-penyu.jpg" />
        <link rel="preload" as="image" href="/assets/hero-edukasi.jpg" />
        <link rel="preload" as="image" href="/assets/hero-ekowisata.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
