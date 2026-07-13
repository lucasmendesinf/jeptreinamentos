import Link from "next/link";
import { ArrowRight, CheckCircle2, Flame, ShieldCheck } from "lucide-react";
import { GalleryGrid } from "@/components/GalleryGrid";
import { MotionBlock } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TrainingCard } from "@/components/TrainingCard";
import { differentials, faqItems, processSteps, services, trainings, trustIndicators } from "@/lib/site-data";
import { whatsappLink } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(9,9,11,.94),rgba(127,29,29,.72),rgba(9,9,11,.54)),url('https://images.unsplash.com/photo-1584467735871-8d5c9fc2f928?auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <MotionBlock>
            <p className="eyebrow text-orange-300">Prevencao, treinamento e resposta</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] text-white md:text-7xl">
              Treinamentos que preparam pessoas e protegem vidas
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-100 md:text-xl">
              Capacitacao em seguranca do trabalho, prevencao de incendios e formacao de brigadistas para empresas e profissionais.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary justify-center" href="/contato">
                Solicitar orcamento <ArrowRight className="h-4 w-4" />
              </Link>
              <Link className="btn border-white/25 bg-white/10 text-white hover:bg-white/20" href="/treinamentos">
                Conhecer treinamentos
              </Link>
            </div>
          </MotionBlock>

          <MotionBlock delay={0.12} className="hidden lg:block">
            <div className="relative ml-auto max-w-md border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-md">
              <div className="absolute -left-5 top-8 h-24 w-2 bg-orange-400" />
              <Flame className="h-12 w-12 text-orange-300" />
              <h2 className="mt-6 text-2xl font-black">Preparacao com criterio, clareza e pratica.</h2>
              <p className="mt-4 leading-7 text-zinc-100">
                Conteudo organizado para ajudar empresas a treinar equipes, reforcar condutas preventivas e apoiar adequacoes de seguranca.
              </p>
              <div className="mt-6 grid gap-3">
                {["Atendimento comercial rapido", "Treinamentos para empresas", "Apoio em vistorias e adequacoes"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-300" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </MotionBlock>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {trustIndicators.map((item) => (
            <MotionBlock key={item.label} className="card p-6">
              <p className="text-2xl font-black text-red-700">{item.value}</p>
              <h2 className="mt-2 font-black text-zinc-950">{item.label}</h2>
              <p className="mt-2 text-sm text-zinc-500">{item.note}</p>
            </MotionBlock>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <MotionBlock>
            <SectionHeading eyebrow="Sobre a empresa" title="Seguranca do trabalho com responsabilidade desde 2019">
              A J&P Treinamentos atua com capacitacao, prevencao de incendios e apoio a empresas e pessoas fisicas que precisam de orientacao objetiva, preco justo e profissionais qualificados.
            </SectionHeading>
            <Link className="btn btn-primary mt-7" href="/sobre">
              Conheca nossa historia
            </Link>
          </MotionBlock>
          <MotionBlock delay={0.1} className="grid gap-4 sm:grid-cols-2">
            {["Cumprimento das normas regulamentadoras", "Foco em protecao e seguranca", "Atendimento personalizado", "Responsavel: Pedro Alex Machado"].map((item) => (
              <div key={item} className="flex gap-3 rounded-sm border border-zinc-200 bg-white p-5">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-red-700" />
                <p className="font-bold text-zinc-800">{item}</p>
              </div>
            ))}
          </MotionBlock>
        </div>
      </section>

      <section className="section bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Principais treinamentos" title="Capacitacoes para operacoes mais seguras" align="center">
            Cards preparados com campos configuraveis para carga horaria, validade e normas relacionadas, sem inventar requisitos legais.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trainings.map((training) => <TrainingCard key={training.slug} training={training} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Servicos" title="Prevencao, sinalizacao, equipamentos e vistorias">
            Atendimento para treinamentos, adequacoes, rotas de fuga, placas, testes, orientacao sobre extintores e apoio em vistorias.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => <ServiceCard key={service.title} service={service} />)}
          </div>
          <Link className="btn btn-ghost mt-8" href="/servicos">
            Ver todos os servicos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow text-orange-300">Diferenciais</p>
            <h2 className="section-title text-white">Treinamento serio, pratico e adequado a realidade da empresa</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {differentials.map((item) => (
              <div key={item} className="flex items-center gap-3 border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="h-5 w-5 text-orange-300" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Etapas do atendimento" title="Um processo claro do primeiro contato a entrega" />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step} className="relative rounded-sm border border-zinc-200 bg-white p-5">
                <span className="text-3xl font-black text-red-700">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-4 font-black text-zinc-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Galeria" title="Ambientes, equipamentos e treinamentos em destaque" />
          <div className="mt-10">
            <GalleryGrid preview />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <SectionHeading eyebrow="Perguntas frequentes" title="Respostas objetivas, sem promessas fora de contexto" />
          <div className="grid gap-3">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-sm border border-zinc-200 bg-white p-5">
                <summary className="cursor-pointer font-black text-zinc-950">{item.question}</summary>
                <p className="mt-3 leading-7 text-zinc-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-red-800 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="eyebrow text-orange-200">Chamada final</p>
            <h2 className="section-title max-w-3xl text-white">Nao espere uma emergencia para investir em prevencao.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className="btn bg-white text-red-800 hover:bg-zinc-100" href="/contato">Solicitar orcamento</Link>
            <a className="btn border-white/30 bg-red-950/30 text-white hover:bg-red-950/50" href={whatsappLink()} target="_blank" rel="noreferrer">
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
