import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galeria",
  description: "Galeria de treinamentos, equipamentos, brigadistas, palestras e servicos realizados.",
  alternates: { canonical: "/galeria" },
};

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-orange-300">Galeria</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Registros visuais preparados para fotos oficiais da empresa.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
            As imagens atuais funcionam como base visual e devem ser substituidas por fotos proprias autorizadas da J&P Treinamentos.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
}
