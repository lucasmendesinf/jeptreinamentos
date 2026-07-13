import type { Metadata } from "next";
import { Mail, MapPin, Phone, UserRound } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-data";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contato",
  description: "Solicite orcamento para treinamentos, NRs, brigada de incendio e servicos de prevencao.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-orange-300">Contato</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Solicite um orcamento ou fale com a equipe.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
            Envie sua necessidade, cidade, quantidade estimada de participantes e o treinamento ou servico desejado.
          </p>
        </div>
      </section>

      <section className="section bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
          <ContactForm />
          <aside className="grid h-fit gap-5">
            <div className="card p-6">
              <h2 className="text-2xl font-black text-zinc-950">Canais diretos</h2>
              <div className="mt-5 grid gap-4">
                <a className="flex items-center gap-3 font-bold text-zinc-800 hover:text-red-700" href={siteConfig.phoneHref}><Phone className="h-5 w-5 text-red-700" /> {siteConfig.phone}</a>
                <a className="flex items-center gap-3 font-bold text-zinc-800 hover:text-red-700" href={siteConfig.emailHref}><Mail className="h-5 w-5 text-red-700" /> {siteConfig.email}</a>
                <p className="flex items-center gap-3 font-bold text-zinc-800"><UserRound className="h-5 w-5 text-red-700" /> {siteConfig.responsible}</p>
                <p className="flex items-center gap-3 font-bold text-zinc-800"><MapPin className="h-5 w-5 text-red-700" /> {siteConfig.addressNote}</p>
              </div>
              <a className="btn btn-primary mt-6 w-full" href={whatsappLink()} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
            </div>
            <div className="card min-h-64 bg-zinc-100 p-6">
              <h2 className="text-xl font-black text-zinc-950">Area para mapa</h2>
              <p className="mt-3 leading-7 text-zinc-600">O mapa pode ser incorporado assim que a empresa informar o endereco oficial para exibicao publica.</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
