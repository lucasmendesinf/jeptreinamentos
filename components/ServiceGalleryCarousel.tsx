"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { galleryItems } from "@/lib/site-data";

export function ServiceGalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = galleryItems[activeIndex];

  function move(direction: number) {
    setActiveIndex((current) => (current + direction + galleryItems.length) % galleryItems.length);
  }

  return (
    <section id="servicos-realizados" className="section bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
        <div className="self-center">
          <p className="eyebrow text-orange-300">Serviços realizados</p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">Galeria de fotos da J&P</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Registros de sinalização, rotas de fuga, hidrantes, testes de pressão e atividades práticas realizadas em campo.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm font-black text-zinc-300">
            <span className="rounded-sm bg-red-700 px-3 py-1 text-white">{String(activeIndex + 1).padStart(2, "0")}</span>
            <span>de {String(galleryItems.length).padStart(2, "0")} fotos</span>
          </div>
        </div>

        <div className="service-gallery">
          <div className="service-gallery-main">
            <img src={active.image} alt={active.alt} className="service-gallery-image" decoding="async" />
            <div className="service-gallery-caption">
              <span>{active.category}</span>
              <strong>{active.title}</strong>
            </div>
            <button type="button" className="service-gallery-control service-gallery-prev" onClick={() => move(-1)} aria-label="Foto anterior">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button type="button" className="service-gallery-control service-gallery-next" onClick={() => move(1)} aria-label="Próxima foto">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="service-gallery-thumbs" aria-label="Miniaturas da galeria">
            {galleryItems.map((item, index) => (
              <button
                key={`${item.image}-${index}`}
                type="button"
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver foto: ${item.title}`}
              >
                <img src={item.thumb} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
