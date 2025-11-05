// app/page.tsx o pages/index.tsx
"use client";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">🎧 HiMusic</h1>
      <p className="text-gray-400">Tu reproductor de música Hi-Res minimalista.</p>

      <div className="mt-10 bg-neutral-800 p-6 rounded-2xl shadow-lg w-96 text-center">
        <p className="mb-3">Reproduce, descarga y disfruta de calidad Hi-Res.</p>
        <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-full transition">
          Iniciar reproductor
        </button>
      </div>
    </main>
  );
}
