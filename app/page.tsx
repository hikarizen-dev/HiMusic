"use client";

import { useState } from "react";
import { Download, Play, Pause } from "lucide-react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6">
      {/* Logo y título */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight mb-2">🎧 HiMusic</h1>
        <p className="text-zinc-400">Tu reproductor de música Hi-Res minimalista.</p>
      </div>

      {/* Controles del reproductor */}
      <div className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-md">
        <div className="w-24 h-24 bg-zinc-800 rounded-full mb-6 flex items-center justify-center">
          {isPlaying ? (
            <Pause size={42} className="text-zinc-300" />
          ) : (
            <Play size={42} className="text-zinc-300" />
          )}
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-6 py-3 rounded-full bg-white text-black font-semibold transition hover:bg-zinc-200"
        >
          {isPlaying ? "Pausar" : "Reproducir"}
        </button>
      </div>

      {/* Opción futura de descarga */}
      <div className="mt-10">
        <button
          className="flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-700 hover:bg-zinc-800 transition"
        >
          <Download size={18} />
          <span>Descargar en calidad Hi-Res</span>
        </button>
      </div>

      {/* Pie de página */}
      <footer className="mt-16 text-sm text-zinc-500">
        <p>HiMusic © 2025 – Creado por Hikari Zen</p>
      </footer>
    </main>
  );
}
