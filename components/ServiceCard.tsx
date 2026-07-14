import { MessageSquare } from "lucide-react";
import type { services } from "@/lib/site-data";
import { serviceWhatsappMessage, whatsappLink } from "@/lib/utils";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="card flex h-full flex-col p-5">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-zinc-950 text-orange-400">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.12em] text-red-700">{service.category}</p>
          <h3 className="mt-1 text-base font-black leading-tight text-zinc-950">{service.title}</h3>
        </div>
      </div>
      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{service.description}</p>
      <a className="btn btn-ghost mt-4 min-h-10 w-full justify-center py-2" href={whatsappLink(serviceWhatsappMessage(service.title))} target="_blank" rel="noreferrer">
        <MessageSquare className="h-4 w-4" /> Solicitar serviço
      </a>
    </article>
  );
}
