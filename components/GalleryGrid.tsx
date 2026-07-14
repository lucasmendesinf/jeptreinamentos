"use client";

import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { galleryItems } from "@/lib/site-data";
import { cx } from "@/lib/utils";

export function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const categories = useMemo(() => ["Todos", ...Array.from(new Set(galleryItems.map((item) => item.category)))], []);
  const [category, setCategory] = useState("Todos");
  const [active, setActive] = useState<(typeof galleryItems)[number] | null>(null);
  const filtered = galleryItems.filter((item) => category === "Todos" || item.category === category);
  const items = preview ? filtered.slice(0, 6) : filtered;

  return (
    <div>
      {!preview && (
        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filtros da galeria">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={cx("rounded-sm border px-4 py-2 text-sm font-bold transition", item === category ? "border-red-700 bg-red-700 text-white" : "border-zinc-200 bg-white text-zinc-700 hover:border-red-300")}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.image}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-zinc-900 text-left"
            onClick={(event) => {
              event.preventDefault();
              setActive(item);
            }}
          >
            <img
              src={item.image}
              alt={item.alt}
              loading={preview ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 text-white">
              <span className="block text-xs font-black uppercase tracking-[0.16em] text-orange-300">{item.category}</span>
              <span className="mt-1 block text-lg font-black">{item.title}</span>
            </span>
          </a>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label={active.title}>
          <button type="button" className="absolute right-4 top-4 rounded-full bg-white p-2 text-zinc-950" onClick={() => setActive(null)} aria-label="Fechar imagem ampliada">
            <X className="h-6 w-6" />
          </button>
          <figure className="max-w-5xl">
            <img src={active.image} alt={active.alt} className="max-h-[78vh] w-full rounded-sm object-contain" />
            <figcaption className="mt-3 text-center text-white">{active.title}</figcaption>
            <a className="btn btn-primary mx-auto mt-4 w-fit" href={active.image} target="_blank" rel="noreferrer">
              Abrir imagem original
            </a>
          </figure>
        </div>
      )}
    </div>
  );
}
