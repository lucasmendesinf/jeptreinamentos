import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { nrItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Normas Regulamentadoras",
  description: "Página informativa sobre NRs trabalhadas pela J&P Treinamentos.",
  alternates: { canonical: "/normas-regulamentadoras" },
};

export default function NRsPage() {
  return (
    <div className="pt-28">
      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-orange-300">Normas Regulamentadoras</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Saiba mais sobre as Normas Regulamentadoras trabalhadas pela J&P.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
            As normas regulamentadoras determinam e orientam procedimentos relacionados à saúde e segurança do trabalho. A J&P Treinamentos segue essas orientações para replicar conhecimento aos alunos.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex gap-4 rounded-sm border border-orange-200 bg-orange-50 p-5 text-orange-950">
            <AlertTriangle className="mt-1 h-6 w-6 shrink-0" />
            <p className="leading-7">
              Conteúdo informativo baseado na página antiga da J&P. A necessidade de cada treinamento depende da atividade, função, ambiente e legislação aplicável; para interpretações específicas, consulte a norma vigente e profissionais habilitados.
            </p>
          </div>
          <SectionHeading title="Descrição de algumas NRs">
            Abaixo estão as normas apresentadas pela J&P no site antigo, com redação revisada para ficar mais clara e profissional.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {nrItems.map((item) => (
              <article key={item.code} className="card p-6">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-red-700">{item.code}</p>
                <h2 className="mt-3 text-xl font-black text-zinc-950">{item.title}</h2>
                <p className="mt-3 leading-7 text-zinc-600">{item.summary}</p>
              </article>
            ))}
          </div>
          <Link className="btn btn-primary mt-8" href="/contato">Solicitar orientação</Link>
        </div>
      </section>
    </div>
  );
}
