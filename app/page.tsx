import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  HardHat,
  Siren,
  Sparkles,
} from "lucide-react";
import { MotionBlock } from "@/components/Motion";
import { NrModalButton } from "@/components/NrModalButton";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TrainingCard } from "@/components/TrainingCard";
import { differentials, faqItems, nrItems, processSteps, services, trainings } from "@/lib/site-data";
import { whatsappLink } from "@/lib/utils";

export default function Home() {
  const commandHighlights = [
    { icon: Flame, label: "Brigada de incêndio", value: "formação e reciclagem" },
    { icon: HardHat, label: "Segurança do trabalho", value: "NRs e operação segura" },
    { icon: Siren, label: "Emergência organizada", value: "rotas, alarmes e resposta" },
  ];
  const featuredTrainingSlugs = new Set(["brigada-de-incendio", "nr-6-epi", "nr-11-operador-de-empilhadeira", "nr-35-trabalho-em-altura"]);
  const featuredTrainings = trainings.filter((training) => featuredTrainingSlugs.has(training.slug));

  return (
    <>
      <section className="hero-section hero-next">
        <div className="hero-fire-background" />
        <div className="spark-field spark-field-a" aria-hidden="true" />
        <div className="spark-field spark-field-b" aria-hidden="true" />
        <div className="hero-heat" aria-hidden="true" />
        <div className="hero-gridline" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7f3ee] to-transparent" />

        <div className="relative mx-auto grid min-h-[76vh] max-w-7xl items-start gap-5 px-4 pb-6 pt-[10vh] sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:pt-[18.92vh] xl:min-h-[78vh]">
          <MotionBlock className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-black/35 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-orange-200 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Prevenção, treinamento e resposta
            </div>
            <h1 className="mt-3 text-4xl font-black leading-[1.01] text-white sm:text-5xl md:text-[3.45rem] xl:text-[4rem]">
              Treinamento real para equipes que enfrentam risco real.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-100 md:text-base">
              A J&P prepara brigadistas, operadores e equipes de empresas com aulas objetivas, prática orientada e foco em prevenção de incêndios e segurança do trabalho.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary justify-center" href="/contato">
                Solicitar orçamento <ArrowRight className="h-4 w-4" />
              </Link>
              <Link className="btn border-white/25 bg-black/25 text-white hover:bg-white/15" href="/treinamentos">
                Ver treinamentos
              </Link>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {commandHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="hero-metric">
                    <Icon className="h-5 w-5 text-orange-300" />
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                );
              })}
            </div>
          </MotionBlock>

          <MotionBlock delay={0.12} className="hidden lg:block lg:justify-self-end">
            <div className="command-panel">
              <p className="command-eyebrow">Atendimento para empresas</p>
              <h2 className="command-title">Prevenção, treinamentos e apoio técnico.</h2>
              <p className="command-copy">
                Capacitação prática para equipes, brigadistas e operações que exigem mais segurança.
              </p>
              <div className="command-list">
                {[
                  "Brigada de incêndio",
                  "Treinamentos de NRs",
                  "Sinalização e rotas de fuga",
                ].map((item) => (
                  <div key={item} className="command-check">
                    <CheckCircle2 className="h-5 w-5 text-orange-300" /> {item}
                  </div>
                ))}
              </div>
              <a className="btn btn-primary mt-6 w-full justify-center" href={whatsappLink()} target="_blank" rel="noreferrer">
                Solicitar orçamento <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </MotionBlock>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Principais treinamentos" title="Capacitações para operações mais seguras" align="center">
            Formações estruturadas para brigadistas, operadores e equipes que precisam reconhecer riscos, agir com critério e responder melhor em emergências.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredTrainings.map((training) => <TrainingCard key={training.slug} training={training} />)}
          </div>
        </div>
      </section>

      <section className="border-y border-red-950/10 bg-zinc-950 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow text-orange-300">Normas Regulamentadoras</p>
            <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">Acesso rápido aos temas mais solicitados</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {nrItems.map((item) => (
              <NrModalButton key={item.code} code={item.code} title={item.title} summary={item.summary} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f7f3ee]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Serviços" title="Prevenção, sinalização, equipamentos e vistorias">
            Atendimento para treinamentos, adequações, rotas de fuga, placas, testes, orientação sobre extintores e apoio em vistorias.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => <ServiceCard key={service.title} service={service} />)}
          </div>
          <Link className="btn btn-ghost mt-8" href="/servicos">
            Ver todos os serviços <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow text-orange-300">Diferenciais</p>
            <h2 className="section-title text-white">Treinamento sério, prático e adequado à realidade da empresa</h2>
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

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Etapas do atendimento" title="Um processo claro do primeiro contato à entrega" />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step} className="relative rounded-sm border border-zinc-200 bg-white p-5 shadow-sm">
                <span className="text-3xl font-black text-red-700">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-4 font-black text-zinc-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <SectionHeading eyebrow="Perguntas frequentes" title="Respostas objetivas para contratar com mais segurança" />
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
            <h2 className="section-title max-w-3xl text-white">Não espere uma emergência para investir em prevenção.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className="btn bg-white text-red-800 hover:bg-zinc-100" href="/contato">Solicitar orçamento</Link>
            <a className="btn border-white/30 bg-red-950/30 text-white hover:bg-red-950/50" href={whatsappLink()} target="_blank" rel="noreferrer">
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
