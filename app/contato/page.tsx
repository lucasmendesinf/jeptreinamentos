import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-data";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contato",
  description: "Solicite orçamento para treinamentos, NRs, brigada de incêndio e serviços de prevenção.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-orange-300">Contato</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Solicite um orçamento ou fale com a equipe.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
            Informe nome, e-mail, telefone, assunto e uma breve mensagem para iniciarmos o atendimento.
          </p>
        </div>
      </section>

      <section className="section bg-zinc-50">
        <div className="mx-auto grid max-w-7xl min-w-0 gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:px-8">
          <div className="min-w-0">
            <ContactForm />
          </div>
          <aside className="grid h-fit min-w-0 gap-5">
            <div className="w-full min-w-0 max-w-full overflow-hidden rounded-sm bg-gradient-to-br from-red-800 via-red-700 to-orange-700 p-5 text-white shadow-2xl shadow-red-950/20 sm:p-7">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-100">Contato</p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Solicite um orçamento para treinamentos e brigada.
              </h2>
              <p className="mt-5 text-base leading-7 text-orange-50">
                Preencha os dados e informe a necessidade da empresa. A equipe da J&P recebe a mensagem por e-mail e retorna com as orientações para o atendimento.
              </p>
              <div className="mt-7 grid gap-3">
                <a className="flex min-w-0 items-center gap-3 break-words rounded-sm border border-white/20 bg-white/10 px-4 py-4 text-sm font-black text-white transition hover:bg-white/15 sm:text-base" href={siteConfig.phoneHref}>
                  <Phone className="h-5 w-5 text-orange-100" />
                  Telefone: {siteConfig.phone}
                </a>
                <a className="flex min-w-0 items-center gap-3 break-words rounded-sm border border-white/20 bg-white/10 px-4 py-4 text-sm font-black text-white transition hover:bg-white/15 sm:text-base" href={whatsappLink()} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-5 w-5 text-orange-100" />
                  WhatsApp: falar agora
                </a>
                <a className="flex min-w-0 items-center gap-3 break-words rounded-sm border border-white/20 bg-white/10 px-4 py-4 text-sm font-black text-white transition hover:bg-white/15 sm:text-base" href={siteConfig.emailHref}>
                  <Mail className="h-5 w-5 text-orange-100" />
                  E-mail: {siteConfig.email}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
