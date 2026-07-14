import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, FileCheck2, MessageSquare, ShieldCheck, Users } from "lucide-react";
import { trainings } from "@/lib/site-data";
import { serviceWhatsappMessage, whatsappLink } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return trainings.map((training) => ({ slug: training.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const training = trainings.find((item) => item.slug === slug);
  if (!training) return {};
  return {
    title: training.name,
    description: training.short,
    alternates: { canonical: `/treinamentos/${training.slug}` },
  };
}

export default async function TrainingDetailPage({ params }: Props) {
  const { slug } = await params;
  const training = trainings.find((item) => item.slug === slug);
  if (!training) notFound();
  const Icon = training.icon;

  return (
    <div className="pt-28">
      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-red-700 text-white">
            <Icon className="h-8 w-8" />
          </div>
          <p className="eyebrow text-orange-300">Treinamento</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">{training.name}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">{training.short}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-primary" href={whatsappLink(serviceWhatsappMessage(`treinamento de ${training.name}`))} target="_blank" rel="noreferrer">
              <MessageSquare className="h-4 w-4" /> Solicitar orçamento
            </a>
            <a className="btn border-white/25 bg-white/10 text-white hover:bg-white/20" href={whatsappLink()} target="_blank" rel="noreferrer">
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div className="grid gap-8">
            <article>
              <h2 className="text-3xl font-black text-zinc-950">Objetivos</h2>
              <ul className="mt-5 grid gap-3">
                {training.objectives.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-zinc-700">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-red-700" /> {item}
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <h2 className="text-3xl font-black text-zinc-950">Conteúdo programático</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {training.syllabus.map((item) => (
                  <div key={item} className="rounded-sm border border-zinc-200 bg-white p-4 font-bold text-zinc-800">{item}</div>
                ))}
              </div>
            </article>
          </div>

          <aside className="card h-fit p-6">
            <h2 className="text-2xl font-black text-zinc-950">Informações configuráveis</h2>
            <div className="mt-6 grid gap-4">
              <Info icon={<Users />} label="Público indicado" value={training.audience} />
              <Info icon={<FileCheck2 />} label="Modalidade" value={training.modality} />
              <Info icon={<ShieldCheck />} label="Aulas práticas" value={training.practical} />
              <Info icon={<Clock />} label="Carga horária" value={training.workload} />
              <Info icon={<Clock />} label="Validade ou reciclagem" value={training.validity} />
              <Info icon={<FileCheck2 />} label="Normas relacionadas" value={training.relatedNorms.join(", ")} />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3 border-b border-zinc-100 pb-4 last:border-0 last:pb-0">
      <span className="mt-1 text-red-700 [&_svg]:h-5 [&_svg]:w-5">{icon}</span>
      <div>
        <p className="text-sm font-black uppercase tracking-[0.12em] text-zinc-500">{label}</p>
        <p className="mt-1 leading-7 text-zinc-800">{value}</p>
      </div>
    </div>
  );
}
