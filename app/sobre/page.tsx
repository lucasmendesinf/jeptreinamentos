import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGalleryCarousel } from "@/components/ServiceGalleryCarousel";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a J&P Treinamentos, empresa de segurança do trabalho e prevenção de incêndios.",
  alternates: { canonical: "/sobre" },
};

export default function AboutPage() {
  const values = ["Responsabilidade", "Competência", "Obediência às normas", "Preço justo", "Qualificação", "Segurança"];
  const offers = [
    "Treinamentos conforme NR 06, NR 09, NR 10, NR 11, NR 23, NR 26, NR 33 e NR 35.",
    "Adequações de máquinas conforme NR 12.",
    "Adequações de prevenção de incêndio: extintores, placas de sinalização, pinturas de solo e rotas de fuga.",
  ];

  return (
    <div className="pt-28">
      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-orange-300">Sobre a J&P</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Como a vida não tem preço, vale a pena investir na segurança do trabalho.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
            A J&P Treinamentos atua no mercado prestando serviços e treinamentos na área de segurança do trabalho e prevenção de incêndios.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl min-w-0 gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <SectionHeading eyebrow="Quem somos" title="Responsabilidade, normas regulamentadoras e valor justo">
            Atuando desde o início de {siteConfig.founded}, nosso principal objetivo é atender às expectativas dos clientes de modo satisfatório, com responsabilidade, obediência às normas regulamentadoras e valor justo.
          </SectionHeading>
          <div className="grid min-w-0 gap-4">
            {[
              ["Quem são nossos clientes?", "Atendemos clientes dos mais variados perfis, desde empresas até pessoas físicas. Em ambos os casos, o foco é trabalhar com responsabilidade e competência."],
              ["Quem são nossos profissionais?", "Nossos profissionais possuem qualificações para garantir um atendimento consistente e orientado a resultados."],
              ["Objetivo comum", "A união da equipe em prol de um trabalho digno faz diferença nos resultados: atender aos interesses dos clientes levando maior possibilidade de segurança a todos."],
              ["Compromisso", "Atuar com responsabilidade, conteúdo coerente e respeito às normas regulamentadoras aplicáveis."],
            ].map(([title, text]) => (
              <article key={title} className="card p-6">
                <h2 className="text-xl font-black text-zinc-950">{title}</h2>
                <p className="mt-3 leading-7 text-zinc-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceGalleryCarousel />

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
        <div className="mx-auto grid max-w-7xl min-w-0 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="card p-8">
            <ShieldCheck className="h-10 w-10 text-red-700" />
            <h2 className="mt-5 text-2xl font-black text-zinc-950">Equipe e responsável apresentado</h2>
            <p className="mt-4 leading-7 text-zinc-600">
              Responsável informado no site atual: {siteConfig.responsible}. Identificação apresentada: {siteConfig.credential}. Outros dados da equipe podem ser adicionados quando a empresa enviar informações oficiais.
            </p>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-black text-zinc-950">Fale com a J&P</h2>
            <p className="mt-4 leading-7 text-zinc-600">
              O atendimento começa pelo entendimento da necessidade do cliente, tipo de treinamento ou adequação, local e quantidade estimada de participantes.
            </p>
            <Link className="btn btn-primary mt-6" href="/jeptreinamentos/contato">Entre em contato</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
