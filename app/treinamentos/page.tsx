import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { TrainingCard } from "@/components/TrainingCard";
import { trainings } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Treinamentos",
  description: "Treinamentos de brigada de incendio, NRs, bombeiro civil e seguranca do trabalho.",
  alternates: { canonical: "/treinamentos" },
};

export default function TrainingsPage() {
  return (
    <div className="pt-20">
      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-orange-300">Treinamentos</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Capacitacoes para empresas que levam prevencao a serio.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
            Cada pagina de treinamento possui campos configuraveis para carga horaria, validade, conteudo e normas relacionadas, permitindo ajuste com os dados oficiais da empresa.
          </p>
        </div>
      </section>
      <section className="section bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Lista completa de treinamentos" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trainings.map((training) => <TrainingCard key={training.slug} training={training} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
