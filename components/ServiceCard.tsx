import { MessageSquare } from "lucide-react";
import type { services } from "@/lib/site-data";
import { serviceWhatsappMessage, whatsappLink } from "@/lib/utils";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="card p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-zinc-950 text-orange-400">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-700">{service.category}</p>
          <h3 className="mt-2 text-lg font-black text-zinc-950">{service.title}</h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-zinc-600">{service.description}</p>
      <a className="btn btn-ghost mt-5 w-full justify-center" href={whatsappLink(serviceWhatsappMessage(service.title))} target="_blank" rel="noreferrer">
        <MessageSquare className="h-4 w-4" /> Solicitar servico
      </a>
    </article>
  );
}
