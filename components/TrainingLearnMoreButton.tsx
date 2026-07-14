"use client";

import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { serviceWhatsappMessage, whatsappLink } from "@/lib/utils";

type TrainingModalContent = {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: readonly string[];
};

type TrainingLearnMoreButtonProps = {
  content: TrainingModalContent;
  trainingName: string;
  trainingSlug: string;
};

export function TrainingLearnMoreButton({ content, trainingName, trainingSlug }: TrainingLearnMoreButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="btn btn-ghost justify-center" type="button" onClick={() => setIsOpen(true)}>
        Saiba mais <ArrowRight className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-labelledby={`training-modal-${trainingSlug}`}>
          <article className="relative max-h-[88vh] w-full max-w-3xl overflow-auto rounded-sm bg-white text-zinc-800 shadow-2xl">
            <button
              className="absolute right-4 top-4 z-10 rounded-full border border-white/30 bg-black/35 p-2 text-white backdrop-blur hover:bg-black/55"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar informações do treinamento"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-zinc-950 p-4 md:p-5">
                <img className="h-64 w-full rounded-sm object-cover md:h-full" src={content.image} alt={content.imageAlt} />
              </div>
              <div className="p-6 md:p-8">
                <p className="eyebrow">Treinamento</p>
                <h2 id={`training-modal-${trainingSlug}`} className="mt-3 text-3xl font-black leading-tight text-zinc-950">
                  {content.title}
                </h2>
                <div className="mt-5 grid gap-4 text-base leading-7 text-zinc-600">
                  {content.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a className="btn btn-primary justify-center" href={whatsappLink(serviceWhatsappMessage(`treinamento de ${trainingName}`))} target="_blank" rel="noreferrer">
                    Solicitar orçamento
                  </a>
                  <button className="btn btn-ghost justify-center" type="button" onClick={() => setIsOpen(false)}>
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
