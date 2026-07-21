"use client";

import type { CSSProperties, KeyboardEvent } from "react";
import { useRef, useState } from "react";
import { assetPath } from "../lib/paths";

export function PdfTourVideo({ style }: { style: CSSProperties }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [controls, setControls] = useState(false);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    setControls(true);
    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLVideoElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      void togglePlayback();
    }
  }

  return (
    <video
      ref={videoRef}
      className="pdf-tour-video"
      style={style}
      controls={controls}
      playsInline
      preload="metadata"
      poster={assetPath("/assets/tur-konservasi-pdf-poster.webp")}
      aria-label="Putar atau jeda video tur kawasan konservasi penyu"
      tabIndex={0}
      onClick={() => void togglePlayback()}
      onKeyDown={handleKeyDown}
    >
      <source src={assetPath("/assets/tur-konservasi-web.mp4")} type="video/mp4" />
      Browser Anda tidak mendukung pemutaran video.
    </video>
  );
}
