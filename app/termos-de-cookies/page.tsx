import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Termos de Cookies",
  description: "Termos de cookies, privacidade e uso do site da J&P Treinamentos.",
  alternates: { canonical: "/termos-de-cookies" },
};

const sections = [
  {
    title: "1. Uso do site",
    text: "As informacoes publicadas apresentam a J&P Treinamentos, seus servicos, treinamentos, canais de contato e conteudos institucionais. O usuario deve utilizar o site de forma licita, sem tentar comprometer seu funcionamento, seguranca ou conteudo.",
  },
  {
    title: "2. Cookies utilizados",
    text: "O site pode utilizar cookies necessarios ao funcionamento, melhoria da navegacao e registro de preferencias, como o aceite do aviso de cookies. Esses recursos ajudam a manter uma experiencia mais estavel e adequada para o visitante.",
  },
  {
    title: "3. Dados pessoais",
    text: "Dados enviados por formularios ou links de contato, como nome, e-mail, telefone, empresa, cidade, assunto e mensagem, sao utilizados para responder solicitacoes, organizar atendimento e manter registros necessarios a comunicacao, observando a Lei Geral de Protecao de Dados Pessoais.",
  },
  {
    title: "4. Gerenciamento de cookies",
    text: "O usuario pode gerenciar, bloquear ou apagar cookies nas configuracoes do navegador. O bloqueio pode afetar preferencias salvas, como o registro de aceite do aviso.",
  },
  {
    title: "5. Links externos",
    text: "O site pode conter links para WhatsApp, redes sociais e outros ambientes externos. A J&P Treinamentos nao se responsabiliza por politicas, disponibilidade ou conteudos de sites de terceiros.",
  },
  {
    title: "6. Atualizacoes",
    text: "Estes termos podem ser atualizados para refletir mudancas no site, nos servicos, em requisitos legais ou em praticas internas de privacidade e atendimento.",
  },
];

export default function CookieTermsPage() {
  return (
    <div className="pt-28">
      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-red-700 text-white">
            <Cookie className="h-8 w-8" aria-hidden="true" />
          </div>
          <p className="eyebrow text-orange-300">Termos e privacidade</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Termos de cookies e uso do site.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
            Entenda como usamos cookies, preferencias de navegacao e dados enviados pelos canais de contato.
          </p>
        </div>
      </section>

      <section className="section bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.72fr_.28fr] lg:px-8">
          <article className="card p-6 md:p-8">
            <div className="grid gap-7">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-black text-zinc-950">{section.title}</h2>
                  <p className="mt-3 leading-8 text-zinc-700">{section.text}</p>
                </section>
              ))}
              <section>
                <h2 className="text-2xl font-black text-zinc-950">7. Contato</h2>
                <p className="mt-3 leading-8 text-zinc-700">
                  Duvidas sobre estes termos, privacidade ou tratamento de dados podem ser enviadas para{" "}
                  <a className="font-black text-red-700 underline underline-offset-4" href={siteConfig.emailHref}>
                    {siteConfig.email}
                  </a>
                  .
                </p>
              </section>
            </div>
          </article>

          <aside className="card h-fit p-6">
            <ShieldCheck className="h-10 w-10 text-red-700" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-black text-zinc-950">Resumo</h2>
            <p className="mt-3 leading-7 text-zinc-600">
              O aviso de cookies registra apenas sua decisao no navegador. Voce pode limpar essa preferencia pelas configuracoes do proprio navegador.
            </p>
            <Link className="btn btn-primary mt-6 w-full" href="/contato">
              Falar com a equipe
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
