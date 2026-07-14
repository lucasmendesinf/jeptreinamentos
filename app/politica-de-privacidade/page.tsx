import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade da J&P Treinamentos.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-28">
      <section className="section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-zinc-950">Política de Privacidade</h1>
          <p className="mt-6 leading-8 text-zinc-700">
            A J&P Treinamentos utiliza os dados enviados pelo formulário apenas para responder solicitações comerciais, organizar atendimento e retornar contatos. Dados sensíveis, credenciais e senhas não devem ser enviados pelo formulário.
          </p>
          <p className="mt-4 leading-8 text-zinc-700">
            Para solicitar alteração ou exclusão de informações enviadas, entre em contato pelo e-mail {siteConfig.email}.
          </p>
        </div>
      </section>
    </div>
  );
}
