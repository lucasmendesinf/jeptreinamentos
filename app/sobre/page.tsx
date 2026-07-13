import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheca a J&P Treinamentos, empresa de seguranca do trabalho e prevencao de incendios.",
  alternates: { canonical: "/sobre" },
};

export default function AboutPage() {
  const values = ["Responsabilidade", "Competencia", "Obediencia as normas", "Preco justo", "Qualificacao", "Seguranca"];
  const offers = [
    "Treinamentos conforme NR 06, NR 09, NR 10, NR 11, NR 23, NR 26, NR 33 e NR 35.",
    "Adequacoes de maquinas conforme NR 12.",
    "Adequacoes de prevencao de incendio: extintores, placas de sinalizacao, pinturas de solo e rotas de fuga.",
  ];

  return (
    <div className="pt-20">
      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-orange-300">Sobre a J&P</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Como a vida nao tem preco, vale a pena investir na seguranca do trabalho.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
            A J&P Treinamentos atua no mercado prestando servicos e treinamentos na area de seguranca do trabalho e prevencao de incendios.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <SectionHeading eyebrow="Quem somos" title="Responsabilidade, normas regulamentadoras e valor justo">
            Atuando desde o inicio de {siteConfig.founded}, nosso principal objetivo e atender a expectativa dos clientes de modo satisfatorio, com responsabilidade, obediencia as normas regulamentadoras e valor justo.
          </SectionHeading>
          <div className="grid gap-4">
            {[
              ["Quem sao nossos clientes?", "Atendemos clientes dos mais variados perfis, desde empresas ate pessoas fisicas. Em ambos os casos, o foco e trabalhar com responsabilidade e competencia."],
              ["Quem sao nossos profissionais?", "Nossos profissionais possuem qualificacoes para garantir um atendimento consistente e orientado a resultados."],
              ["Objetivo comum", "A uniao da equipe em prol de um trabalho digno faz diferenca nos resultados: atender os interesses dos clientes levando maior possibilidade de seguranca a todos."],
              ["Compromisso", "Atuar com responsabilidade, conteudo coerente e respeito as normas regulamentadoras aplicaveis."],
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
          <SectionHeading eyebrow="Valores" title="O que orienta cada atendimento" align="center" />
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="O que podemos oferecer" title="Trabalhos realizados pela J&P" />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {offers.map((item) => (
              <div key={item} className="card p-6">
                <CheckCircle2 className="h-6 w-6 text-red-700" />
                <p className="mt-4 font-bold leading-7 text-zinc-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="card p-8">
            <ShieldCheck className="h-10 w-10 text-red-700" />
            <h2 className="mt-5 text-2xl font-black text-zinc-950">Equipe e responsavel apresentado</h2>
            <p className="mt-4 leading-7 text-zinc-600">
              Responsavel informado no site atual: {siteConfig.responsible}. Identificacao apresentada: {siteConfig.credential}. Outros dados da equipe podem ser adicionados quando a empresa enviar informacoes oficiais.
            </p>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-black text-zinc-950">Fale com a J&P</h2>
            <p className="mt-4 leading-7 text-zinc-600">
              O atendimento comeca pelo entendimento da necessidade do cliente, tipo de treinamento ou adequacao, local e quantidade estimada de participantes.
            </p>
            <Link className="btn btn-primary mt-6" href="/contato">Entre em contato</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
