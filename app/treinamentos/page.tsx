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
    <div className="pt-28">
      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-orange-300">Treinamentos</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Conhecimento tecnico para possibilitar mais seguranca no trabalho.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
            Temos uma equipe de profissionais competentes e comprometidos em transmitir todo o conhecimento necessario para possibilitar a seguranca do trabalho.
          </p>
        </div>
      </section>
      <section className="section bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Confira nossos treinamentos">
            A pagina antiga destacava Brigada de Incendio, NR 11 - Operador de Empilhadeira, NR 35 e NR 6. Mantivemos esses treinamentos e organizamos tambem outras normas citadas pela J&P para facilitar a consulta.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trainings.map((training) => <TrainingCard key={training.slug} training={training} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
