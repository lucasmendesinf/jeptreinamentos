import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import type { trainings } from "@/lib/site-data";
import { serviceWhatsappMessage, whatsappLink } from "@/lib/utils";

type Training = (typeof trainings)[number];

export function TrainingCard({ training }: { training: Training }) {
  const Icon = training.icon;

  return (
    <article className="card group flex h-full flex-col p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-red-50 text-red-700 ring-1 ring-red-100">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-black text-zinc-950">{training.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">{training.short}</p>
      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        <Link className="btn btn-ghost justify-center" href={`/treinamentos/${training.slug}`}>
          Saiba mais <ArrowRight className="h-4 w-4" />
        </Link>
        <a className="btn btn-primary justify-center" href={whatsappLink(serviceWhatsappMessage(`treinamento de ${training.name}`))} target="_blank" rel="noreferrer">
          <MessageSquare className="h-4 w-4" /> Solicitar
        </a>
      </div>
    </article>
  );
}
