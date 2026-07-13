import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheca a historia, compromisso e forma de atendimento da J&P Treinamentos.",
  alternates: { canonical: "/sobre" },
};

export default function AboutPage() {
  const values = ["Responsabilidade", "Prevencao", "Clareza", "Profissionalismo", "Preco justo", "Seguranca em primeiro lugar"];

  return (
    <div className="pt-20">
      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-orange-300">Sobre a J&P</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Uma empresa criada para preparar pessoas e fortalecer a prevencao.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
            Desde {siteConfig.founded}, a J&P Treinamentos atua com seguranca do trabalho, prevencao de incendios e treinamentos voltados a empresas e pessoas fisicas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <SectionHeading eyebrow="Historia" title="Atendimento direto, conteudo aplicavel e compromisso com normas">
            A empresa nasceu com foco em capacitacao responsavel, apoio a adequacoes e orientacao clara para quem precisa cumprir exigencias, organizar equipes e reduzir riscos no ambiente de trabalho.
          </SectionHeading>
          <div className="grid gap-4">
            {[
              ["Missao", "Capacitar pessoas e apoiar empresas na construcao de ambientes mais seguros."],
              ["Visao", "Ser reconhecida pela seriedade, agilidade e qualidade tecnica no atendimento."],
              ["Compromisso", "Atuar com responsabilidade, conteudo coerente e respeito as normas aplicaveis."],
              ["Publico atendido", "Empresas, equipes operacionais, liderancas, profissionais autônomos e pessoas fisicas."],
            ].map(([title, text]) => (
              <article key={title} className="card p-6">
                <h2 className="text-xl font-black text-zinc-950">{title}</h2>
                <p className="mt-3 leading-7 text-zinc-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Valores" title="O que orienta cada treinamento" align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value} className="flex items-center gap-3 rounded-sm border border-zinc-200 bg-white p-5">
                <CheckCircle2 className="h-5 w-5 text-red-700" />
                <span className="font-black text-zinc-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="card p-8">
            <ShieldCheck className="h-10 w-10 text-red-700" />
            <h2 className="mt-5 text-2xl font-black text-zinc-950">Equipe e responsavel tecnico apresentado</h2>
            <p className="mt-4 leading-7 text-zinc-600">
              Responsavel informado no site atual: {siteConfig.responsible}. Identificacao apresentada: {siteConfig.credential}. Outros dados da equipe podem ser adicionados quando a empresa enviar informacoes oficiais.
            </p>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-black text-zinc-950">Forma de atendimento</h2>
            <p className="mt-4 leading-7 text-zinc-600">
              O atendimento comeca pelo levantamento da necessidade, quantidade estimada de participantes, local, atividade exercida e objetivo do treinamento ou servico. A proposta deve confirmar escopo, documentos entregues e condicoes de execucao.
            </p>
            <Link className="btn btn-primary mt-6" href="/contato">Solicitar atendimento</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
