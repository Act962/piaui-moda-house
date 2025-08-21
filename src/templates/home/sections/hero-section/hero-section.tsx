"use client";

import { useEffect, useRef } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Força o play após o componente montar
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Vídeo iniciado com sucesso");
          })
          .catch((error) => {
            console.log("Erro ao iniciar vídeo:", error);
          });
      }
    }
  }, []);

  return (
    <section className="relative h-[80vh] sm:min-h-[90vh] flex items-center justify-center bg-black">
      <video
        src="/pmh-site-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onLoadedData={() => {
          if (videoRef.current) {
            videoRef.current.play().catch(console.log);
          }
        }}
      ></video>
    </section>
  );
}
