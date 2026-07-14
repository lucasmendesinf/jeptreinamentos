"use client";

import { X } from "lucide-react";
import { useState } from "react";

type NrModalButtonProps = {
  code: string;
  title: string;
  summary: string;
};

const nrDetails: Record<string, string> = {
  "NR 6": "Treinamento sobre uso adequado, armazenamento, conservação, responsabilidades e escolha correta dos EPIs para cada atividade. A orientação ajuda os colaboradores a entenderem limites de proteção e cuidados necessários no dia a dia.",
  "NR 9": "Referência informativa sobre identificação, avaliação e prevenção de riscos ambientais no trabalho. O conteúdo orienta empresas e equipes sobre a importância de reconhecer agentes de risco e adotar medidas preventivas.",
  "NR 10": "Treinamentos e reciclagens sobre riscos elétricos, medidas de controle, equipamentos de proteção, sinalização e procedimentos seguros para atividades com eletricidade.",
  "NR 11": "Qualificação de operadores com orientação sobre operação segura, riscos da movimentação de cargas, tipos de empilhadeiras, condições de piso, circulação, inspeção e cuidados no ambiente de trabalho.",
  "NR 12": "Levantamento e orientação sobre adequações necessárias em máquinas e equipamentos, incluindo proteções de partes móveis, polias, engrenagens, eixos, rolamentos, sinalização e procedimentos de segurança.",
  "NR 18": "Integração e orientação aos colaboradores sobre riscos do ambiente de trabalho na construção, medidas preventivas, organização do canteiro e práticas seguras para reduzir acidentes.",
  "NR 23 / NPT-017": "Adequações, projetos para liberação de alvarás, placas de emergência, extintores, pinturas de solo, dimensionamento de rotas de fuga e treinamento de brigadas conforme requisitos de prevenção e resposta a incêndios.",
  "NR 26": "Adequação do ambiente de trabalho com critérios de cores e identificação na segurança do trabalho, reforçando sinalização, comunicação visual e orientação de riscos.",
  "NR 33": "Treinamentos para entrada em espaços confinados, abordando riscos, medidor de gás, tipos de espaços confinados, equipamentos de proteção e condutas para atuação em ambientes de alto risco.",
  "NR 35": "Treinamento sobre riscos em atividades em altura, uso correto dos equipamentos de proteção, linhas de vida, trava-quedas, cintos de segurança, sinalização e condutas em situações de emergência.",
};

export function NrModalButton({ code, title, summary }: NrModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalId = `nr-modal-${code.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const detail = nrDetails[code] ?? summary;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-left text-sm font-black text-zinc-100 transition hover:border-orange-300/50 hover:bg-orange-400/10"
        aria-label={`Ver informações sobre ${code} - ${title}`}
      >
        <span className="text-orange-300">{code}</span>
        <span className="ml-2 font-bold text-zinc-300">{title}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-labelledby={modalId}>
          <article className="relative w-full max-w-2xl rounded-sm bg-white p-6 text-zinc-800 shadow-2xl md:p-8">
            <button
              className="absolute right-4 top-4 rounded-full border border-zinc-200 p-2 text-zinc-700 hover:bg-zinc-50"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar informações da norma"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="eyebrow">Norma Regulamentadora</p>
            <h2 id={modalId} className="mt-3 pr-10 text-3xl font-black leading-tight text-zinc-950">
              {code} - {title}
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-600">{detail}</p>
            <p className="mt-5 text-sm font-semibold text-zinc-500">
              Conteúdo baseado na página de normas regulamentadoras da J&P Treinamentos.
            </p>
            <div className="mt-7 flex justify-end">
              <button className="btn btn-primary" type="button" onClick={() => setIsOpen(false)}>
                Entendi
              </button>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
